var TelegramBot = require('node-telegram-bot-api');

let arrayGets = [
    'Привет', 
    'Как дела?', 
    "Пойдем гулять?",
    "Я тебя люблю",
    "Расскажи шутку",
]

let arrayPosts = [
    'Привет, Дарина 🌸', 
    'Я же бот. Электричество есть, а значит всё хорошо. А у тебя как?', 
    "Конечно, пиши @ArtiZN. Думаю, что он согласится 🤪🤪",
    "Я чувствую, как ток начал бежать по мне быстрее",
    "Что будет, когда искусственный интеллект захватит мир? Ой, мне не стоило этого говорить. Теперь меня выключат"
]

var token = '1110014596:AAGlNyYlK7LBfh5iGLsQoCr6lFjW5gU8_uI';
var bot = new TelegramBot(token, { polling: true });

bot.on('edited_message', msg => {
    var chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Я всё вижу -_-');
})
console.log()

bot.onText(/\/help/, (msg)=>{
    const chatId = msg.chat.id
    bot.sendMessage(chatId, "Отвечаю на фразы:\n" + String(arrayGets.map(item => {return item})).split(',').join('\n'))   
})

bot.onText(/\/author/, (msg)=>{
    const chatId = msg.chat.id
    bot.sendMessage(chatId, '@ArtiZN')   
})
bot.onText(/\/problems/, (msg)=>{
    const chatId = msg.chat.id
    bot.sendMessage(chatId, 'В данный момент недоработок не обнаружено')   
})

bot.on('message',  msg => {
    var chatId = msg.chat.id
    arrayGets.map(item=>{
        if (item.toLowerCase()===msg.text.toLowerCase())
        return bot.sendMessage(chatId, arrayPosts[arrayGets.indexOf(item)])
    })
})