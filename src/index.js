let sendResponse = document.querySelector('.button')
let tester = document.querySelector('.test')
let formSubmit = document.querySelector('.form')
function activateResponse (e) {
    e.preventDefault()
    console.log(input.value)
    input.value = input.placeholder
    response.value = response.placeholder
    confirmed.classList.add('.show')
    setTimeout(() => {
        confirmed.classList.remove('.show')
    }, 300);
    console.log('clicked')
}

sendResponse.addEventListener('click', function (event) {
    
    event.preventDefault()
    let input = document.querySelector('input')
    let response = document.querySelector('textarea')
    let confirmed = document.querySelector('.res-confirmation')
    let error = document.querySelector('.warning')

    if (input.value != '' && response.value != '') {
        console.log(input.value)
        input.value = ''
        response.value = ''
        confirmed.classList.add('show')
        setTimeout(() => {
            confirmed.classList.remove('show')
        }, 3000);
        console.log('clicked')
    } else {
        error.classList.add('show')
        setTimeout(() => {
            error.classList.remove('show')
        }, 3000);
    }
    
}
)