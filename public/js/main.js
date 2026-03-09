document.querySelector('button').addEventListener('click', api)
let result = document.querySelector('section')

async function api() {
    const series = document.querySelector('input').value

    try {
        const response = await fetch(`https://sw-tales-series-api.onrender.com/api/${series}`)
        const data = await response.json()

        console.log(data['charaters'])
        charaters(data['charaters'])
    } catch (error) {
        console.log(error)
    }
}

function charaters(list) {
    result.textContent = ''
    for (let i = 0; i < list.length; i++) {
        let charater = document.createElement('p')
        charater.textContent = list[i]
        result.append(charater)
    }
}