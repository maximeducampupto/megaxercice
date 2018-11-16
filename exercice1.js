let nomVoiture = "Peugeot",
    x = 50,
    div = document.createElement('div'),
    z = 5,
    w = 10,
    d = z + w;

div.id = "demo";
div.innerHTML  = d;

let prenom = "John", nom = "Doe", age = 35;

alert(w * z);
alert(w / 2);
alert((w + z) % 9);

let k = 5, l = 3 * k;

function maFonction()
{
    alert('Salut tout le monde!');
}

maFonction();

function maFonctionDeRetour()
{
    return 'Bonjour!';
}

document.getElementById('demoRetour').innerHTML = maFonctionDeRetour();

let button = document.createElement('button');
button.id = 'monBouton';
button.innerHTML = "Click Me!";
button.style.marginTop = "2rem";
document.body.appendChild(button);

button.addEventListener('click', function()
{
    alert('Hello');
});

let new_div = document.createElement('div');
new_div.id = 'changeSurOver';
new_div.style.width = "200px";
new_div.style.height = "200px";
new_div.style.border = "1px solid black";
new_div.style.marginTop = "2rem";

document.body.appendChild(new_div);


new_div.addEventListener('mouseover', function()
{
    new_div.style.backgroundColor = "red";
});

let txt = "une longue phrase",
    longueur = txt.length;

alert(longueur);

let str1 = 'Bonjour',
    str2 = ' le monde!';

alert(str1 + str2);

let listeVoitures = [];
listeVoitures[0] = "Ford";

alert(listeVoitures.length);

listeVoitures.pop();
listeVoitures.push('Ferrari');

let rNumber = Math.random() * 100,
    fNumber = Math.round(Math.random() * 20),
    nombreUn = 10,
    nombreDeux = 5;

if (nombreUn !== nombreDeux)
{
    alert('nombreUn n\'est pas égal à nombreDeux');
}

for (let i = 0; i < 9; i++)
{
    console.log(i);
}

let fruits = ['pomme', 'banane', 'poire'];

for (let o = 0; o < fruits.length; o++)
{
    console.log(o);
}

let i = 0;

while (i < 10)
{
    console.log(i);
    i++;
}

i = 0;

while (i < 10)
{
    console.log(i);
    i = i + 2;
}

for (let u = 0; u < 10; u++)
{
    if (u === 5)
    {
        alert('That\'s one long readme file!');
    }
}