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
    textInputField.style.margin = '10px 0'
    textInputField.style.width = '90%'
    textInputField.style.height = '30px'
    textInputField.style.padding = '0 10px'
    textInputField.setAttribute('type', 'text')
    textInputField.classList.add(`${classInput}`)
}

let addtextButton = () => {                         // создание кнопки добавления текста
    const sendText = document.createElement('button')
    sendText.innerHTML = 'Текст на сайт'
    dataInput.appendChild(sendText)
    sendText.style.width = '50%'
    sendText.style.height = '30px'
    // sendText.setAttribute('type', 'submit')
    // sendText.setAttribute('value', 'Текст на сайт')
    sendText.classList.add('text-on-site')
}

buttonAddText.addEventListener('click', () => {     // событие по созданию поля ввода текста
    addtextInputField('input-text')
    addtextButton()
})

let addText = () => {                               // событие по созданию добавляемого текста на сайт
        const textInput = document.createElement('p')
        let input = dataInput.querySelector('.input-text')
        textInput.innerHTML = `${input.value}`
        site.appendChild(textInput)
        input.value = ''
}

dataInput.addEventListener('click', () => {         // добавление текста по нажатию на кнопку
    // let item = event.target;
    // console.log(item);
    const button = dataInput.querySelector('.text-on-site')
    button.addEventListener('click', addText)
})

dataInput.addEventListener('keydown', (event) => {     // добавление текста по нажатию на клавиатуре 'Enter'
    if (event.key === 'Enter') addText()
})

buttonAddLink.addEventListener('click', () => {         // // создать поля для ввода ссылки
    dataInput.innerHTML = ''

    addtextInputField('input-linktext')

    const linkIndication = document.createElement('p')
    linkIndication.innerHTML = 'Введите сслыку для добавления на сайт'
    dataInput.appendChild(linkIndication)

    const linkInputField = document.createElement('input')
    dataInput.appendChild(linkInputField)
    linkInputField.style.margin = '10px 0'
    linkInputField.style.width = '90%'
    linkInputField.style.height = '30px'
    linkInputField.style.padding = '0 10px'
    linkInputField.setAttribute('type', 'text')
    linkInputField.classList.add('input-link')

    const sendLink = document.createElement('button')
    sendLink.innerHTML = 'Ссылку на сайт'
    dataInput.appendChild(sendLink)
    sendLink.style.width = '50%'
    sendLink.style.height = '30px'
    // sendLink.setAttribute('type', 'submit')
    // sendLink.setAttribute('value', 'Сcылку на сайт')
    sendLink.classList.add('link-on-site')
})

let addLink = () => {                               // событие по созданию добавляемого текста на сайт
    const linkInput = document.createElement('a')
    let inputLinkText = dataInput.querySelector('.input-linktext')
    linkInput.innerHTML = `${inputLinkText.value}`
    let linkText = dataInput.querySelector('.input-link')
    linkInput.setAttribute('href', `${linkText.value}`)
    site.appendChild(linkInput)
    inputLinkText.value = ''
    linkText.value = ''
}

dataInput.addEventListener('click', () => {         // добавление текста по нажатию на кнопку
    // let item = event.target;
    // console.log(item);
    const button = dataInput.querySelector('.link-on-site')
    button.addEventListener('click', addLink)
})