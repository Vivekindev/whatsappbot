var qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const axios = require('axios');
const { MessageMedia } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
    
  // Number where you want to send the message.
  const number = "+919986094033";
  var num =1;
  // Your message.
 const text = "Bot ONLINE ";

  // Getting chatId from the number.
  // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
 const chatId = number.substring(1) + "@c.us";

 // Sending message.

 client.sendMessage(chatId, 'HI VIVEK, bot is online');




});


 
client.on('message', async message => {
	
	console.log(message.body);
    if(message.body === 'Hi' || message.body === 'hi' ) {
		message.reply('hello, this is bot replying');
	}
    else if(message.body === 'How are you') {
		message.reply('I am Fine');
	}
    else if(message.body === 'What is your name') {
		message.reply('I am personal BOT of my owner');
	}
	else if(message.body === 'meme' || message.body === 'Meme'){
const meme =  await axios("https://meme-api.herokuapp.com/gimme").then(res => res.data)
	client.sendMessage(message.from, await MessageMedia.fromUrl(meme.url))
}
   else{
	message.reply(message.body);
}

});



client.initialize();