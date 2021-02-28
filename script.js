const tools = document.querySelector('.tools')
const dataInput = document.querySelector('.data-input')
const site = document.querySelector('.site')
const buttonAddText = document.getElementById('buttonAddText')
const buttonAddLink = document.getElementById('buttonAddLink')
const buttonAddImg = document.getElementById('buttonAddImg')
const buttonAddBackground = document.getElementById('buttonAddBackground')

let textColor;
let textSize;

let addtextInputField = (classInput) => {                     // создать поле для ввода текста
    dataInput.innerHTML = ''                                    // обнуление поля
    const textIndication = document.createElement('p')
    textIndication.innerHTML = 'Введите текст для добавления на сайт'
    dataInput.appendChild(textIndication)

    const textInputField = document.createElement('input')
    dataInput.appendChild(textInputField)
    textInputField.setAttribute('type', 'text')
    textInputField.classList.add(`${classInput}`)

    const colorIndication = document.createElement('p')
    colorIndication.innerHTML = 'Выберите цвет текста'
    dataInput.appendChild(colorIndication)

    textColor = document.createElement('input')
    dataInput.appendChild(textColor)
    textColor.setAttribute('type', 'color')

    const sizeIndication = document.createElement('p')
    sizeIndication.innerHTML = 'Выберите размер текста'
    dataInput.appendChild(sizeIndication)

    textSize = document.createElement('input')
    dataInput.appendChild(textSize)
    textSize.setAttribute('type', 'range')
    textSize.setAttribute('max', '100')
    textSize.setAttribute('min', '10')
    textSize.setAttribute('step', '9')
}

let addtextButton = () => {                         // создание кнопки добавления текста
    const sendText = document.createElement('button')
    sendText.innerHTML = 'Текст на сайт'
    dataInput.appendChild(sendText)
    sendText.classList.add('text-on-site')
}

buttonAddText.addEventListener('click', () => {     // событие по созданию поля ввода текста
    addtextInputField('input-text')
    addtextButton()
})

buttonAddLink.addEventListener('click', () => {         // создать поля для ввода ссылки
    addtextInputField('input-linktext')

    const linkIndication = document.createElement('p')
    linkIndication.innerHTML = 'Введите сслыку для добавления на сайт'
    dataInput.appendChild(linkIndication)

    const linkInputField = document.createElement('input')
    dataInput.appendChild(linkInputField)
    linkInputField.setAttribute('type', 'text')
    linkInputField.setAttribute('value', 'https://cs8.pikabu.ru/post_img/2017/11/25/7/1511607908184136835.jpg')
    linkInputField.classList.add('input-link')

    const sendLink = document.createElement('button')
    sendLink.innerHTML = 'Ссылку на сайт'
    dataInput.appendChild(sendLink)
    sendLink.classList.add('link-on-site')
})
let linkImage, sendImage;
let addImageField = buttonAddImg.addEventListener('click', () => {  // добавить поле ввода картинки
    dataInput.innerHTML = ''                                    // обнуление поля
    const imageIndication = document.createElement('p')
    imageIndication.innerHTML = 'Введите ссылку на картинку'
    dataInput.appendChild(imageIndication)

    linkImage = document.createElement('input')
    dataInput.appendChild(linkImage)
    linkImage.setAttribute('type', 'text')
    linkImage.setAttribute('value', 'https://cs8.pikabu.ru/post_img/2017/11/25/7/1511607908184136835.jpg')
    linkImage.classList.add('image')

    sendImage = document.createElement('button')
    sendImage.innerHTML = 'Картинку на сайт'
    dataInput.appendChild(sendImage)
    sendImage.classList.add('image-on-site')
})

let text;               //  переменная под поле ввода текста
let addText = () => {                               // событие по созданию добавляемого текста на сайт
    const textSite = document.createElement('p')
    text = dataInput.querySelector('.input-text')
    textSite.innerHTML = `${text.value}`
    textSite.style.color = `${textColor.value}`
    textSite.style.fontSize = `${textSize.value}px`
    site.appendChild(textSite)
    text.value = ''
}
let linkText, link;               //  переменная под поле ввода ссылки
let addLink = () => {                               // событие по созданию добавляемой ссылки на сайт
    const linkSite = document.createElement('a')
    linkText = dataInput.querySelector('.input-linktext')
    linkSite.innerHTML = `${linkText.value}`
    linkSite.style.color = `${textColor.value}`
    link = dataInput.querySelector('.input-link')
    linkSite.setAttribute('href', `${link.value}`)
    linkSite.style.fontSize = `${textSize.value}px`
    site.appendChild(linkSite)
    linkText.value = ''
    link.value = 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj4g9CPoY3vAhXFy6QKHU-6CjsQFjAAegQIAhAD&url=https%3A%2F%2Fwww.google.by%2F&usg=AOvVaw2hX-q0vIgw0b6XJKd0ZgEo'
}
let addImage = () => {
    const image = document.createElement('img')
    image.setAttribute('src', `${linkImage.value}`)
    site.appendChild(image)
    linkImage.value = ''
}

dataInput.addEventListener('click', () => {         // добавление текста или ссылки по нажатию на кнопку
    const button = dataInput.querySelector('button')
    if (button.classList.contains('text-on-site')) {
        button.addEventListener('click', addText)
        text = dataInput.querySelector('.input-text')
        text.addEventListener('keydown', (event) => {     // добавление текста по нажатию на клавиатуре 'Enter'
            if (event.key === 'Enter') addText()
        })
    } else if (button.classList.contains('link-on-site')) {
        button.addEventListener('click', addLink)
        link = dataInput.querySelector('.input-link')
        link.addEventListener('keydown', (event) => {     // добавление текста по нажатию на клавиатуре 'Enter'
            if (event.key === 'Enter') addLink()
        })
    } else if (button.classList.contains('image-on-site')) {
        button.addEventListener('click', addImage)
        // link = dataInput.querySelector('.input-link')
        linkImage.addEventListener('keydown', (event) => {     // добавление текста по нажатию на клавиатуре 'Enter'
            if (event.key === 'Enter') addImage()
        })
    } 
})

