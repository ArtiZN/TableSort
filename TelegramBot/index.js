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
var r_message;
const info = 'Бот, [вопрос] - покажет вероятность этого события с огромной точностью'

bot.on('edited_message', msg => {
    var chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Я всё вижу -_-');
})

bot.onText(/\/help/, (msg)=>{
    const chatId = msg.chat.id
    bot.sendMessage(chatId, "Отвечаю на фразы:\n" + String(arrayGets.map(item => {return item})).split(',').join('\n') + "\n\n"+ info)   
})

bot.onText(/\/author/, (msg)=>{
    const chatId = msg.chat.id
    bot.sendMessage(chatId, '@ArtiZN')   
})
bot.onText(/\/problems/, (msg)=>{
    const chatId = msg.chat.id
    bot.sendMessage(chatId, 'В данный момент недоработок не обнаружено')   
})

function doesLove(element){
    return element==="любит"
}

function me (element) {
    return element==="меня"
}

bot.on('message',  msg => {
    r_message=msg.text.split('?').join('').toLowerCase().split(' ')
    console.log(r_message)
    var chatId = msg.chat.id
    
    arrayGets.map(item=>{
        if (item.toLowerCase()===msg.text.toLowerCase()){
            return bot.sendMessage(chatId, arrayPosts[arrayGets.indexOf(item)])
        }
    })
    if (r_message[0]==='бот,'){
        
        if(r_message.some(me) && r_message.some(doesLove)) {
            bot.sendMessage(chatId, 'Вероятность: 99%')
            console.log('some - checked')
        }
        else bot.sendMessage(chatId, 'Вероятность: ' + Math.round(Math.random()*100) + "%" )
    }
        
    
})