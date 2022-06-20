const passwordParagraph = document.getElementById('password')

const userName = prompt('Scrivi il tuo nome');
console.log(userName);

const userSurname = prompt('Scrivi il tuo cognome');
console.log(userSurname);

const color = prompt('Scrivi il tuo colore preferito');
console.log(color);

const password = userName + userSurname + color + 21;
console.log(password);

passwordParagraph.innerText = `La tua password è: ${password}`