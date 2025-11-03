const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on("qr", qr => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Bot da clínica está online!");
});

client.on("message", async msg => {
  // Log mensagens
  const timestamp = new Date().toLocaleString();
  const sender = await msg.getContact();
  console.log(`\n[${timestamp}] Nova mensagem:`);
  console.log(`Message ID: [${msg.id._serialized}]`);
  console.log(`De: ${sender.pushname || 'Desconhecido'} (${msg.from})`);
  console.log(`Mensagem: ${msg.body}`);
  console.log('-'.repeat(50));

  // Verifica o horário atual
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay();

  // Resposta automática aos sábados após as 12h e domingos
  if ((day === 6 && hour >= 12) || day === 0) {
    msg.reply("Olá!! Tudo bem? \nAqui é da Clínica Sorrir Odontologia Piumhi!! 😊 \nNão estamos em atendimento no momento!! Assim que retornarmos os atendimentos, retornaremos o contato!! Obrigada!! 😊");
  }
});

client.initialize();
