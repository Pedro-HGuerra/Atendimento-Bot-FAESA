const TelegramBot = require('node-telegram-bot-api');
const { PrismaClient } = require('@prisma/client');

const token = 'INSIRA O TOKEN AQUI';

//Instanciação do Bot e Banco de Dados.
const bot = new TelegramBot(token, { polling: true });
const prisma = new PrismaClient();

const userStates = {};


//Validação do horário da mensagem.
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;
  const currentHour = new Date().getHours();
  const isBusinessHours = currentHour >= 9 && currentHour < 18;

  if (!userStates[chatId]) {
    userStates[chatId] = 'waitingEmail';
  }

  //Mensagem enviada ao entrar em contato com o Bot, caso esteja em horário de funcionamento.
  if (isBusinessHours) {
    bot.sendMessage(chatId, 'Seja bem-vindo, por favor, acesse o nosso site: https://faesa.br');
  } else {
    
    if (userStates[chatId] === 'waitingEmail' && messageText && messageText.includes('@')) {
        //Processo de criação de User no banco de dados.
        await prisma.user.create({
        data: {
          email: messageText
        }
      });
      userStates[chatId] = 'emailReceived';
      //Mensagem de confirmação de criação do User no banco de dados. 
      bot.sendMessage(chatId, 'O seu email foi registrado! Aguarde que entraremos em contato.');
    } else if (userStates[chatId] === 'waitingEmail') {
      //Mensagem enviada ao entrar em contato com o Bot, caso NÃO esteja em horário de funcionamento.
      bot.sendMessage(chatId, 'Não estamos em horário de funcionamento, informe o seu email para que possamos entrar em contato posteriormente.');
    }
  }
});