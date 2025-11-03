# 🤖 Bot WhatsApp - Clínica

Bot simples desenvolvido em **Node.js** usando a biblioteca [`whatsapp-web.js`](https://github.com/pedroslopez/whatsapp-web.js).  
Ele envia **respostas automáticas** no WhatsApp informando que a clínica **não realiza atendimentos aos sábados apartir das 12hrs e domingos**.

---

## ⚙️ Funcionalidades
- Responde automaticamente mensagens recebidas aos **fins de semana** (sábado e domingo);
- Exibe um **QR Code** para autenticação do WhatsApp da clínica;
- Mantém a sessão salva localmente (não precisa escanear o QR toda vez);
- Pode ser adaptado para outros tipos de mensagens automáticas.

---
## 🧩 Tecnologias utilizadas
- [Node.js](https://nodejs.org/)
- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js)
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal)

---

## 🚀 Como executar

1. **Instale o Node.js** se ainda não tiver:  
   👉 [https://nodejs.org](https://nodejs.org)

2. **Clone este repositório:**

3. Instale as dependências:
 - npm install whatsapp-web.js qrcode-terminal

4. Execute o bot
 - node bot.js

## 📝 Observações
Este projeto é apenas para estudo.
Para uso profissional e contínuo, considere utilizar a API oficial do WhatsApp Business (Meta/Twilio).

## 👨‍💻 Autor
Desenvolvido por Gabriel Pereira — projeto de estudo com foco em automação via WhatsApp.
