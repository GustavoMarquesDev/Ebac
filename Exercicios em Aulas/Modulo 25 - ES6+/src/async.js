const funcaoMuitoPesada = () => {
  let execucoes = 0;
  for (let i = 0; i < 1000000000; i++) {
    execucoes++;
  }
  return execucoes;
};

const funcaoMuitoPesadaPromise = new Promise(function (resolve, reject) {
  try {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
      execucoes++;
    }
    resolve(execucoes);
  } catch (e) {
    reject("Deu erro na iteração dos números");
  }
});

const promisseComParametros = (login, senha) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Logado com o usuário: ${login}`);
    }, 3000);
  });
};

//console.log(funcaoMuitoPesada());

async function execucaoPrincipal() {
  console.log("inicio");
  //   await funcaoMuitoPesadaPromise
  //     .then((resultado) => console.log(resultado))
  //     .catch(function (erro) {
  //       console.log(erro);
  //     });
  promisseComParametros("gustavo-markes@hotmail.com", 12345).then(
    (resultado) => {
      console.log(resultado);
    }
  );

  try {
    const resultado = await funcaoMuitoPesadaPromise;
    console.log(resultado);
  } catch (e) {
    console.log(e);
  }

  console.log("fim");
}
execucaoPrincipal();
