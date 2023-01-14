let text = document.querySelectorAll(".lang");
const currentLang = document.querySelectorAll(".USA")[0]

const flags = document.querySelectorAll(".switch")

flags.forEach(el => {
    el.addEventListener('click', e => getTranslate(e.currentTarget.firstElementChild.getAttribute("class")))
})

function SwapLanguage(target){
    let tempClass = target.getAttribute("class")
    target.setAttribute("class", currentLang.getAttribute("class"))
    currentLang.setAttribute("class", tempClass)
}

function getTranslate(lang){

    SwapLanguage(document.querySelectorAll('.' + lang)[0])

    text.forEach(el =>{
        let key = el.getAttribute("key")
        el.innerText = language[lang][key]
    })
}



const language = {
    "USA": {
        "Menu": "Menu",
        "About Us": "About Us",
        "Work": "Work",
        "Contact": "Contact",
        "Org": "Organic Fruit & Vegetables",
        "Org1": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...",
        "art1": "Why We Aer The Best?",
        "art12": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...</div>",
        "items1": "Explor Our Special Items",
        "items2": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...</div>",
        "cust1": "What Our Customers About Us saying",
        "cust2": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularis</div>",
        "ahmed": "Ahmed Hridoy",
        "download": "Download App",
        "simple1": "Simple Way To Order Your Organic Fruit",
        "simple2": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...</div>",
        "footer": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...</div>",
        "cont": "Contact",
        "res": "Resource",
        "navig": "Navigation",
        "rev": "Reviews",
        "men": "Menu",
        "email": "Email: email@mail.ru",

    },
    "RU":{
        "Menu":"Меню",
        "About Us":"О нас",
        "Work":"Работа",
        "Contact":"Контакты",
        "Org":"Органические фрукты",
        "Org1":"Большое описание фруктов и овощей",
        "art1":"Почему мы лучшие?",
        "art12":"Большое описание почему мы лучшие",
        "items1":"Наши товары",
        "items2":"Большое описание специальных товаров",
        "cust1":"Что говорят наши покупатели?",
        "cust2":"Большое описание что говорят наши покупатели",
        "ahmed":"Ахмед Хридой",
        "download":"Скачать сайт",
        "simple1":"Простой заказ",
        "simple2":"Описание простого заказа",
        "footer":"Описание футера",
        "res":"Ресурсы",
        "cont":"Контакты",
        "navig":"Навигация",
        "men":"Меню",
        "rev":"Отзыв",
        "email":"Почта: email@mail.ru",

    }
}