const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

function booksRead(v){
  return v !== 0
}
console.log(books.every(booksRead));

/*---------------------*/


rented = books.map(book => book.rented); /* récupère valeur numérique de rented et l'enferme dans un tableau */
/* [39, 28, ....] */
max = Math.max(...rented);
/* 67 */
/*trouver index du maximum dans rented car on a la valeur numérique max */
indexMax = rented.indexOf(max);
/*récupère index 2 */
console.log(books[indexMax]);

/*---------------------------------------*/


rented = books.map(book => book.rented); /* récupère valeur numérique de rented et l'enferme dans un tableau */
/* [39, 28, ....] */
min = Math.min(...rented);
/* 67 */
/*trouver index du maximum dans rented car on a la valeur numérique max */
indexMin = rented.indexOf(min);
/*récupère index 2 */
console.log(books[indexMin]);

/*---------------------------*/


ids = books.map(book => book.id);
index = ids.indexOf(873495);
console.log(books[index]);

/*-------------------------------*/


indexdelete = ids.indexOf(133712);
books.splice(indexdelete, 1);
/*----------------------------*/

function compare(a,b) {
  if (a.title < b.title)
     return -1;
  if (a.title > b.title)
    return 1;
  return 0;
};

console.log(books.sort(compare));
