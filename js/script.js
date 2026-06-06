document.addEventListener('DOMContentLoaded', () => {

    // --- БАЗА ДАННЫХ ЖУРНАЛОВ ---
    const productsData = [
        {
            id: '032c48',
            category: 'fashion-lifestyle',
            group: '032c',
            title: '032c',
            issue: '№ 48',
            isSoldOut: false,
            price: 3100,
            weightGram: 890,
            folder: 'images/mags/mag1',
            images: ['cover.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
            descMain: 'Журнал о современной культуре, который выходит два раза в год в Берлине.',
            descMore: 'Негласный девиз редакции – «мы не держим своих читателей за идиотов», что не может не импонировать. Описывая это издание, мы как никогда желаем, чтобы в русском языке был достойный эквивалент определения cutting-edge: суперсовременные, экспериментальные фотографии, верстку и тексты в каждом номере иначе не назовешь.',
            descSpecs: 'Германия / англ. / 20x27 см / 260 стр. / 890 гр.',
            descNotice: 'К сожалению, мы не можем гарантировать наличие определенной обложки, но постараемся учесть ваши пожелания, если вы напишите о них в комментарии к заказу.'
        },
        {
            id: 'A Rabbits Foot12',
            category: 'arts-culture',
            group: 'A Rabbits Foot',
            title: 'A Rabbits Foot',
            issue: '№ 12, Sanctuary',
            isSoldOut: false,
            price: 2900,
            weightGram: 530,
            folder: 'images/mags/mag2',
            images: ['cover.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
            descMain: 'A Rabbit’s Foot — кроличья лапка, символ удачи, или молодой журнал от предпринимателя и кинопродюсера Чарльза Финча.',
            descMore: 'Дебютировавший в мае 2022 года, он продолжает завоёвывать популярность среди кинохудожников, от юных студентов до экспертов филммейкинга.',
            descSpecs: 'Великобритания / англ. / 18х26 см / 224 стр. / 530 гр.',
            descNotice: ''
        },
        {
            id: 'Anotherss26',
            category: 'fashion-lifestyle',
            group: 'Another',
            title: 'Another',
            issue: 'Spring/Summer 2026',
            isSoldOut: false,
            price: 3300,
            weightGram: 2200,
            folder: 'images/mags/mag3',
            images: ['cover.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
            descMain: 'Another Magazine — проект крупнейшего британского модного издательства Dazed.',
            descMore: 'Журнал выходит с 2001 года, уделяет основное внимание моде, изредка отвлекается на искусство, политику и литературу. На обложках издания побывали Николь Кидман, Джоди Фостер, Натали Портман, Тильда Суинтон и другие звезды, снятые эксклюзивно лучшими в мире фотографами.      ',
            descSpecs: 'Великобритания / англ. / 23х30 см / 512 стр. / 2200 гр.',
            descNotice: 'К сожалению, мы не можем гарантировать наличие определенной обложки, но постараемся учесть ваши пожелания, если вы напишите о них в комментарии к заказу.'
        },
        {
            id: 'Aperture262',
            category: 'arts-culture',
            group: 'Aperture',
            title: 'Aperture',
            issue: '№ 262',
            isSoldOut: false,
            price: 3100,
            weightGram: 610,
            folder: 'images/mags/mag4',
            images: ['cover.jpg'],
            descMain: 'Журнал основан в 1952 году в Нью-Йорке. ',
            descMore: 'После издания Альфреда Штиглица Camera Work, выходившего в начале 20 века, Aperture стал первой периодической публикацией, рассматривающей фотографию как вид искусства. Основатели журнала — ведущие фотографы своего времени Энсел Адамс, Доротея Ланж, Майнор Уайт и другие — смогли создать профессиональную площадку для сотрудничества самых передовых мастеров со всего мира. Сегодня фонд Aperture выпускает десятки книг и альбомов, а ежеквартальный журнал остается наиболее авторитетным изданием в области современной фотографии. ',
            descSpecs: 'США / англ. / 22х27 см / 152 стр. / 610 гр.',
            descNotice: ''
        },
        {
            id: 'Acne Paper20',
            category: 'fashion-lifestyle',
            group: 'Acne Paper',
            title: 'Acne Paper',
            issue: '№ 20',
            isSoldOut: true,
            price: 7500,
            weightGram: 1380,
            folder: 'images/mags/mag5',
            images: ['cover.jpg'],
            descMain: 'Первый номер Acne Paper вышел в августе 2005 года, and это сразу стало самым ярким событием издательского мира.',
            descMore: 'Крупный формат, эффектный портрет на матовой обложке, нижнее расположение названия — своей неординарностью журнал ломал привычные стереотипы, казался изданием вне времени, чем-то очень свежим и ностальгическим одновременно. В 2021 году после семиленного перерыва издание вышло в обновленном формате.',
            descSpecs: 'Великобритания / англ. / 22х27 см / 1380 гр.',
            descNotice: ''
        },
        {
            id: 'A Magazine29',
            category: 'fashion-lifestyle',
            group: 'A Magazine',
            title: 'A Magazine',
            issue: '№ 29, curated by Cecilie Bahnsen',
            isSoldOut: true,
            price: 4800,
            weightGram: 600,
            folder: 'images/mags/mag6',
            images: ['cover.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
            descMain: 'Бельгийское издание, каждый выпуск которого курирует определенный дизайнер или модный дом.',
            descMore: 'Это не приглашенный редактор, а фактически создатель номера, который наполняет журнал своими контентом и эстетикой. За время существования издания его кураторами становились Мартин Маржела, Йоши Ямомото, Хайдер Аккерман, Юн Такахаши, Мартин Ситбон и другие.',
            descSpecs: 'Бельгия / англ. / 23х30 см / 200 стр. / 600 гр.',
            descNotice: ''
        },
        {
            id: 'A Magazine28',
            category: 'fashion-lifestyle',
            group: 'A Magazine',
            title: 'A Magazine',
            issue: '№ 28, curated by Willy Chavarria',
            isSoldOut: true,
            price: 4800,
            weightGram: 940,
            folder: 'images/mags/mag7',
            images: ['cover.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
            descMain: 'Бельгийское издание, каждый выпуск которого курирует определенный дизайнер или модный дом.',
            descMore: 'Это не приглашенный редактор, а фактически создатель номера, который наполняет журнал своими контентом и эстетикой. За время существования издания его кураторами становились Мартин Маржела, Йоши Ямомото, Хайдер Аккерман, Юн Такахаши, Мартин Ситбон и другие.',
            descSpecs: 'Бельгия / англ. / 23х30 см / 208 стр. / 940 гр.',
            descNotice: ''
        },
        {
            id: 'Breechka2',
            category: '',
            group: 'Breechka',
            title: 'Breechka',
            issue: '№ 2',
            isSoldOut: true,
            price: 3500,
            weightGram: 700,
            folder: 'images/mags/mag8',
            images: ['cover.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
            descMain: 'Breechka - независимое издание об автомобильной культуре и эстетике движения, в котором автомобиль рассматривается как культурный код и зеркало эпохи. ',
            descMore: 'Журнал объединяет фотографию, тексты, исследования, фиксируя связь техники, искусства и общества. Второй выпуск посвящен теме современного кочевничества — перемещению как образу жизни, где движение становится новой нормой. В номере: размышления об автомобильной культуре от истоков до будущего; Марчелло Гандини, один из ключевых авто-дизайнеров XX века; путешествие по Грузии на BMW 1976 года; работы фотохудожника Эрика Панова созданные с помощью нейросетей; веломаршрут Леонида Сорокина, Тояма — Токио; иллюстрации художника Алексея Дубинского; визуальное эссе по Южной Америке Андрея Ноговицына.',
            descSpecs: 'Россия / рус., англ. / 21х26 см / 160 стр. / 700 гр.',
            descNotice: ''
        },
        {
            id: 'A Rabbits Foot13',
            category: 'arts-culture',
            group: 'A Rabbits Foot',
            title: 'A Rabbits Foot',
            issue: '№ 13, Tomorrow',
            isSoldOut: true,
            price: 2900,
            weightGram: 700,
            folder: 'images/mags/mag9',
            images: ['cover.jpg'],
            descMain: 'A Rabbit’s Foot — кроличья лапка, символ удачи, или молодой журнал от предпринимателя и кинопродюсера Чарльза Финча.',
            descMore: 'Дебютировавший в мае 2022 года, он продолжает завоёвывать популярность среди кинохудожников, от юных студентов до экспертов филммейкинга.',
            descSpecs: 'Великобритания / англ. / 18х26 см / 258 стр. / 700 гр.',
            descNotice: ''
        },
        {
            id: 'Anotherau25',
            category: 'fashion-lifestyle',
            group: 'Another',
            title: 'Another',
            issue: 'Autumn/Winter 2025',
            isSoldOut: true,
            price: 3300,
            weightGram: 2360,
            folder: 'images/mags/mag10',
            images: ['cover.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
            descMain: 'Another Magazine — проект крупнейшего британского модного издательства Dazed.',
            descMore: 'Журнал выходит с 2001 года, уделяет основное внимание моде, изредка отвлекается на искусство, политику и литературу. На обложках издания побывали Николь Кидман, Джоди Фостер, Натали Портман, Тильда Суинтон и другие звезды, снятые эксклюзивно лучшими в мире фотографами.      ',
            descSpecs: 'Великобритания / англ. / 23х30 см / 552 стр. / 2360 гр.',
            descNotice: 'К сожалению, мы не можем гарантировать наличие определенной обложки, но постараемся учесть ваши пожелания, если вы напишите о них в комментарии к заказу.'
        }
    ];

    const menuData = {
        about: `
            <div class="about-block">
                <h3 class="about-title">selected magazines</h3>
                <p class="about-p">Добро пожаловать в магазин иностранных журналов. Здесь представлена коллекция зарубежных печатных изданий о моде, искусстве и других областях культуры, собранных по всему миру и обновляемая по мере выхода свежих номеров. Мы привозим как легендарные журналы с многолетней историей, так и малотиражные интеллектуальные публикации, а, кроме того, книги сотен независимых, или как еще говорят, инди-издательств со всего мира. Мы являемся прямыми эксклюзивными партнерами ряда европейских издательств и дистрибьюторов, поэтому вы получаете самые свежие номера с минимальной задержкой и гарантированно по лучшим ценам.</p>
                <p class="about-p">Мы также любим работать в формате читального зала и приглашаем вас в особняк «Рихтер» на Пятницкой улице, 42. Это независимый мультикультурный проект в центре Москвы, включающий отель, ресторан, бар, галерею актуального искусства и студию звукозаписи. В читальном зале собрана наиболее полная версия нашей коллекции. Режим работы совпадает с проектом: с 10 до 22 часов.</p>
                <div class="about-location-image">
                    <img src="images/about/1.jpg" alt="Читальный зал в Рихтере">
                    <div class="image-label">РИХТЕР</div>
                </div>
            </div>
            <div class="about-block">
                <h3 class="about-title">selected partners</h3>
                <p class="about-p">Мы сотрудничаем с Музеем современного искусства «Гараж» и книжным магазином в «Доме Наркомфина». Библиотечный фокус музея пополняется уникающими изданиями по искусству и архитектуре, а на полках книжных магазинов в Москве и Петербурге представлен свежий и горячий выбор из нашего ассортимента.</p>
                <p class="about-p" style="margin-bottom: 15px;">Все локации работают с 11 до 22 часов.<br>Москва: Новинский бульвар, д. 25 корпус 1<br>Петербург: наб. Адмиралтейского канала, д. 2А</p>
                <div class="about-location-image">
                    <img src="images/about/2.jpg" alt="Книжный в Гараже">
                    <div class="image-label">GARAGE</div>
                </div>
                <p class="about-p">Большой ассортимент журналов можно найти в книжном магазине «Подписные издания» на Литейном проспекте, 57 в Петербурге. Кроме бестселлеров из нашей коллекции, там продается зарубежная периодика об искусстве, литературе, кино и музыке. Магазин работает с 10 до 22 часов без выходных.</p>
                <div class="about-location-image">
                    <img src="images/about/3.jpg" alt="Подписные издания">
                    <div class="image-label">ПОДПИСНЫЕ ИЗДАНИЯ</div>
                </div>
                <p class="about-p">Мы не считаем себя просто продавцами журналов и уверены, что наша деятельность способствует развитию печатной культуры в России. В этом стремлении нас поддерживают многие узнаваемые бренды, поэтому мы чаще чем другие беремся за хорошую подборку журналов в библиотеках музеев и галерей, в образовательных учреждениях, в модных магазинах и салонах, в ресторанах и отелях, в студиях и коворкингах. Самые продвинутые магазины в разных городах страны рады добавлению в свой ассортимент зарубежную периодику, а мы стараемся предложить им удобные условия.</p>
            </div>
            <div class="partners-grid">
                <div class="partner-logo-link"><img src="images/about/logos/1.jpg" alt="British Higher School"></div>
                <div class="partner-logo-link"><img src="images/about/logos/2.jpg" alt="Birdie"></div>
                <div class="partner-logo-link"><img src="images/about/logos/3.jpg" alt="COS"></div>
                <div class="partner-logo-link"><img src="images/about/logos/4.jpg" alt="Campus"></div>
                <div class="partner-logo-link"><img src="images/about/logos/5.jpg" alt="Flora no Fauna"></div>
                <div class="partner-logo-link"><img src="images/about/logos/6.jpg" alt="Daje"></div>
                <div class="partner-logo-link"><img src="images/about/logos/7.jpg" alt="Brick Design Hotel"></div>
                <div class="partner-logo-link"><img src="images/about/logos/8.jpg" alt="Santa Rarita"></div>
                <div class="partner-logo-link"><img src="images/about/logos/9.jpg" alt="Фонотека"></div>
                <div class="partner-logo-link"><img src="images/about/logos/10.jpg" alt="Chop-Chop"></div>
                <div class="partner-logo-link"><img src="images/about/logos/11.jpg" alt="Gorskiy City Hotel"></div>
                <div class="partner-logo-link"><img src="images/about/logos/12.jpg" alt="Avgvst"></div>
                <div class="partner-logo-link"><img src="images/about/logos/13.jpg" alt="Vmesto"></div>
                <div class="partner-logo-link"><img src="images/about/logos/14.jpg" alt="Hilton"></div>
                <div class="partner-logo-link"><img src="images/about/logos/15.jpg" alt="Старт"></div>
                <div class="partner-logo-link"><img src="images/about/logos/16.jpg" alt="Культура"></div>
                <div class="partner-logo-link"><img src="images/about/logos/17.jpg" alt="Cafe"></div>
                <div class="partner-logo-link"><img src="images/about/logos/18.jpg" alt="47"></div>
                <div class="partner-logo-link"><img src="images/about/logos/19.jpg" alt="Игра слов"></div>
                <div class="partner-logo-link"><img src="images/about/logos/20.jpg" alt="Flaner"></div>
                <div class="partner-logo-link"><img src="images/about/logos/21.jpg" alt="Found"></div>
                <div class="partner-logo-link"><img src="images/about/logos/22.jpg" alt="Mute"></div>
                <div class="partner-logo-link"><img src="images/about/logos/23.jpg" alt="Pioner Bookstore"></div>
                <div class="partner-logo-link"><img src="images/about/logos/24.jpg" alt="F"></div>
                <div class="partner-logo-link"><img src="images/about/logos/25.jpg" alt="Переделкино"></div>
                <div class="partner-logo-link"><img src="images/about/logos/26.jpg" alt="Osnova"></div>
                <div class="partner-logo-link"><img src="images/about/logos/27.jpg" alt="S"></div>
                <div class="partner-logo-link"><img src="images/about/logos/28.jpg" alt="Design Dealer"></div>
                <div class="partner-logo-link"><img src="images/about/logos/29.jpg" alt="Photoplay"></div>
                <div class="partner-logo-link"><img src="images/about/logos/30.jpg" alt="Перспектива"></div>
            </div>
            <div class="contacts-section">
                <h3 class="about-title" style="border-bottom: 2px solid #000; display: inline-block;">selected contacts</h3>
                <p class="contacts-text" style="margin-top:25px;">Заказы по телефону не принимаются, но если ваше дело не терпит промедления, то напишите нам сообщение или позвоните через <a href="#" target="_blank">Telegram</a> или <a href="#" target="_blank">WhatsApp</a>.</p>
                <p class="contacts-text">На все вопросы и предложения сотрудничества мы будем рады ответить в тех же мессенджерах или по электронной почте (пишите на <a href="mailto:kk@lebigmag.ru">kk@lebigmag.ru</a>).</p>
                <p class="contacts-text">За новинками и событиями удобнее всего следить в соцсетях или в рассылке, подписаться на которую можно в разделах 'new' или 'subscribe' в меню слева.</p>
                <div class="contacts-social-vertical">
                    <a href="http://www.instagram.com/lebigmag/" target="_blank" class="social-vertical-link">instagram</a>
                    <a href="https://t.me/lebigmag" target="_blank" class="social-vertical-link">telegram</a>
                    <a href="mailto:kk@lebigmag.ru" class="social-vertical-link">email</a>
                    <a href="http://www.facebook.com/lebigmag/" target="_blank" class="social-vertical-link">facebook</a>
                    <a href="https://vk.com/lebigmag" target="_blank" class="social-vertical-link">vkontakte</a>
                </div>
            </div>
        `,
        delivery: `
            <div class="about-block">
                <h3 class="about-title">доставка</h3>
                <p class="about-p">Мы отправляем журналы по всей России, а также в крупные города Беларуси и Казахстана. В Москве также возможны самовывоз и срочная доставка. Удобный вариант вы сможете выбрать при оформлении заказа.</p>
            </div>
            <div class="about-block">
                <h3 class="about-title">самовывоз</h3>
                <p class="about-p">Забрать свой заказ самостоятельно можно в Москве в особняке «Рихтер» на Пятницкой улице, 42, где расположен наш журнальный зал. Это быстро и бесплатно.</p>
                <div class="about-location-image" style="max-width: 250px; margin: 20px auto;">
                    <img src="images/delivery/1.png" alt="Особняк Рихтер">
                </div>
            </div>
            <div class="about-block">
                <h3 class="about-title">почта</h3>
                <p class="about-p">Заказная бандероль или посылка с вашим заказом попадает в руки Почты России, поэтому двигается не слишком быстро, но вполне надежно. Мы отправили уже не одну тысячу больших и маленьких заказов по всей стране, и пока ни один не потерялся, а средний срок доставки составил 5-10 дней по Европейской части России или 10-20 дней — по Азиатской. После отправки бандероли мы сообщим вам трек-номер, чтобы вы смогли самостоятельно следить за ее движением.</p>
                <p class="about-p" style="margin-top: 15px;">Стоимость отправления рассчитывается автоматически и зависит от общего веса заказа: до 0,5 кг — 400 рублей, от 0,5 до 1 кг — 500 рублей, от 1 до 1,5 кг — 600 рублей, от 1,5 до 2 кг — 700 рублей и далее 100 рублей за каждый килограмм.</p>
                <div class="delivery-separator-logo">
                    <img src="images/delivery/2.jpg" alt="Почта России" style="max-width: 60px;">
                </div>
            </div>
            <div class="about-block">
                <h3 class="about-title">срочная доставка</h3>
                <p class="about-p">В Москве можно заказать доставку день в день или в конкретное время. Пожалуйста, не ошибитесь в номере вашего телефона and не пропустите звонок от нас.</p>
                <div class="delivery-separator-logo">
                    <img src="images/delivery/3.jpg" alt="Dostavista" style="max-width: 140px;">
                </div>
            </div>
            <div class="about-block">
                <h3 class="about-title">курьер</h3>
                <p class="about-p">Курьерская доставка возможна в большинстве крупных городов России, Беларуси и Казахстана, но все-таки проверьте, пожалуйста, наш список ниже. Заказы стоимостью от 10 000 рублей доставляются бесплатно. А если вам не хочется иметь дело с курьером, то можно оформить доставку до ближайшего к вам пункта СДЭК, которые встречаются даже чаще, чем почтовые отделения. Просто напишите об этом в комментарии к заказу.</p>
                <p class="delivery-cities-list">
                    <strong>Россия:</strong> Азов, Аксай, Александров, Алексин, Альметьевск, Анапа, Апатиты, Арзамас, Армавир, Асбест, Астрахань, Ачинск, Balaково, Балахна, Барнаул, Батайск, Белгород, Белебей, Белово, Белореченск, Бердск, Berezniki, Бийск, Бор, Борисоглебск, Боровичи, Брянск, Бугульма, Буденновск, Великие Луки, Великий Новгород, Верхняя Пышма, Владикавказ, Владимир, Владивосток, Волгоград, Волгодонск, Волжск, Вологда, Вологодск, Волхов, Воронеж, Воткинск, Всеволожск, Выборг, Вязьма, Гатчина, Геленджик, Георгиевск, Глазов, Горно-Алтаиск, Гороховец, Губкин, Дзержинск, Димитровград, Евпатория, Ейск, Екатеринбург, Елабуга, Елец, Ессентуки, Заринск, Зеленогорск, Заречный, Зеленодольск, Зеленокумск, Зерноград, Златоуст, Иваново, Ижевск, Изобильный, Ирбит, Иркутск, Искитим, Йошкар-Ола, Казань, Калуга, Каменск-Уральский, Каменск-Шахтинский, Камышин, Канск, Кемерово, Керчь, Кимры, Кингисепп, Кинешма, Киреевск, Киржач, Кириши, Киров, Кировск, Киселевск, Кисловодск, Клинцы, Ковров, Колпино, Комсомольск-на-Амуре, Конаково, Копейск, Кострома, Краснодар, Красное Село, Краснообск, Краснотурьинск, Красноуфимск, Красноярск, Кропоткин, Крымск, Кстово, Кудымкар, Кунгур, Курган, Курск, Кыштым, Лабинск, Ленинск-Кузнецкий, Лермонтов, Липецк, Луга, Людиново, Магнитогорск, Муром, Майкоп, Междуреченск, Мелеуз, Миасс, Минеральные Воды, Михайловск, Мончегорск, Москва и Московская область, Мурино, Мурманск, Набережные Челны, Назарово, Назрань, Нальчик, Невинномысск, Нефтекамск, Нижний Новгород, Нижний Тагил, Нижнекамск, Нижняя Тура, Новоалтайск, Новокузнецк, Новомосковск, Новороссийск, Novosibirsk, Новотроицк, Новоуральск, Новочебоксарск, Новочеркасск, Новошахтинск, Обнинск, Озерск, Октябрьский, Омск, Орел, Оренбург, Орск, Пенза, Первоуральск, Пермь, Петергоф, Петрозаводск, Прокопьевск, Псков, Пятигорск, Рассказово, Ржев, Россошь, Ростов-на-Дону, Рубцовск, Рыбинск, Рязань, Салават, Сальск, Самара, Санкт-Петербург, Саранск, Сарапул, Саратов, Саров, Севастополь, Северск, Серов, Сестрорецк, Симферополь, Славянск-на-Кубани, Смоленск, Снежинск, Сосновый Бор, Сочи, Ставрополь, Старый Оскол, Стерлитамак, Стрежевой, Сызрань, Сыктывкар, Таганрог, Тамбов, Темрюк, Тихвин, Тихорецк, Тверь, Тобольск, Тольятти, Томск, Торжок, Троицк, Туймазы, Тула, Тюмень, Улан-Удэ, Ульяновск, Усть-Лабинск, Уфа, Учалы, Феодосия, Фролово, Хабаровск, Чайковский, Чебоксары, Челябинск, Череповец, Черкесск, Чита, Чусовой, Шадринск, Шахты, Шушары, Элиста, Энгельс, Южноуральск, Юрга, Юрюзань, Ялта, {{Ярославль}}, Ярцево.</p>
                <p class="delivery-cities-list" style="margin-top: 15px;"><strong>Беларусь:</strong> Барановичи, Бобруйск, Борисов, Брест, Витебск, Гомель, Гродно, Лида, Минск, Могилев, Орша.</p>
                <p class="delivery-cities-list" style="margin-top: 15px;"><strong>Казахстан:</strong> Алматы, Астана, Караганда, Кокшетау, Костанай, Кызылорда, Павлодар, Петропавловск, Уральск, Усть-Каменогорск, Шымкент.</p>
                <p class="about-p" style="margin-top: 25px;">Если в списке нет вашего города, но есть другой, в котором вы часто бываете, то можно заказать доставку до филиала курьерской службы СДЭК в этом городе.</p>
                <div class="delivery-separator-logo" style="margin-top: 30px;">
                    <img src="images/delivery/4.jpg" alt="СДЭК" style="max-width: 100px;">
                </div>
            </div>
        `,
        payment: `
            <div class="about-block">
                <h3 class="about-title">оплата</h3>
                <p class="about-p">Заказ можно оплатить банковской картой Visa, MasterCard или Мир. Безопасность платежей обеспечивается технологиями защищенного соединения HTTPS и двухфакторной аутентификации пользователя 3D Secure. Для обработки платежей мы используем сервис PayAnyWay.</p>
                <p class="about-p">Выбирая курьерскую доставку, вы также сможете оплатить заказ при получении — наличными или банковской картой.</p>
                <div class="payment-systems-logos">
                    <img src="images/payment/1.png" alt="Visa, MasterCard, Мир">
                    <img src="images/payment/2.png" alt="Visa, MasterCard, Мир">
                    <img src="images/payment/3.jpg" alt="Visa, MasterCard, Мир">
                </div>
                <p class="about-p" style="font-size: 0.85rem; color: #333333; margin-top: 30px;">Оформляя заказ в BRANDNAME, вы соглашаетесь на обработку ваших персональных данных в соответствии с Федеральным законом РФ № 152 от 27 июля 2006 года.</p>
                <p class="about-p" style="margin-top: -10px;"><a href="#" target="_blank" style="text-decoration: underline; font-size: 0.9rem;">Сведения о юридическом лице и договор</a></p>
            </div>
            <div class="about-block" style="margin-top: 60px;">
                <h3 class="about-title">b 2 b</h3>
                <p class="about-p">Чтобы заказать журналы на юридическое лицо и оплатить их с расчетного счета компании, пожалуйста, соберите ваш заказ в корзину, затем на странице оформления заказа заполнити свою контактную информацию, выберите тип доставки, а в поле для комментариев впишите ИНН вашей фирмы. Способ оплаты выбирать не нужно. Нажмите на кнопку «Оформить заказ» и убедитесь, что на указанную вами электронную почту пришло автоматическое письмо с подтверждением. Вам будет выставлен счет, после оплаты которого заказ будет упакован и доставлен по нужному адресу. Если все вышеперечисленное вам делать не хочется, просто напишите нам на <a href="mailto:order@lebigmag.ru">order@lebigmag.ru</a>.</p>
            </div>
        `,
        search: `
            <h2>поиск</h2>
            <div style="margin-top:20px;">
                <input type="text" id="searchInput" placeholder="Введите название журнала или описание..." style="width:100%; padding:15px 0; font-size:1.5rem; border:none; border-bottom:1px solid #000; outline:none; color:#000000;">
            </div>
            <div class="search-results-container" id="searchResults"></div>
        `
    };

    // --- ИНИЦИАЛИЗАЦИЯ КОРЗИНЫ (LOCALSTORAGE) ---
    let cart = JSON.parse(localStorage.getItem('journal_cart')) || [];

    function saveCart() {
        localStorage.setItem('journal_cart', JSON.stringify(cart));
        updateCartHeaderCount();
    }

    function updateCartHeaderCount() {
        const uniqueCount = cart.length; 
        const countHeader = document.getElementById('cartUniqueCount');
        const countFooter = document.getElementById('cartUniqueCountMobile');
        if (countHeader) countHeader.textContent = `(${uniqueCount})`;
        if (countFooter) countFooter.textContent = `(${uniqueCount})`;
    }

    // --- ВЕРХНЕЕ И НИЖНЕЕ МЕНЮ (ШТОРКИ) ---
    const allMenuItems = document.querySelectorAll('.header-menu .menu-item, .mobile-footer-menu .menu-item');
    const megaOverlay = document.getElementById('megaOverlay');
    const overlayContent = document.getElementById('overlayContent');
    const menuPointer = document.getElementById('menuPointer');
    const mobileCloseMenuBtn = document.getElementById('mobileCloseMenuBtn');
    let activeSection = null;

    function positionPointer(targetButton) {
        if (window.innerWidth <= 768) return; 
        const btnRect = targetButton.getBoundingClientRect();
        const pointerWidth = 20;
        const centerLeft = btnRect.left + (btnRect.width / 2) - (pointerWidth / 2);
        if (menuPointer) menuPointer.style.left = `${centerLeft}px`;
    }

    allMenuItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');
            if (target === 'cartPage') return; 

            if (activeSection === target) {
                closeMegaOverlay();
            } else {
                if (overlayContent) overlayContent.innerHTML = menuData[target] || 'Контент не найден';
                allMenuItems.forEach(i => i.classList.remove('active'));
                
                document.querySelectorAll(`[data-target="${target}"]`).forEach(el => el.classList.add('active'));
                
                if (megaOverlay) megaOverlay.classList.add('open');
                document.body.classList.add('overlay-active');
                positionPointer(item);
                activeSection = target;
                if (target === 'search') {
                    initSearchLogic();
                }
            }
        });
    });

    if (mobileCloseMenuBtn) {
        mobileCloseMenuBtn.addEventListener('click', () => {
            closeMegaOverlay();
        });
    }

    function closeMegaOverlay() {
        if (megaOverlay) megaOverlay.classList.remove('open');
        document.body.classList.remove('overlay-active');
        allMenuItems.forEach(i => i.classList.remove('active'));
        activeSection = null;
    }

    // Живой поиск
    function initSearchLogic() {
        const searchInput = document.getElementById('searchInput');
        const searchResults = document.getElementById('searchResults');
        
        if (!searchInput || !searchResults) return;
        setTimeout(() => searchInput.focus(), 100);

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            searchResults.innerHTML = ''; 

            if (query === '') return;

            const matchedProducts = productsData.filter(product => {
                return product.title.toLowerCase().includes(query) || 
                       product.descMain.toLowerCase().includes(query) || 
                       product.descMore.toLowerCase().includes(query);
            });

            matchedProducts.forEach(product => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                resultItem.innerHTML = `
                    <div class="res-img-wrap">
                        <img src="${product.folder}/${product.images[0]}" alt="${product.title}">
                    </div>
                    <h4>${product.title}</h4>
                    <p>${product.price} ₽</p>
                `;

                resultItem.addEventListener('click', () => {
                    closeMegaOverlay();
                    navigationSource = 'catalog';
                    openProductDetail(product.id);
                });
                searchResults.appendChild(resultItem);
            });
        });
    }

    window.addEventListener('resize', () => {
        if (activeSection && window.innerWidth > 768) {
            const activeBtn = document.querySelector(`.header-menu .menu-item[data-target="${activeSection}"]`);
            if (activeBtn) positionPointer(activeBtn);
        }
    });

    // --- РЕНДЕРИНГ КАТАЛОГА ---
    const catalogGrid = document.getElementById('catalogGrid');

    function renderCatalog(filterCategory = 'all') {
        if(!catalogGrid) return;
        catalogGrid.innerHTML = '';
        const filtered = productsData.filter(p => filterCategory === 'all' || p.category === filterCategory);
        
        filtered.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            const priceDisplay = product.isSoldOut ? 'SOLD OUT' : `${product.price} ₽`;

            card.innerHTML = `
                <div class="product-img-wrapper">
                    <img src="${product.folder}/${product.images[0]}" alt="${product.title}" class="product-thumb">
                </div>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-issue" style="font-size: 0.9rem; color: #777; margin-bottom: 5px;">${product.issue}</p>
                <p class="product-price" style="font-weight: ${product.isSoldOut ? 'bold' : 'normal'}">${priceDisplay}</p>
            `;

            const imgWrap = card.querySelector('.product-img-wrapper');
            const titleWrap = card.querySelector('.product-title');

            [imgWrap, titleWrap].forEach(el => {
                el.addEventListener('click', () => {
                    navigationSource = 'catalog';
                    openProductDetail(product.id);
                });
            });

            catalogGrid.appendChild(card);
        });
    }

    // --- СТРАНИЦА ТОВАРА (ДЕТАЛЬНАЯ) ---
    const productDetailContainer = document.getElementById('productDetailContainer');
    const relatedGrid = document.getElementById('relatedGrid');
    let currentGalleryImages = [];
    let currentImageIndex = 0;
    let navigationSource = 'catalog'; 

    function openProductDetail(productId) {
        const product = productsData.find(p => p.id === productId);
        if (!product) return;

        currentGalleryImages = product.images.map(img => `${product.folder}/${img}`);

        const priceBlock = product.isSoldOut 
            ? `<p class="detail-price" style="margin-bottom: 5px; text-decoration: line-through; color: #999;">${product.price} ₽</p>
               <p class="sold-out-badge" style="color: #000; font-weight: bold; font-size: 1.2rem; margin-bottom: 30px; letter-spacing: 1px;">SOLD OUT</p>`
            : `<p class="detail-price">${product.price} ₽</p>`;

        productDetailContainer.innerHTML = `
            <div class="product-gallery-container">
                <div class="main-detail-img-wrap">
                    <img src="${product.folder}/${product.images[0]}" id="mainDetailImg" alt="${product.title}" class="main-gallery-img">
                </div>
                <div class="thumbs-grid">
                    ${product.images.map((img, idx) => `
                        <div class="thumb-img-wrap ${idx === 0 ? 'active' : ''}" data-index="${idx}">
                            <img src="${product.folder}/${img}" alt="Миниатюра">
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="product-info">
                <h1 class="detail-title" style="margin-bottom: 5px;">${product.title}</h1>
                <p class="detail-issue" style="font-size: 1.1rem; color: #555; margin-bottom: 20px;">${product.issue}</p>
                
                ${priceBlock}
                
                <div class="detail-description">
                    <div class="description-short">${product.descMain}</div>
                    <button class="toggle-descr-btn" id="toggleDescrBtn">Читать далее...</button>
                    
                    <div class="description-more" id="descriptionMore">
                        <span class="descr-block">${product.descMore}</span>
                        <span class="descr-block"><strong>${product.descSpecs}</strong></span>
                        <span class="descr-block" style="color: #555555; font-size: 0.9rem;">${product.descNotice}</span>
                        <button class="toggle-descr-btn" id="hideDescrBtn" style="display:block; margin-top:15px;">Свернуть описание</button>
                    </div>
                </div>
                <div class="cart-controls-wrapper" id="cartControlsWrapper" style="display: ${product.isSoldOut ? 'none' : 'flex'}"></div>
            </div>
        `;

        const mainDetailImg = document.getElementById('mainDetailImg');
        if(mainDetailImg) {
            mainDetailImg.addEventListener('click', () => {
                openLightbox(currentImageIndex);
            });
        }

        const thumbs = productDetailContainer.querySelectorAll('.thumb-img-wrap');
        thumbs.forEach(thumb => {
            thumb.addEventListener('click', () => {
                const idx = parseInt(thumb.getAttribute('data-index'));
                currentImageIndex = idx;
                if(mainDetailImg) mainDetailImg.src = currentGalleryImages[idx];
                thumbs.forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
        });

        const toggleBtn = document.getElementById('toggleDescrBtn');
        const hideBtn = document.getElementById('hideDescrBtn');
        const moreBlock = document.getElementById('descriptionMore');

        if(toggleBtn && hideBtn && moreBlock) {
            toggleBtn.addEventListener('click', () => {
                moreBlock.classList.add('expanded');
                toggleBtn.style.display = 'none';
            });

            hideBtn.addEventListener('click', () => {
                moreBlock.classList.remove('expanded');
                toggleBtn.style.display = 'inline-block';
            });
        }

        updateCartControls(product);
        renderRelated(product.id, product.group);
        
        const backBtn = document.getElementById('backToCatalog');
        if (backBtn) {
            if (navigationSource === 'cart') {
                backBtn.textContent = '← вернуться в корзину';
            } else {
                backBtn.textContent = '← назад в каталог';
            }
        }
        showSection('productDetailSection');
    }

    function updateCartControls(product) {
        const wrapper = document.getElementById('cartControlsWrapper');
        if (!wrapper) return;

        const cartItem = cart.find(item => item.id === product.id);

        if (!cartItem) {
            wrapper.innerHTML = `<button class="add-to-cart-btn" id="addToCartBtn">Добавить в корзину</button>`;
            document.getElementById('addToCartBtn').addEventListener('click', () => {
                cart.push({ id: product.id, quantity: 1, data: product });
                saveCart();
                updateCartControls(product);
            });
        } else {
            const isMinusDisabled = cartItem.quantity <= 1 ? 'disabled' : '';
            wrapper.innerHTML = `
                <div class="quantity-counter">
                    <button class="count-btn ${isMinusDisabled}" id="minusBtn">-</button>
                    <span class="count-value">${cartItem.quantity}</span>
                    <button class="count-btn" id="plusBtn">+</button>
                </div>
                <button class="remove-from-cart-btn" id="removeCartBtn">удалить из корзины</button>
            `;

            document.getElementById('minusBtn').addEventListener('click', () => {
                if (cartItem.quantity > 1) {
                    cartItem.quantity--;
                    saveCart();
                    updateCartControls(product);
                }
            });

            document.getElementById('plusBtn').addEventListener('click', () => {
                cartItem.quantity++;
                saveCart();
                updateCartControls(product);
            });

            document.getElementById('removeCartBtn').addEventListener('click', () => {
                cart = cart.filter(item => item.id !== product.id);
                saveCart();
                updateCartControls(product);
            });
        }
    }

    function renderRelated(currentId, groupName) {
        if(!relatedGrid) return;
        relatedGrid.innerHTML = '';
        
        const related = productsData.filter(p => p.group === groupName && p.id !== currentId);

        if (related.length === 0) {
            document.querySelector('.related-products').style.display = 'none';
            return;
        }
        document.querySelector('.related-products').style.display = 'block';

        related.forEach(product => {
            const card = document.createElement('div');
            const priceDisplay = product.isSoldOut ? 'SOLD OUT' : `${product.price} ₽`;
            
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-img-wrapper">
                    <img src="${product.folder}/${product.images[0]}" alt="${product.title}" class="product-thumb">
                </div>
                <h3 class="product-title">${product.title}</h3>
                <p style="font-size:0.9rem; color:#777; margin-bottom:5px;">${product.issue}</p>
                <p class="product-price">${priceDisplay}</p>
            `;
            
            const imgWrap = card.querySelector('.product-img-wrapper');
            const titleWrap = card.querySelector('.product-title');

            [imgWrap, titleWrap].forEach(el => {
                el.addEventListener('click', () => {
                    navigationSource = 'catalog';
                    openProductDetail(product.id);
                });
            });
            relatedGrid.appendChild(card);
        });
    }

    // --- БЕСКОНЕЧНЫЙ СЛАЙДЕР С ЛАЙТБОКСОМ ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxClose = document.getElementById('lightboxClose');

    function openLightbox(index) {
        if(!currentGalleryImages.length) return;
        currentImageIndex = index;
        lightboxImg.src = currentGalleryImages[currentImageIndex];
        lightbox.style.display = 'flex';
        document.body.classList.add('lightbox-open');
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.classList.remove('lightbox-open');
    }

    if (lightboxNext && lightboxPrev && lightboxClose) {
        lightboxNext.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % currentGalleryImages.length;
            lightboxImg.src = currentGalleryImages[currentImageIndex];
        });

        lightboxPrev.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
            lightboxImg.src = currentGalleryImages[currentImageIndex];
        });

        lightboxClose.addEventListener('click', closeLightbox);
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
                closeLightbox();
            }
        });
    }

    // --- ПЕРЕКЛЮЧЕНИЕ СЕКЦИЙ С СОХРАНЕНИЕМ URL (SPA) ---
    function showSection(sectionId) {
        closeMegaOverlay();
        
        document.querySelectorAll('.page-section').forEach(sec => {
            sec.classList.remove('active');
        });
        
        const targetSec = document.getElementById(sectionId);
        if (targetSec) targetSec.classList.add('active');
        
        if (sectionId === 'catalogSection') {
            document.body.classList.remove('hide-sidebar');
            document.getElementById('catalogLayout').style.display = 'grid';
            document.getElementById('productDetailSection').style.display = 'none';
            document.getElementById('cartSection').style.display = 'none';
            document.getElementById('checkoutSection').style.display = 'none';
            window.location.hash = 'catalog'; 
        } else if (sectionId === 'productDetailSection') {
            document.body.classList.add('hide-sidebar');
            document.getElementById('catalogLayout').style.display = 'none';
            document.getElementById('productDetailSection').style.display = 'block';
            document.getElementById('cartSection').style.display = 'none';
            document.getElementById('checkoutSection').style.display = 'none';
        } else if (sectionId === 'cartSection') {
            document.body.classList.add('hide-sidebar');
            document.getElementById('catalogLayout').style.display = 'none';
            document.getElementById('productDetailSection').style.display = 'none';
            document.getElementById('cartSection').style.display = 'block';
            document.getElementById('checkoutSection').style.display = 'none';
            window.location.hash = 'cart'; 
        } else if (sectionId === 'checkoutSection') {
            document.body.classList.add('hide-sidebar');
            document.getElementById('catalogLayout').style.display = 'none';
            document.getElementById('productDetailSection').style.display = 'none';
            document.getElementById('cartSection').style.display = 'none';
            document.getElementById('checkoutSection').style.display = 'block';
            window.location.hash = 'checkout'; 
        }
        
        window.scrollTo(0, 0);
    }

    // Слушатели переходов универсальных кнопок назад
    const backToCatalogBtn = document.getElementById('backToCatalog');
    if(backToCatalogBtn) {
        backToCatalogBtn.addEventListener('click', () => {
            if (navigationSource === 'cart') {
                showSection('cartSection');
            } else {
                showSection('catalogSection');
            }
        });
    }
    
    const backToCatalogFromCart = document.getElementById('backToCatalogFromCart');
    if(backToCatalogFromCart) {
        backToCatalogFromCart.addEventListener('click', () => showSection('catalogSection'));
    }

    const backToCartFromCheckout = document.getElementById('backToCartFromCheckout');
    if(backToCartFromCheckout) {
        backToCartFromCheckout.addEventListener('click', () => showSection('cartSection'));
    }
    
    const cartLinks = document.querySelectorAll('#cartHeaderLink, #mobileCartHeaderLink');
    cartLinks.forEach(link => {
        link.addEventListener('click', () => {
            renderCartPage();
            showSection('cartSection');
        });
    });

    const logoLink = document.getElementById('logoLink');
    if(logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('catalogSection');
        });
    }

    // Переключение категорий (Десктоп)
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const catalogTitle = document.getElementById('catalogTitle');
    const mobileCategorySelect = document.getElementById('mobileCategorySelect');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebarLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            const category = link.getAttribute('data-category');
            if(catalogTitle) catalogTitle.textContent = link.textContent.trim();
            if(mobileCategorySelect) mobileCategorySelect.value = category; 

            renderCatalog(category);
            showSection('catalogSection');
        });
    });

    // Переключение категорий (Мобильный селект)
    if (mobileCategorySelect) {
        mobileCategorySelect.addEventListener('change', (e) => {
            const category = e.target.value;
            
            sidebarLinks.forEach(l => {
                l.classList.remove('active');
                if (l.getAttribute('data-category') === category) {
                    l.classList.add('active');
                    if(catalogTitle) catalogTitle.textContent = l.textContent.trim();
                }
            });

            renderCatalog(category);
            showSection('catalogSection');
        });
    }

    function getJournalWordForm(number) {
        const lastDigit = number % 10;
        const lastTwoDigits = number % 100;
        if (lastTwoDigits >= 11 && lastTwoDigits <= 19) return 'журналов';
        if (lastDigit === 1) return 'журнал';
        if (lastDigit >= 2 && lastDigit <= 4) return 'журнала';
        return 'журналов';
    }

    function renderCartPage() {
        const cartItemsList = document.getElementById('cartItemsList');
        const cartSummaryBlock = document.getElementById('cartSummaryBlock');
        const cartTotalText = document.getElementById('cartTotalText');
        const emptyCartMessage = document.getElementById('emptyCartMessage');

        if(!cartItemsList) return;
        cartItemsList.innerHTML = '';

        if (cart.length === 0) {
            if(cartSummaryBlock) cartSummaryBlock.style.display = 'none';
            if(emptyCartMessage) emptyCartMessage.style.display = 'block';
            return;
        }

        if(cartSummaryBlock) cartSummaryBlock.style.display = 'flex';
        if(emptyCartMessage) emptyCartMessage.style.display = 'none';

        let totalPrice = 0;

        cart.forEach((item, index) => {
            const product = item.data;
            const itemTotal = product.price * item.quantity;
            totalPrice += itemTotal;

            const isMinusDisabled = item.quantity <= 1 ? 'disabled' : '';

            const row = document.createElement('div');
            row.className = 'cart-item-row';
            row.innerHTML = `
                <div class="cart-item-img-wrap clickable" data-action="open-product">
                    <img src="${product.folder}/${product.images[0]}" alt="${product.title}">
                </div>
                <div class="cart-item-title">
                    <button class="cart-item-title-link" data-action="open-product">${product.title}</button>
                    <div style="font-size: 0.9rem; color: #777; margin-top: 2px;">${product.issue}</div>
                    <span class="mobile-cart-price" style="display: none; font-size: 0.9rem; color: #000; margin-top: 5px; font-weight: bold;">${product.price} ₽</span>
                </div>
                <div class="cart-item-price">${product.price} ₽</div>
                <div class="quantity-counter">
                    <button class="count-btn ${isMinusDisabled}" data-index="${index}" data-action="minus">-</button>
                    <span class="count-value">${item.quantity}</span>
                    <button class="count-btn" data-index="${index}" data-action="plus">+</button>
                </div>
                <button class="cart-item-remove-btn" data-index="${index}">Удалить</button>
            `;

            row.querySelectorAll('[data-action="open-product"]').forEach(el => {
                el.addEventListener('click', () => {
                    navigationSource = 'cart'; 
                    openProductDetail(product.id);
                });
            });

            row.querySelector('[data-action="minus"]').addEventListener('click', () => {
                if (item.quantity > 1) {
                    item.quantity--;
                    saveCart();
                    renderCartPage(); 
                }
            });

            row.querySelector('[data-action="plus"]').addEventListener('click', () => {
                item.quantity++;
                saveCart();
                renderCartPage();
            });

            row.querySelector('.cart-item-remove-btn').addEventListener('click', () => {
                cart.splice(index, 1);
                saveCart();
                renderCartPage();
            });

            cartItemsList.appendChild(row);
        });

        const wordForm = getJournalWordForm(cart.length);
        if(cartTotalText) {
            cartTotalText.innerHTML = `всего: <strong>${cart.length}</strong> ${wordForm} на сумму <strong>${totalPrice}</strong> руб.`;
        }
    }

    const goToCatalogBtn = document.getElementById('goToCatalogFromCart');
    if(goToCatalogBtn) {
        goToCatalogBtn.addEventListener('click', () => showSection('catalogSection'));
    }

    const checkoutBtn = document.getElementById('checkoutBtn');
    if(checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            initCheckoutPage(); 
            showSection('checkoutSection');
        });
    }

    function checkUrlHashOnLoad() {
        const currentHash = window.location.hash;

        if (currentHash === '#cart') {
            renderCartPage(); 
            showSection('cartSection');
        } else if (currentHash === '#checkout') {
            if (cart.length > 0) {
                initCheckoutPage(); 
                showSection('checkoutSection');
            } else {
                showSection('catalogSection'); 
            }
        } else {
            showSection('catalogSection');
        }
    }

    // --- ЛОГИКА СТРАНИЦЫ ОФОРМЛЕНИЯ ЗАКАЗА С ДИНАМИЧЕСКИМ РАСЧЕТОМ ---
    function initCheckoutPage() {
        const checkoutTable = document.getElementById('checkoutTable');
        const checkoutTotalWeight = document.getElementById('checkoutTotalWeight');
        const checkoutSubtotal = document.getElementById('checkoutSubtotal');
        const checkoutFinalTotal = document.getElementById('checkoutFinalTotal');

        if (!checkoutTable) return;
        checkoutTable.innerHTML = ''; 

        let totalWeight = 0;
        let productsPrice = 0;

        cart.forEach(item => {
            const product = item.data;
            const itemTotal = product.price * item.quantity;
            const itemWeight = (product.weightGram || 500) * item.quantity; 

            productsPrice += itemTotal;
            totalWeight += itemWeight;

            const row = document.createElement('div');
            row.className = 'checkout-table-row';
            row.innerHTML = `
                <div>${product.title} (${product.issue})</div>
                <div>${product.price} ₽</div>
                <div>${item.quantity} шт.</div>
            `;
            checkoutTable.appendChild(row);
        });

        function recalculateTotal() {
            const selectedDelivery = document.querySelector('input[name="deliveryOption"]:checked');
            if(!selectedDelivery) return;
            
            let deliveryCost = parseInt(selectedDelivery.getAttribute('data-cost')) || 0;
            
            if (selectedDelivery.value === 'Курьер Россия' && productsPrice >= 10000) {
                deliveryCost = 0;
            }

            if(checkoutTotalWeight) checkoutTotalWeight.textContent = totalWeight;
            if(checkoutSubtotal) checkoutSubtotal.textContent = productsPrice;
            if(checkoutFinalTotal) checkoutFinalTotal.textContent = productsPrice + deliveryCost; 
        }

        const deliveryRadios = document.querySelectorAll('input[name="deliveryOption"]');
        deliveryRadios.forEach(radio => {
            radio.addEventListener('change', recalculateTotal);
        });

        recalculateTotal();
    }   

    const finalSubmitOrderBtn = document.getElementById('finalSubmitOrderBtn');
    if (finalSubmitOrderBtn) {
        finalSubmitOrderBtn.addEventListener('click', (e) => {
            const form = document.getElementById('checkoutForm');
            const emailInput = document.getElementById('clientEmail');
            const emailError = document.getElementById('emailError');

            if (!form || !emailInput) return;

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailPattern.test(emailInput.value)) {
                if(emailError) emailError.style.display = 'block'; 
                emailInput.style.borderBottomColor = 'red';
                return;
            } else {
                if(emailError) emailError.style.display = 'none';
                emailInput.style.borderBottomColor = '#000000';
            }

            if (form.checkValidity()) {
                alert('Демонстрация успешна! Заказ зафиксирован в системе (локально).');
                cart = []; 
                saveCart();
                showSection('catalogSection'); 
            } else {
                form.reportValidity(); 
            }
        });
    }

    // --- ЛОГИКА КНОПКИ "НАВЕРХ" ---
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                scrollToTopBtn.classList.add('visible'); 
            } else {
                scrollToTopBtn.classList.remove('visible'); 
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' 
            });
        });
    }

    // Первоначальный запуск контента
    renderCatalog();
    updateCartHeaderCount();
    checkUrlHashOnLoad();
});
