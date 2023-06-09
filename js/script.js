

const NameFromPrompt = prompt('inserisci il tuo nome');

console.log (NameFromPrompt, typeof NameFromPrompt);

const SurnameFromPrompt = prompt('inserisci il tuo cognome');

console.log (SurnameFromPrompt, typeof SurnameFromPrompt);

const FavoriteColorFromPrompt = prompt('inserisci il tuo cognome');

console.log (FavoriteColorFromPrompt, typeof FavoriteColorFromPrompt);

const MyPromptResults = document.getElementById('my-p');

MyPromptResults.innerHTML = NameFromPrompt + ' ' + SurnameFromPrompt + ' ' + FavoriteColorFromPrompt + ' ' + '101';