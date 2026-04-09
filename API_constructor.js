// ===============================
// IMPORTAÇÃO DE MÓDULOS
// ===============================

// Usando readline no lugar do prompt-sync (evita erro)
const readline = require("readline");

// Criando interface de entrada de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ===============================
// FUNÇÃO PRINCIPAL (ASSÍNCRONA)
// ===============================

async function consultaHeroi(nomeUsuario) {
  try {
    // Normalização do input (boa prática)
    const nome = nomeUsuario.toLowerCase().trim();

    // Validação do input
    if (!nome) {
      console.log("❌ Você precisa digitar um nome válido.");
      return;
    }

    // URL da API
    const url = "https://akabab.github.io/superhero-api/api/all.json";

    // Requisição GET (async/await)
    const resposta = await fetch(url);

    // Conversão para JSON
    const dados = await resposta.json();

    // Filtrando heróis pelo nome
    const resultados = dados.filter((h) =>
      h.name.toLowerCase().includes(nome)
    );

    // Tratamento caso não encontre
    if (resultados.length === 0) {
      console.log("\n❌ Herói não encontrado.");
      return;
    }

    // ===============================
    // EXIBIÇÃO ORGANIZADA DOS DADOS
    // ===============================

    console.log("\n🔎 RESULTADOS ENCONTRADOS:\n");

    resultados.forEach((h) => {
      console.log("🦸 Nome:", h.name);
      console.log("💪 Força:", h.powerstats.strength);
      console.log("🧠 Inteligência:", h.powerstats.intelligence);
      console.log("⚡ Velocidade:", h.powerstats.speed);
      console.log("----------------------------");
    });

  } catch (erro) {
    // Tratamento de erro (boa prática)
    console.log("❌ Erro ao acessar a API:", erro.message);
  }
}

// ===============================
// ENTRADA DO USUÁRIO
// ===============================

rl.question("Digite o nome do herói: ", (resposta) => {
  consultaHeroi(resposta);
  rl.close();
});