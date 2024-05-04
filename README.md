#Bot de Atendimento para Telegram
Este projeto consiste em um bot de atendimento desenvolvido para o Telegram. O bot é capaz de responder automaticamente às mensagens dos usuários de acordo com o horário comercial e também armazenar e-mails fora do horário comercial para posterior contato.

##Dependências
###Para executar este projeto, você precisará das seguintes dependências:


Node.js: Uma plataforma de código aberto baseada em JavaScript.
Node Telegram Bot API: Uma biblioteca para Node.js que simplifica o desenvolvimento de bots para o Telegram.
Prisma ORM: Uma ferramenta de mapeamento objeto-relacional (ORM) para Node.js.

##Você pode instalar as dependências usando o seguinte comando:

npm init -y
npm i node-telegram-bot-api
npm install prisma --save-dev

##Certifique-se de ter uma conta e um bot criado no Telegram, e obtenha o token de acesso do bot.

##Como usar
Clone este repositório em seu ambiente local.
Certifique-se de ter instalado todas as dependências listadas acima.
Substitua INSIRA_SEU_TOKEN_AQUI no arquivo botfaesa.js com o token de acesso do seu bot.
Execute o arquivo botfaesa.js.
Adicione seu bot ao seu grupo ou inicie uma conversa com ele no Telegram.
Agora seu bot está pronto para responder automaticamente às mensagens durante o horário comercial e armazenar e-mails fora do horário comercial para contato posterior.

##Funcionamento
O bot verifica o horário atual e responde automaticamente às mensagens durante o horário comercial. Fora do horário comercial, ele armazena os e-mails dos usuários para posterior contato.

###Autor
Pedro Henrique Guerra
