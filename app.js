const names = ['Ala', 'Ola', 'Ela', 'Iza']

const appendArray = function (array, container) {
    array.forEach(function (element) {
        container.appendChild(element)
    })
}

const renderListItem = function (name) {
    const li = document.createElement('li')

    li.style.color = 'blue'

    li.innerText = name

    return li
}

const toUpperCase = function (string) {
    return string.toUpperCase()
}

const namesElements = (
    names
        .map(toUpperCase)
        .map(renderListItem)
)

appendArray(namesElements, document.body) 