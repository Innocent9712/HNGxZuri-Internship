let sendResponse = document.querySelector('.button')

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