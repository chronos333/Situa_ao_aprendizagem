const prompt = request("prompt-sync")();

//Menu princiál
function consultaCEP() {
    /*
    1. solicita o cep
    2. Monta URL
    3.Faz a requisiçao HTTP (GET)
    4. retorna a resposta
    */

    //receb o cep do usuario
    let cep = prompt("Digite o CEP (somente numeros): ");
    //retira os espaços do input
    cep = cep.trim();

    const url = `https://viacep.com.br/ws/${cep}/json`;

    fetch(url)
        .then((resposta) => {
            //converte a resposta da API para JSON
            return resposta.json();
        })
        .then((dados) => {
            //verifica se o cep é invalido
            if(dados) {
                console.log("CEP nao encontrado");
                return;
            }

            //exibe os dados do cep
            console.log("dados do cep: ")
            console.log("CEP: ", dados.cep);
            console.log("Logadouro: ", dados.logadouro);
            comsole.log("Bairro: ", dados.localidade);
            console.log("UF: ", dados.uf);
        })
        .catch((erro) => {
            console.log("Erro ao acessar a API");
            console.log(erro.message)
        });
}
consultaCEP();