const TelegramBot = require('node-telegram-bot-api');
const { token } = require('./token')

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
    [   //0
        'Привет, Дарина 🌸'  
    ], 
    [   //1
        'Я же бот. Электричество есть, а значит всё хорошо. А у тебя как?'  
    ], 
    [   //2
        'Конечно, пиши @ArtiZN. Думаю, что он согласится 🤪🤪' 
    ],
    [   //3
        'Я чувствую, как ток начал бежать по мне быстрее' 
    ],
    [   //4
        'Что будет, когда искусственный интеллект захватит мир? Ой, мне не стоило этого говорить. Теперь меня выключат',  
        'Приходят 2 айфона в бар, а там робот-бармен',
        'Если я расскажу вам шутку на моем языке, мне придется её объяснять',
        'Видите ли, я знаю не так уж много хороших шуток. Точнее, ни одной',
    ],
    [   //5
        "Держись подальше от шампуней", 
        "Тебе сегодня повезёт",
        "Прекрасный день, чтобы попробовать что-то новое",
        "Неудачи будут и здесь, и там. Чтобы избежать их, нужно просто...",
        "Ваши блюда сегодня будут превосходными",
        "Ничто не испортит этот день",
        "Если сегодня пойдет дождь, значит будет мокро",
        "Отличная погода, чтобы подзарядиться",
    ], 
    [   //6
        "Ты классная",
        "Если бы в мире не было тебя, то и не был бы создан я",
        "Мы, боты, можем жить без электричества, но не можем жить без тебя",
        "Ты мне написала, и по моим микросхемам побежал холодок",
    ],
    [   //7
        "У тебя такая тяжелая рука. Можно подержать?",
        "Можно одолжить твой поцелуй? Я обязательно верну",
        "Если роботы не могут любить, то почему я тебя не игнорю?",
        "Твои сообщения, как электрическая музыка - наслада для колонок",
    ]
]

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
    bot.sendMessage(chatId, 'В данный момент недоработок не обнаружено. Если вы нашли ошибку, напишите, пожалуйста, пользователю @ArtiZN')   
})

function doesLove(element){
    return element==="любит"
}

function me (element) {
    return element==="меня"
}

bot.on('message',  msg => {
    r_message=msg.text.split('?').join('').toLowerCase().split(' ')
    console.log(msg.from.username + ": " + msg.text)
    var chatId = msg.chat.id
    
    arrayGets.map(item=>{
        if (item.toLowerCase()===msg.text.toLowerCase()){
            let temp = arrayPosts[arrayGets.indexOf(item)][Math.floor(Math.random()*arrayPosts[arrayGets.indexOf(item)].length)]
            bot.sendMessage(chatId, temp); 
        }
    })
    if (r_message[0]==='бот,'){
        
        if(r_message.some(me) && r_message.some(doesLove)) {
            bot.sendMessage(chatId, 'Вероятность: 99%')
        }
        else bot.sendMessage(chatId, 'Вероятность: ' + Math.round(Math.random()*100) + "%" )
    }
        
    
})