function jogo() {
    var narrativa1 = document.getElementById('textoNarrativa');
    var narrativa2 = document.getElementById('textoNarrativa2');
    var narrativa3 = document.getElementById('textoNarrativa3');
    var narrativa4 = document.getElementById('textoNarrativa4');
    var gameOver = document.getElementById('gameOver');
    var resposta1 = prompt('1 - Abater os soldados da distância que se enconta.\n2 - Se aproximar mais tentando não ser percebida para efetuar seus disparos com a flecha.\n3 - Começar a correr na direção dos soldados e ir disparando as flechas.');
        if (resposta1 == '2') {
            narrativa1.style.display = 'none';
            narrativa2.style.display = 'block';
        
        } else {
            narrativa1.style.display = 'none';
            gameOver.style.display = 'block';
            setTimeout(() => {  
                location.assign('../html/index.html');  
            }, 2000);
        
        };
        var resposta2;
        var resposta3;
        setTimeout(function () {
            if (resposta1 == '2') {
                resposta2 = prompt('1 - Entrar na mansão correndo e procurar o príncipe para saír o mais rápido possível.\n2 - Continuar procurando outros possíveis protetores do local que eventualmente possam capturá-la.\n3 - Chamar pelo príncipe e ao mesmo tempo verificar a existência de outros soldados.');
                    if (resposta2 == '2') {
                        narrativa2.style.display = 'none';
                        narrativa3.style.display = 'block';
                    } else {
                        narrativa2.style.display = 'none';
                        gameOver.style.display = 'block';
                        setTimeout(() => {
                            location.assign('../html/index.html');  
                        }, 2000);
                    };
                    setTimeout(function () {
                        if (resposta2 == '2') {
                            resposta3 = prompt('1 - Ela deve soltá-lo o mais rápido possível e eles fogem juntos, considerando que a princesa estará de prontidão com seu arco e flecha caso seja necessário.\n2 - Ela deve "vasculhar" todo o entorno da casa e dentro ddela para garantir que não haja ninguém que poderá surpreendê-los, e então deve voltar para libertar o príncipe.\n3 - Ela deve retornar para fora do castelo para tentar encontrar alguém que possa ajudá-los.');
                        } else {
        
                        }
                        if (resposta3 == '1') {
                            narrativa3.style.display = 'none';
                            narrativa4.style.display = 'block';
                            setTimeout(() => {
                                location.assign('../html/index.html');  
                            }, 2000);
        
                        } else {
                            narrativa3.style.display = 'none';
                            gameOver.style.display = 'block';
                            setTimeout(() => {
                                location.assign('../html/index.html');  
                            }, 2000);
                        };
                    }, 1000);
        
                };
            }, 1000);
        };

var botaoIniciar = document.getElementById('iniciar');
botaoIniciar.addEventListener('click', jogo);
var botaoRetorno = document.getElementById('retorno');
botaoRetorno.addEventListener('click', function () {
    location.assign('../html/index.html');
});