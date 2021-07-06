const quoteEl = document.getElementById('quote')
const quoteBtn = document.getElementById('quoteBtn')
const quoteAu = document.getElementById('author')

quoteBtn.addEventListener('click', generateQuote)

generateQuote()

// function generateQuote() {
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }

//     const res = await fetch('https://favqs.com/api/qotd', config)

//     const data = await res.json()

//     quoteEl.innerHTML = data.quote.body
//     quoteAu.innerHTML = data.quote.author
// }

function generateQuote() {
    const config = {
        headers: {
        Accept: 'application/json',
       },
    }

    fetch('https://favqs.com/api/qotd', config)
        .then((res) => res.json())
        .then((data) => {
            quoteEl.innerHTML = data.quote.body
            quoteAu.innerHTML = data.quote.author
        }) 
}