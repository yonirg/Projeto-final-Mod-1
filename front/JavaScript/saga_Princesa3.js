function fases (){
    alert('A princesa arqueira, sem ser percebida, viu os soldados que estão protegendo a mansão em que o príncipe está sendo mantido.\nSelecione corretamente o que ela deve fazer agora escrevendo o número da opção desejada');
    var resposta1 = prompt('1 - Ela deve se aproximar e seduzí-los.\n2 - Ela deve utilizar sua habilidade de manipulação para convencê-los que ela é quem dá as ordens\n3 - Começar a correr na direção dos soldados alegando que esá vindo um exército de milhões de pessoas.');
    if(resposta1 == '2'){
        alert('Você escolheu corretamente!!!\nContinue assim nas próximas perguntas ! Vamos lá!!');
        var resposta2 = prompt('Agora que ela já é considerada uma líder para eles, o que ela deve fazer?\n1 - Entrar na mansão correndo e procurar o príncipe para saír o mais rápido possível.\n2 - Mandar todos os soldados ficarem fora da mansão para ela procurar o príncipe sem riscos. \n3 - Distraír um soldado, pegar sua arma e procurar o príncipe');
        if(resposta2 == '2'){            
            var resposta3 = prompt('Ótima escolha!!!\nAgora a princesa já encontrou o príncipe, porém ele está amarrado e machucado:(\nSelecione, então, a opção para a princesa concluir a última etapa com sucesso:\n1 - Ela deve soltá-lo o mais rápido possível e eles fogem juntos com os automóveis estacionados dentro da mansão.\n2 - Ela deve dentro da mansão para garantir que não haja ninguém que a reconheça como alguém de confiança e que poderá surpreendê-los, e então deve voltar para libertar o príncipe e chamar por resgate aéreo.\n3 - Ela deve fantasiar o príncipe para que ele não seja reconhecido, e então saír normalmente pelo portão.');
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