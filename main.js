const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const fs = require("fs");


fs.rmSync(".wwebjs_auth", { recursive: true, force: true });

const client = new Client({
  authStrategy: new LocalAuth({
    clientId: "Default",
    restartOnAuthFail: true
  })
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
    msg.reply(
            "Olá!! Tudo bem? 😊\n" +
            "Aqui é da Clínica Sorrir Odontologia Piumhi!!\n" +
            "Não estamos em atendimento no momento!! Assim que retornarmos, entraremos em contato!! Obrigada!! 😊"
        );
  }
});

client.initialize();
