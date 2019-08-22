/* Création d'un hash*/
const genetic_code ={
  UCU: 'Sérine',
  UCC: 'Sérine',
  UCA: 'Sérine',
  UCG: 'Sérine',
  AGU: 'Sérine',
  AGC: 'Sérine',
  CCU: 'Proline',
  CCC: 'Proline',
  CCA: 'Proline',
  CCG: 'Proline',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UUU: 'Phénylalanine',
  UUC: 'Phénylalanine',
  CGU: 'Arginine',
  CGC: 'Arginine',
  CGA: 'Arginine',
  CGG: 'Arginine',
  AGA: 'Arginine',
  AGG: 'Arginine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
};

function arnReader(arn) {
  // Teste pour si type est un string, multiple de 3
  if ((typeof arn !== "string") || arn.length%3 !== 0 || arn.length === 0) {
    return "This is not a valid ARN"
  };
  // Création d'un array aminoAcids afin de stocker donnée
  aminoAcids = []
  // Boucle for avec départ i = 0 fin i <arn.lenght et i= i+3 à chaque tour
  for(let i = 0; i < arn.length; i+=3) {
    aminoAcid = genetic_code[arn.slice(i, i+3)];
    if (aminoAcid) {
      aminoAcids.push(aminoAcid);
    } else {
      aminoAcids.push("UNKNOWN");
    };
  };
  return aminoAcids.join("-");
};

console.log(arnReader('CCGUCGUUGCGCUACAGC'));
console.log(arnReader('CCUCGCCGGUACUUCUCG'));