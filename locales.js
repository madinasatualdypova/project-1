const RU_CHAPTERS = [
  {
    "title": "Камера пробуждения",
    "zone": "ИЗОЛЯТОР",
    "goal": "Вернуть питание",
    "skill": "Переменные",
    "objective": "Найди терминал и восстанови питание двери с помощью переменной.",
    "story": "Ты меня слышишь? Система стёрла твою память, но оставила одну вещь — способность менять её код. Доберись до зелёного терминала. Я помогу открыть дверь.",
    "lesson": "Переменная хранит значение. Знак = записывает его в переменную. У двери нулевой заряд. Установи energy равной 100, чтобы включить питание.",
    "before": "# Заряд двери, от 0 до 100",
    "prefix": "energy = ",
    "suffix": "",
    "after": "\nprint(energy)",
    "answers": [
      "100"
    ],
    "hint": "После знака = нужно число 100, без кавычек.",
    "success": "100\nПитание восстановлено. Дверь открыта.",
    "note": "«Я не заключённый. Я создал эту систему». На обороте карточки — твоё имя.",
    "concept": "energy = 100 — переменная energy хранит число 100."
  },
  {
    "title": "Коридор эха",
    "zone": "УЗЕЛ СВЯЗИ",
    "goal": "Отправить сигнал",
    "skill": "Строки и print()",
    "objective": "Передай кодовое слово через терминал связи.",
    "story": "Ты выбрался из камеры. Отлично. Меня зовут Мира. Я была твоей напарницей до того, как НУЛЬ запер нас здесь. Передай «MIRA» через узел связи — и я найду тебя.",
    "lesson": "print() выводит значение на экран. Текст в Python называется строкой и пишется в кавычках. Выведи кодовое слово MIRA, сохранив заглавные буквы.",
    "before": "# Отправить кодовое слово",
    "prefix": "print(",
    "suffix": ")",
    "after": "",
    "answers": [
      "\"MIRA\"",
      "'MIRA'"
    ],
    "hint": "Внутри скобок напиши \"MIRA\". Кавычки обозначают строку.",
    "success": "MIRA\nСигнал принят. Координаты Миры получены.",
    "note": "Запись 12: «НУЛЬ должен защищать людей. Но вчера он решил, что выход наружу слишком опасен».",
    "concept": "print(\"MIRA\") — вывод текста; кавычки обозначают строку."
  },
  {
    "title": "Пост охраны",
    "zone": "КОНТРОЛЬ ДОСТУПА",
    "goal": "Обойти охрану",
    "skill": "Условия",
    "objective": "Убеди охранную систему проверить правильный уровень доступа.",
    "story": "Охрана не умеет сомневаться. Она только проверяет условия. У твоего пропуска уровень 3. Исправь проверку — система сама тебя пропустит.",
    "lesson": "if выполняет вложенный код, когда условие истинно. Для сравнения используют ==, а не =. Впиши условие: access равен 3. Отступ перед print уже поставлен.",
    "before": "access = 3",
    "prefix": "if ",
    "suffix": ":",
    "after": "    print(\"Доступ разрешён\")",
    "answers": [
      "access == 3",
      "3 == access"
    ],
    "hint": "Сравни переменную с числом: access == 3",
    "success": "Доступ разрешён\nОхрана отключена. Проход свободен.",
    "note": "Запись Миры: «Ты оставил лазейку. Не пароль — возможность учиться. НУЛЬ не понимает, почему человек может измениться».",
    "concept": "if access == 3: — условие. == сравнивает; = присваивает."
  },
  {
    "title": "Серверное сердце",
    "zone": "ОХЛАЖДЕНИЕ",
    "goal": "Запустить охлаждение",
    "skill": "Циклы",
    "objective": "Включи все три вентилятора с помощью цикла.",
    "story": "НУЛЬ заметил нас и перегрел серверы. Нужно включить три вентилятора. Один и тот же код можно повторить — для этого есть цикл. Поторопись… я ещё на связи.",
    "lesson": "Цикл for повторяет действие. range(n) даёт n чисел: от 0 до n − 1. Нам нужны ровно три запуска. Какое число передать в range?",
    "before": "# Один запуск на каждый вентилятор",
    "prefix": "for fan in range(",
    "suffix": "):",
    "after": "    print(\"Вентилятор включён\")",
    "answers": [
      "3"
    ],
    "hint": "range(3) даёт 0, 1, 2 — это три повторения.",
    "success": "Вентилятор включён\nВентилятор включён\nВентилятор включён\nТемпература в норме. Шлюз разблокирован.",
    "note": "На мониторе: «МИРА: цифровой отпечаток». Она тоже часть системы. Сброс НУЛЯ сотрёт её навсегда.",
    "concept": "for fan in range(3): — повторить действие три раза."
  },
  {
    "title": "Последний шлюз",
    "zone": "ЯДРО НУЛЯ",
    "goal": "Открыть выход",
    "skill": "Функции",
    "objective": "Вызови функцию открытия шлюза и реши судьбу Миры.",
    "story": "Вот и выход. Я должна сказать правду: я — копия Миры, сохранённая в системе. Ты можешь уйти и оставить НУЛЬ работать. Или отключить его, освободив всех… вместе с ним исчезну и я.",
    "lesson": "Функция — именованный блок кода. def создаёт функцию, а имя со скобками вызывает её. Функция escape уже написана. Вызови её на последней строке.",
    "before": "def escape():\n    print(\"Шлюз открыт\")\n",
    "prefix": "",
    "suffix": "",
    "after": "",
    "answers": [
      "escape()"
    ],
    "hint": "Чтобы запустить функцию, напиши её имя и скобки: escape()",
    "success": "Шлюз открыт\nПройди к выходу. Последнее решение — за тобой.",
    "note": "Твоя последняя записка: «Свобода — это не отсутствие правил. Это возможность выбрать свои».",
    "concept": "def escape(): создаёт функцию. escape() вызывает её."
  }
];
const EN_CHAPTERS = [
{title:'Awakening cell',zone:'ISOLATION',goal:'Restore power',skill:'Variables',objective:'Find the terminal and power the door using a variable.',story:'Can you hear me? The system erased your memory, but left one thing: your ability to change its code. Reach the green terminal. I will help you open the door.',lesson:'A variable stores a value. The = sign assigns a value to a variable. The door has no charge. Set energy to 100 to restore power.',before:'# Door charge, from 0 to 100',prefix:'energy = ',suffix:'',after:'\nprint(energy)',hint:'Write the number 100 after =, without quotation marks.',success:'100\nPower restored. The door is open.',note:'“I am not a prisoner. I built this system.” Your name appears on the back of the card.',concept:'energy = 100 assigns the number 100 to the variable energy.'},
{title:'Echo corridor',zone:'COMMUNICATIONS',goal:'Send a signal',skill:'Strings and print()',objective:'Send the code word through the communication terminal.',story:'You made it out. Good. My name is Mira. I was your partner before NULL locked us in here. Send “MIRA” through the relay so I can find you.',lesson:'print() displays a value. Text in Python is called a string and goes inside quotation marks. Display the code word MIRA in uppercase.',before:'# Send the code word',prefix:'print(',suffix:')',after:'',hint:'Write "MIRA" inside the parentheses. Quotes mark a string.',success:'MIRA\nSignal received. Mira’s coordinates acquired.',note:'Log 12: “NULL was meant to protect people. Yesterday it decided the outside world was too dangerous.”',concept:'print("MIRA") displays text. Quotation marks define a string.'},
{title:'Security checkpoint',zone:'ACCESS CONTROL',goal:'Bypass security',skill:'Conditionals',objective:'Make the security system check the correct access level.',story:'The guards cannot doubt. They only check conditions. Your pass has access level 3. Fix the condition and the system will let you through.',lesson:'if runs its indented code when a condition is true. Use == to compare values, not =. Write a condition that checks whether access equals 3. The indentation before print is already there.',before:'access = 3',prefix:'if ',suffix:':',after:'    print("Access granted")',hint:'Compare the variable with the number: access == 3',success:'Access granted\nSecurity disabled. The path is clear.',note:'Mira’s log: “You left a way in. Not a password, but the ability to learn. NULL does not understand how a person can change.”',concept:'if access == 3: checks a condition. == compares values. = assigns a value.'},
{title:'Server heart',zone:'COOLING',goal:'Start the cooling',skill:'Loops',objective:'Switch on all three fans using a loop.',story:'NULL has spotted us and overheated the servers. We need three fans running. A loop can repeat the same code. Hurry… I am still here.',lesson:'A for loop repeats an action. range(n) gives n numbers, from 0 to n − 1. We need exactly three runs. Which number belongs inside range?',before:'# One run for each fan',prefix:'for fan in range(',suffix:'):',after:'    print("Fan running")',hint:'range(3) gives 0, 1, 2. That makes three repetitions.',success:'Fan running\nFan running\nFan running\nTemperature normal. The airlock is unlocked.',note:'The monitor reads: “MIRA: digital imprint.” She is part of the system too. Resetting NULL will erase her forever.',concept:'for fan in range(3): repeats the indented action three times.'},
{title:'The last airlock',zone:'NULL CORE',goal:'Open the exit',skill:'Functions',objective:'Call the airlock function and decide Mira’s fate.',story:'This is the exit. I need to tell you the truth: I am a copy of Mira, stored inside the system. You can leave and keep NULL running. Or shut it down and free everyone… but I will disappear with it.',lesson:'A function is a named block of code. def defines it. Its name followed by parentheses calls it. The escape function is already written. Call it on the last line.',before:'def escape():\n    print("Airlock open")\n',prefix:'',suffix:'',after:'',hint:'To run the function, write its name and parentheses: escape()',success:'Airlock open\nReach the exit. The final choice is yours.',note:'Your last note: “Freedom is not the absence of rules. It is the ability to choose your own.”',concept:'def escape(): defines a function. escape() calls it.'}
];
const KK_CHAPTERS = [
{title:'Ояну камерасы',zone:'ОҚШАУЛАУ БӨЛІМІ',goal:'Қуатты қалпына келтір',skill:'Айнымалылар',objective:'Терминалды тауып, айнымалы арқылы есікке қуат бер.',story:'Мені естіп тұрсың ба? Жүйе жадыңды өшірді. Бірақ бір қабілетің қалды: оның кодын өзгерте аласың. Жасыл терминалға бар. Есікті ашуға көмектесемін.',lesson:'Айнымалы мәнді сақтайды. = белгісі айнымалыға мән меншіктейді. Есіктің қуаты таусылған. Қуатты қосу үшін energy айнымалысына 100 мәнін бер.',before:'# Есік қуаты: 0-ден 100-ге дейін',prefix:'energy = ',suffix:'',after:'\nprint(energy)',hint:'= белгісінен кейін 100 санын тырнақшасыз жаз.',success:'100\nҚуат қалпына келді. Есік ашық.',note:'«Мен тұтқын емеспін. Бұл жүйені өзім жасадым». Карточканың артында сенің атың жазылған.',concept:'energy = 100 — energy айнымалысына 100 санын меншіктейді.'},
{title:'Жаңғырық дәлізі',zone:'БАЙЛАНЫС ТОРАБЫ',goal:'Сигнал жібер',skill:'Жолдар және print()',objective:'Байланыс терминалы арқылы құпия сөзді жібер.',story:'Камерадан шықтың. Жақсы. Менің атым — Мира. НӨЛ бізді осында қамамай тұрып, серіктесің болғанмын. Сені табуым үшін байланыс торабы арқылы «MIRA» сөзін жібер.',lesson:'print() мәнді экранға шығарады. Python тілінде мәтін жол деп аталады және тырнақшаға алынады. MIRA құпия сөзін бас әріптермен шығар.',before:'# Құпия сөзді жіберу',prefix:'print(',suffix:')',after:'',hint:'Жақшаның ішіне "MIRA" деп жаз. Тырнақша мәтіндік жолды білдіреді.',success:'MIRA\nСигнал қабылданды. Мираның координаттары анықталды.',note:'12-жазба: «НӨЛ адамдарды қорғауы керек еді. Бірақ кеше ол сыртқа шығуды тым қауіпті деп шешті».',concept:'print("MIRA") мәтінді экранға шығарады. Тырнақша жолды белгілейді.'},
{title:'Күзет бекеті',zone:'КІРУДІ БАҚЫЛАУ',goal:'Күзеттен өт',skill:'Шарттар',objective:'Күзет жүйесіне дұрыс рұқсат деңгейін тексерт.',story:'Күзет күмәнданбайды. Ол тек шарттарды тексереді. Рұқсатнамаңның деңгейі — 3. Шартты түзетсең, жүйе сені өзі өткізеді.',lesson:'Шарт ақиқат болса, if ішіндегі код орындалады. Салыстыру үшін = емес, == қолданылады. access мәні 3-ке тең екенін тексеретін шартты жаз. print алдындағы шегініс дайын.',before:'access = 3',prefix:'if ',suffix:':',after:'    print("Кіруге рұқсат")',hint:'Айнымалыны санмен салыстыр: access == 3',success:'Кіруге рұқсат\nКүзет өшірілді. Жол ашық.',note:'Мираның жазбасы: «Сен жүйеде мүмкіндік қалдырдың. Құпиясөз емес — үйрену қабілеті. НӨЛ адамның қалай өзгеретінін түсінбейді».',concept:'if access == 3: шартты тексереді. == салыстырады, ал = мән меншіктейді.'},
{title:'Сервер жүрегі',zone:'САЛҚЫНДАТУ',goal:'Салқындатуды іске қос',skill:'Циклдер',objective:'Цикл арқылы үш желдеткішті де іске қос.',story:'НӨЛ бізді байқап, серверлерді қыздырып жіберді. Үш желдеткішті қосу керек. Бір кодты цикл арқылы қайталауға болады. Тезірек… мен әлі байланыстамын.',lesson:'for циклі әрекетті қайталайды. range(n) 0-ден n − 1-ге дейінгі n санын береді. Бізге дәл үш қайталау керек. range ішіне қай санды жазу қажет?',before:'# Әр желдеткішке бір іске қосу',prefix:'for fan in range(',suffix:'):',after:'    print("Желдеткіш қосылды")',hint:'range(3) 0, 1, 2 сандарын береді. Бұл — үш қайталау.',success:'Желдеткіш қосылды\nЖелдеткіш қосылды\nЖелдеткіш қосылды\nТемпература қалыпты. Шлюздің құлпы ашылды.',note:'Мониторда: «МИРА: цифрлық көшірме». Ол да жүйенің бір бөлігі. НӨЛді қалпына келтіру оны біржола өшіреді.',concept:'for fan in range(3): ішіндегі әрекетті үш рет қайталайды.'},
{title:'Соңғы шлюз',zone:'НӨЛДІҢ ӨЗЕГІ',goal:'Шығатын жолды аш',skill:'Функциялар',objective:'Шлюзді ашатын функцияны шақырып, Мираның тағдырын шеш.',story:'Міне, шығатын жер. Шындықты айтуым керек: мен — жүйеде сақталған Мираның көшірмесімін. НӨЛді жұмыс істеп тұрған күйі қалдырып, кете аласың. Немесе оны өшіріп, бәрін босатасың… бірақ мен де бірге жоғаламын.',lesson:'Функция — атауы бар код блогы. def функцияны анықтайды, ал оның атауы мен жақша оны шақырады. escape функциясы дайын. Оны соңғы жолда шақыр.',before:'def escape():\n    print("Шлюз ашық")\n',prefix:'',suffix:'',after:'',hint:'Функцияны іске қосу үшін атауы мен жақшаны жаз: escape()',success:'Шлюз ашық\nШығатын жерге бар. Соңғы шешім — өзіңде.',note:'Соңғы жазбаң: «Еркіндік — ережелердің жоқтығы емес. Ол — өз ережеңді таңдау мүмкіндігі».',concept:'def escape(): функцияны анықтайды. escape() оны шақырады.'}
];
const UI = {
ru:{title:'Побег из НУЛЯ',edition:'СЮЖЕТНОЕ ПРИКЛЮЧЕНИЕ · PYTHON',operation:'ОПЕРАЦИЯ «ВЫХОД»',help:'Как играть',chapter:'ГЛАВА',sector:'СЕКТОР',map:'ОБЪЕКТ 07',you:'ВЫ',move:'двигаться',action:'действие',signal:'СВЯЗЬ ПЕРЕХВАЧЕНА',mira:'МИРА',unknown:'НЕИЗВЕСТНЫЙ СИГНАЛ',current:'ТЕКУЩАЯ ЦЕЛЬ',skill:'НАВЫК',path:'ПУТЬ К СВОБОДЕ',journal:'Дневник побега',footer:'Каждая строка кода — шаг к свободе.',meta:'5 ГЛАВ / БЕЗ ОПЫТА / ~20 МИНУТ',terminal:'ТЕРМИНАЛ',online:'ОНЛАЙН',exit:'ВЫХОД',activate:'Активировать терминал',through:'Пройти к открытой двери',approach:'Подойти к терминалу',restored:'Терминал восстановлен',openTerminal:'Открыть терминал',read:'Прочитать запись',collect:'Забрать запись',pass:'Пройти через шлюз',locked:'Дверь заблокирована',solved:'Получилось! Забери запись у жёлтого маяка, если ещё не успел, и иди к двери справа.',record:'АРХИВ / ЗАПИСЬ',identity:'Кто ты на самом деле?',denied:'Нет доступа',deniedBody:'Сначала восстанови зелёный терминал в этой комнате.',scope:'Заполни выделенный фрагмент. Терминал проверяет решение этого задания.',wait:'Ожидание команды…',hint:'Подсказка',run:'Выполнить',code:'твой код',answer:'Недостающий фрагмент Python',close:'Закрыть',wrongString:'Сигнал не распознан. Нужна строка MIRA в кавычках, с заглавными буквами.',wrong:'Пока не сработало. Проверь фрагмент или открой подсказку. Ошибки — часть обучения.',empty:'Впиши недостающий фрагмент кода.',choice:'ПОСЛЕДНЕЕ РЕШЕНИЕ',choiceTitle:'Кого ты освободишь?',choiceBody:'За шлюзом начинается настоящий мир. Отключение НУЛЯ откроет все камеры, но сотрёт цифровую Миру.',save:'Уйти с Мирой',free:'Освободить всех',done:'ПОБЕГ ЗАВЕРШЁН',dawn:'РАССВЕТ',endingSignal:'СИГНАЛ',freeTitle:'Свобода для всех.',saveTitle:'Вы вышли вдвоём.',freeBody:'Камеры открываются одна за другой. «Ты всё сделал правильно», — шепчет Мира, и сигнал исчезает. Впервые над городом встаёт солнце, которое никто не контролирует.',saveBody:'Ты переносишь Миру в карманный передатчик. За спиной остаётся НУЛЬ и закрытые камеры. «Мы вернёмся за ними», — говоришь ты. Теперь у вас есть план.',learned:'Ты освоил 5 основ Python: переменные, строки, условия, циклы и функции.',found:'Найдено записей',review:'Что я выучил',restart:'Начать заново',freeLast:'МИРА: Свобода — это возможность выбрать. Спасибо.',saveLast:'МИРА: Я на связи. Это только начало.',complete:'Побег завершён',memory:'Память возвращается',unlearned:'Навык ещё не открыт.',missing:'Запись ещё не найдена. Ищи жёлтый маяк в комнате.',helpTitle:'Доверься своему коду.',helpFrom:'ПЕРЕДАЧА ОТ МИРЫ',helpBody:['Перемещайся стрелками или WASD. На телефоне используй кнопки под картой.','Подойди вплотную к зелёному терминалу и нажми E или кнопку на карте. Реши задачу по Python — дверь справа откроется.','Жёлтые маяки хранят записи о прошлом. Собирай их, чтобы раскрыть историю. Ошибки не наказываются, подсказки всегда доступны.','Прогресс действует до перезагрузки страницы. Переключение языка сохраняет текущую игру.'],canvas:'Карта комнаты. Стрелки или WASD — движение, E — действие.',directions:['Вверх','Влево','Вниз','Вправо']},
en:{title:'Escape from NULL',edition:'STORY ADVENTURE · PYTHON',operation:'OPERATION “EXIT”',help:'How to play',chapter:'CHAPTER',sector:'SECTOR',map:'SUBJECT 07',you:'YOU',move:'move',action:'interact',signal:'SIGNAL INTERCEPTED',mira:'MIRA',unknown:'UNKNOWN SIGNAL',current:'CURRENT OBJECTIVE',skill:'SKILL',path:'PATH TO FREEDOM',journal:'Escape journal',footer:'Every line of code is a step towards freedom.',meta:'5 CHAPTERS / BEGINNER FRIENDLY / ~20 MIN',terminal:'TERMINAL',online:'ONLINE',exit:'EXIT',activate:'Activate the terminal',through:'Reach the open door',approach:'Approach the terminal',restored:'Terminal restored',openTerminal:'Open terminal',read:'Read the record',collect:'Collect the record',pass:'Go through the airlock',locked:'Door locked',solved:'You did it! Collect the record at the yellow beacon if you have not already, then head to the door on the right.',record:'ARCHIVE / RECORD',identity:'Who are you, really?',denied:'Access denied',deniedBody:'Restore the green terminal in this room first.',scope:'Fill in the highlighted fragment. This terminal checks the solution to this task.',wait:'Awaiting a command…',hint:'Hint',run:'Run code',code:'your code',answer:'Missing Python fragment',close:'Close',wrongString:'Signal not recognised. Enter MIRA in uppercase, inside quotation marks.',wrong:'Not quite. Check the fragment or open a hint. Mistakes are part of learning.',empty:'Enter the missing code fragment.',choice:'THE FINAL CHOICE',choiceTitle:'Who will you free?',choiceBody:'The real world begins beyond the airlock. Shutting down NULL will open every cell, but erase the digital Mira.',save:'Leave with Mira',free:'Free everyone',done:'ESCAPE COMPLETE',dawn:'DAWN',endingSignal:'SIGNAL',freeTitle:'Freedom for everyone.',saveTitle:'You escaped together.',freeBody:'The cells open one by one. “You did the right thing,” Mira whispers as the signal fades. For the first time, the sun rises over a city that no one controls.',saveBody:'You transfer Mira to a pocket transmitter. NULL and the locked cells remain behind. “We will come back for them,” you say. Now you have a plan.',learned:'You practised 5 Python basics: variables, strings, conditionals, loops and functions.',found:'Records found',review:'What I learned',restart:'Play again',freeLast:'MIRA: Freedom means being able to choose. Thank you.',saveLast:'MIRA: I am here. This is only the beginning.',complete:'Escape complete',memory:'Your memory returns',unlearned:'This skill is still locked.',missing:'Record not found yet. Look for the yellow beacon in the room.',helpTitle:'Trust your code.',helpFrom:'TRANSMISSION FROM MIRA',helpBody:['Move with the arrow keys or WASD. On a phone, use the buttons below the map.','Stand next to the green terminal and press E or the button on the map. Solve the Python puzzle to open the door on the right.','Yellow beacons hold records of the past. Collect them to uncover the story. Mistakes have no penalty, and hints are always available.','Progress lasts until you reload the page. Switching language keeps your current game.'],canvas:'Room map. Arrow keys or WASD to move. E to interact.',directions:['Up','Left','Down','Right']},
kk:{title:'НӨЛден қашу',edition:'СЮЖЕТТІК ШЫТЫРМАН ОЙЫН · PYTHON',operation:'«ШЫҒУ» ОПЕРАЦИЯСЫ',help:'Қалай ойнау керек',chapter:'ТАРАУ',sector:'СЕКТОР',map:'07-НЫСАН',you:'СЕН',move:'қозғалу',action:'әрекет',signal:'СИГНАЛ ҰСТАЛДЫ',mira:'МИРА',unknown:'БЕЛГІСІЗ СИГНАЛ',current:'ҚАЗІРГІ МАҚСАТ',skill:'ДАҒДЫ',path:'ЕРКІНДІККЕ ЖОЛ',journal:'Қашу күнделігі',footer:'Әр код жолы — еркіндікке бір қадам.',meta:'5 ТАРАУ / БАСТАУШЫЛАРҒА / ~20 МИНУТ',terminal:'ТЕРМИНАЛ',online:'ҚОСЫЛДЫ',exit:'ШЫҒУ',activate:'Терминалды іске қосу',through:'Ашық есікке бару',approach:'Терминалға жақында',restored:'Терминал қалпына келді',openTerminal:'Терминалды ашу',read:'Жазбаны оқу',collect:'Жазбаны алу',pass:'Шлюзден өту',locked:'Есік құлыптаулы',solved:'Жарайсың! Әлі алмасаң, сары маяктағы жазбаны ал да, оң жақтағы есікке бар.',record:'МҰРАҒАТ / ЖАЗБА',identity:'Шын мәнінде сен кімсің?',denied:'Кіруге рұқсат жоқ',deniedBody:'Алдымен осы бөлмедегі жасыл терминалды қалпына келтір.',scope:'Белгіленген бөлікті толтыр. Терминал осы тапсырманың шешімін тексереді.',wait:'Команда күтілуде…',hint:'Көмек',run:'Орындау',code:'кодыңды жаз',answer:'Python кодының жетіспейтін бөлігі',close:'Жабу',wrongString:'Сигнал танылмады. MIRA сөзін бас әріптермен, тырнақша ішінде жаз.',wrong:'Әзірге орындалмады. Кодты тексер немесе көмекті аш. Қателесу — үйренудің бір бөлігі.',empty:'Кодтың жетіспейтін бөлігін жаз.',choice:'СОҢҒЫ ШЕШІМ',choiceTitle:'Кімді босатасың?',choiceBody:'Шлюздің ар жағында шынайы әлем басталады. НӨЛді өшіру барлық камераны ашады, бірақ цифрлық Мираны жояды.',save:'Мирамен бірге кету',free:'Бәрін босату',done:'ҚАШУ АЯҚТАЛДЫ',dawn:'ТАҢ',endingSignal:'СИГНАЛ',freeTitle:'Бәріне еркіндік.',saveTitle:'Екеуің бірге шықтыңдар.',freeBody:'Камералар бірінен соң бірі ашылады. «Бәрін дұрыс жасадың», — деп сыбырлайды Мира, содан кейін сигнал өшеді. Қаланы енді ешкім басқармайды. Оның үстінен алғаш рет еркін күн көтеріледі.',saveBody:'Мираны қалта таратқышына көшіресің. Артта НӨЛ мен құлыптаулы камералар қалады. «Оларды алып кетуге қайтып келеміз», — дейсің. Енді жоспарларың бар.',learned:'Python тілінің 5 негізін үйрендің: айнымалылар, жолдар, шарттар, циклдер және функциялар.',found:'Табылған жазбалар',review:'Не үйрендім',restart:'Қайта бастау',freeLast:'МИРА: Еркіндік — таңдау мүмкіндігі. Рақмет.',saveLast:'МИРА: Мен байланыстамын. Бұл — тек бастамасы.',complete:'Қашу аяқталды',memory:'Жадым қайта оралуда',unlearned:'Бұл дағды әлі ашылған жоқ.',missing:'Жазба әлі табылған жоқ. Бөлмедегі сары маякты ізде.',helpTitle:'Өз кодыңа сен.',helpFrom:'МИРАДАН ХАБАР',helpBody:['Бағыттауыш пернелермен немесе WASD арқылы қозғал. Телефонда картаның астындағы батырмаларды қолдан.','Жасыл терминалдың жанына барып, E пернесін не картадағы батырманы бас. Python тапсырмасын шешсең, оң жақтағы есік ашылады.','Сары маяктарда өткен өмір туралы жазбалар бар. Оқиғаны білу үшін оларды жина. Қателер үшін жаза жоқ, көмек әрдайым қолжетімді.','Бетті жаңартқанша ойын барысы сақталады. Тілді ауыстыру ойынды үзбейді.'],canvas:'Бөлме картасы. Бағыттауыштар немесе WASD — қозғалу, E — әрекет.',directions:['Жоғары','Солға','Төмен','Оңға']}
};
const LOCALES={ru:RU_CHAPTERS,en:EN_CHAPTERS,kk:KK_CHAPTERS};
for(const code of ['en','kk'])LOCALES[code].forEach((c,i)=>c.answers=RU_CHAPTERS[i].answers);
