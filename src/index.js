const messages = [
    "David",
    "Diana",
    "Ana Maria",
    "Isabela",
    "Antonio",
    "Norma"
]
const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)]
    console.log(message)
}

// Exportar como un módulo

module.exports = { randomMsg }