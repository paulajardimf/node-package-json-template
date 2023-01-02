import { countries } from "./countries.js";

const busca = process.argv[2];

if (!busca) {
  console.log("Faltou o argumento de busca");
} else {
  const resultado = countries.filter((countrie) => {
    return countrie.name.includes(busca);
  });
  if (resultado.length === 0) {
    console.log("País não encontrado");
  } else {
    console.log(resultado);
  }

}
