const tools = document.querySelector('.tools')
const dataInput = document.querySelector('.data-input')
const site = document.querySelector('.site')
const buttonAddText = document.getElementById('buttonAddText')
const buttonAddLink = document.getElementById('buttonAddLink')

let addtextInputField = (classInput) => {                     // создать поле для ввода текста
    dataInput.innerHTML = ''                                    // обнуление поля
    const textIndication = document.createElement('p')
    textIndication.innerHTML = 'Введите текст для добавления на сайт'
    dataInput.appendChild(textIndication)

    const textInputField = document.createElement('input')
    dataInput.appendChild(textInputField)
    textInputField.setAttribute('type', 'text')
    textInputField.classList.add(`${classInput}`)
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
    linkInputField.classList.add('input-link')

    const sendLink = document.createElement('button')
    sendLink.innerHTML = 'Ссылку на сайт'
    dataInput.appendChild(sendLink)
    sendLink.classList.add('link-on-site')
})

let addText = () => {                               // событие по созданию добавляемого текста на сайт
    const textSite = document.createElement('p')
    let text = dataInput.querySelector('.input-text')
    textSite.innerHTML = `${text.value}`
    site.appendChild(textSite)
    text.value = ''
}

let addLink = () => {                               // событие по созданию добавляемой ссылки на сайт
    const linkSite = document.createElement('a')
    let linkText = dataInput.querySelector('.input-linktext')
    linkSite.innerHTML = `${linkText.value}`
    let link = dataInput.querySelector('.input-link')
    linkSite.setAttribute('href', `${link.value}`)
    site.appendChild(linkSite)
    linkText.value = ''
    link.value = ''
}

dataInput.addEventListener('click', () => {         // добавление текста или ссылки по нажатию на кнопку
    const button = dataInput.querySelector('button')
    if (button.classList.contains('text-on-site')) {
        button.addEventListener('click', addText)
        dataInput.addEventListener('keydown', (event) => {     // добавление текста по нажатию на клавиатуре 'Enter'
            if (event.key === 'Enter') addText()
        })
    } else if (button.classList.contains('link-on-site')) {
        button.addEventListener('click', addLink)
        dataInput.addEventListener('keydown', (event) => {     // добавление текста по нажатию на клавиатуре 'Enter'
            if (event.key === 'Enter') addLink()
        })
    }
})
