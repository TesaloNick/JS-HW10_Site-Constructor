const tools = document.querySelector('.tools')
const dataInput = document.querySelector('.data-input')
const site = document.querySelector('.site')
const buttonAddText = document.getElementById('buttonAddText')
const buttonAddLink = document.getElementById('buttonAddLink')

let addtextInputField = () => {             // создать поле для ввода текста
    dataInput.innerHTML = ''                // обнуление поля
    const textIndication = document.createElement('p')
    textIndication.innerHTML = 'Введите текст для добавления на сайт'
    dataInput.appendChild(textIndication)

    const textInputField = document.createElement('input')
    dataInput.appendChild(textInputField)
    textInputField.style.margin = '10px 0'
    textInputField.style.width = '90%'
    textInputField.style.height = '30px'
    textInputField.style.padding = '0 10px'

    const sendText = document.createElement('button')
    sendText.innerHTML = 'Текст на сайт'
    dataInput.appendChild(sendText)
    sendText.style.width = '50%'
    sendText.style.height = '30px'
}

buttonAddText.addEventListener('click', addtextInputField)

dataInput.addEventListener('click', () => {
    // let item = event.target;
    // console.log(item);
    const button = dataInput.querySelector('button')
    button.addEventListener('click', () => {
        const textInput = document.createElement('p')
        let input = dataInput.querySelector('input')
        textInput.innerHTML = `${input.value}`
        site.appendChild(textInput)
        input.value = ''
    })
})

buttonAddLink.addEventListener('click', () => {
    dataInput.innerHTML = ''

    addtextInputField()

    const linkIndication = document.createElement('p')
    linkIndication.innerHTML = 'Введите сслыку для добавления на сайт'
    dataInput.appendChild(linkIndication)

    const linkInputField = document.createElement('input')
    dataInput.appendChild(linkInputField)
    linkInputField.style.margin = '10px 0'
    linkInputField.style.width = '90%'
    linkInputField.style.height = '30px'
    linkInputField.style.padding = '0 10px'

    const sendLink = document.createElement('button')
    sendLink.innerHTML = 'Ссылку на сайт'
    dataInput.appendChild(sendLink)
    sendLink.style.width = '50%'
    sendLink.style.height = '30px'
})