function fases (){
    alert('A princesa feiticeira, sem ser percebida, viu os soldados que estão protegendo a mansão em que o príncipe está sendo mantido.\nSelecione corretamente o que ela deve fazer agora escrevendo o número da opção desejada');
    var resposta1 = prompt('1 - Realizar um feitiço a distância que se enconta para fazer eles desmaiarem.\n2 - Se aproximar mais deles para tentar enganá-los e realizar um grande feitiço que os matará.\n3 - Começar a correr na direção dos soldados e lançar um feitiço que fará todo o ambiente ficar cheio de fumaça.');
    if(resposta1 == '1'){
        alert('Você escolheu corretamente!!!\nContinue assim nas próximas perguntas ! Vamos lá!!');
        var resposta2 = prompt('Agora que ela neutralizou todos os soldados por um tempo determinado, o que ela deve fazer?\n1 - Entrar na mansão correndo e procurar o príncipe para saír o mais rápido possível.\n2 - Continuar procurando outros possíveis protetores do local que eventualmente não sofreram as consequências do feitiço.\n3 - Chamar pelo príncipe e ao mesmo tempo verificar a existência de outros soldados que não estão sob efeito do feitiço.');
        if(resposta2 == '1'){            
            var resposta3 = prompt('Ótima escolha!!!\nAgora a princesa já encontrou o príncipe, porém ele está amarrado e machucado:(\nSelecione, então, a opção para a princesa concluir a última etapa com sucesso:\n1 - Ela deve soltá-lo o mais rápido possível e eles fogem juntos.\n2 - Ela deve "vasculhar" todo o entorno da casa e dentro dela para garantir que não haja ninguém que poderá surpreendê-los, e então deve voltar para libertar o príncipe.\n3 - Ela deve retornar para fora do castelo para tentar encontrar alguém que possa ajudá-los.');
            if(resposta3 == '1'){
                alert('Parabéns!!!!!!\nFinalmente o príncipe e a princesa estão a salvo e poderão viver tranquilamente!!');
                location.assign('../html/index.html')

              
            } else {
                alert('Game over! A princesa infelizmente foi capturada também');
                location.assign('../html/index.html')

            };
                

            } else{
                alert('Game over! A princesa infelizmente foi capturada também');
                location.assign('../html/index.html')

            };
        } else{
            alert('Game over! A princesa infelizmente foi capturada também');
            location.assign('../html/index.html')

        };

    }
var botaoIniciar = document.getElementById('iniciar');
botaoIniciar.addEventListener('click', fases);
var botaoRetorno = document.getElementById('retorno');
botaoRetorno.addEventListener('click', function(){
location.assign('../html/index.html')
})