
let size = prompt("Salut bienvenue dans ma super pyramide, donne moi un numbre stp");

for(let i=1; i<=size; i++) { /*création d'un boucle */
  space = " ".repeat(size - i)
  diese = "#".repeat(i)
  console.log(space + diese)
}

