const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat() {
   cats.push('Ralph')
}

function destructivelyPrependCat() {
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat() {
    cats.pop(3)
}

function destructivelyRemoveFirstCat() {
    cats.shift(0)
}

function appendCat() {
    const copyOfCats = cats.slice()
    copyOfCats.push('Broom')
    return copyOfCats
}

function prependCat() {
    const copyOfCats = cats.slice()
    copyOfCats.unshift('Arnold')
    return copyOfCats
}

function removeLastCat(name) {
    const copyOfCats = cats.slice()
    copyOfCats.pop(2)
    return copyOfCats
}

function removeFirstCat() {
    const copyOfCats = cats.slice()
    copyOfCats.shift(0)
    return copyOfCats
}
