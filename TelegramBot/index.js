var TelegramBot = require('node-telegram-bot-api');

const arrayGets = [
    'Привет', 
    'Как дела?', 
    "Пойдем гулять?",
    "Я тебя люблю",
    "Расскажи шутку",
    'Предсказание на день',
    "Факт обо мне",
    "Фраза для подката",
]

const arrayPosts = [
    'Привет, Дарина 🌸', 
    'Я же бот. Электричество есть, а значит всё хорошо. А у тебя как?', 
    'Конечно, пиши @ArtiZN. Думаю, что он согласится 🤪🤪',
    'Я чувствую, как ток начал бежать по мне быстрее',
    [   
        'Что будет, когда искусственный интеллект захватит мир? Ой, мне не стоило этого говорить. Теперь меня выключат', 
        'Приходят 2 айфона в бар, а там робот-бармен',
        'Если я расскажу вам шутку на моем языке, мне придется её объяснять',
        'Видите ли, я знаю не так уж много хороших шуток. Точнее, ни одной',
    ],
    [
        "Держись подальше от шампуней",
        "Тебе сегодня повезёт",
        "Прекрасный день, чтобы попробовать что-то новое",
        "Неудачи будут и здесь, и там. Чтобы избежать их, нужно просто...",
        "Ваши блюда сегодня будут превосходными",
        "Ничто не испортит этот день",
        "Если сегодня пойдет дождь, значит будет мокро",
        "Отличная погода, чтобы подзарядиться",
    ], 
    [
        "Ты классная",
        "Если бы в мире не было тебя, то и не был бы создан я",
        "Мы, боты, можем жить без электричества, но не можем жить без тебя",
        "Ты мне написала, и по моим микросхемам побежал холодок",
    ],
    [
        "У тебя такая тяжелая рука. Можно подержать?",
        "Можно одолжить твой поцелуй? Я обязательно верну",
        "Если роботы не могут любить, то почему я тебя не игнорю?",
        "Твои сообщения, как электрическая музыка - наслада для колонок",
    ]
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
            switch(arrayGets.indexOf(item)){
                //этот кусок кода нужно переписать
                case 4: bot.sendMessage(chatId, arrayPosts[4][Math.floor(Math.random()*arrayPosts[4].length)]); break;
                case 5: bot.sendMessage(chatId, arrayPosts[5][Math.floor(Math.random()*arrayPosts[5].length)]); break;
                case 6: bot.sendMessage(chatId, arrayPosts[6][Math.floor(Math.random()*arrayPosts[6].length)]); break;
                case 7: bot.sendMessage(chatId, arrayPosts[7][Math.floor(Math.random()*arrayPosts[7].length)]); break;
                default : bot.sendMessage(chatId, arrayPosts[arrayGets.indexOf(item)]); break;
            } 
        }
    })
    if (r_message[0]==='бот,'){
        
        if(r_message.some(me) && r_message.some(doesLove)) {
            bot.sendMessage(chatId, 'Вероятность: 99%')
        }
        else bot.sendMessage(chatId, 'Вероятность: ' + Math.round(Math.random()*100) + "%" )
    }
        
    
})