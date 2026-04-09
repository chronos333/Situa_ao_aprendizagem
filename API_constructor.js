const prompt = require("prompt-sync")();

function consultaHeroi() {
  let nome = prompt("Digite o nome do herói: ");
  nome = nome.toLowerCase();

  const url = `https://akabab.github.io/superhero-api/api/all.json`;

  fetch(url)
    .then((res) => res.json())
    .then((dados) => {
      const resultados = dados.filter((h) =>
        h.name.toLowerCase().includes(nome),
      );

      if (resultados.length === 0) {
        console.log("Herói não encontrado");
        return;
      }

      console.log("\nHeróis encontrados:\n");

      resultados.forEach((h) => {
        console.log("Nome:", h.name);
        console.log("Força:", h.powerstats.strength);
        console.log("Inteligência:", h.powerstats.intelligence);
        console.log("----------------------");
      });
    })
    .catch((err) => {
      console.log("Erro:", err.message);
    });
}

consultaHeroi();
