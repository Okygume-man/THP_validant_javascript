const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


Entrepreneurs_selectary = entrepreneurs.filter(ligne => ligne.year >= 1970 && ligne.year < 1980);
console.log(Entrepreneurs_selectary);


function SearchName(arr) {
  names = [];
  arr.forEach(entr => {
    names.push(entr.first, entr.last);
  }); /*arr= instance du tableau. Tu rappelles le tableau et arr rappelle l'instance du tableau */
  console.log(names);
}
SearchName(entrepreneurs);


function Seacher(arr) {
  pers = [];
  arr.forEach(entr => {
    pers.push(entr.first, entr.last, 2019 - entr.year)
  })
  console.log(pers);
}
Seacher(entrepreneurs);



function compare(a,b) {
  if (a.first < b.first)
     return -1;
  if (a.first > b.first)
    return 1;
  return 0;
};

entrepreneurs.sort(compare);




