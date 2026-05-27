document.getElementById('meuBotao').addEventListener('click', function() {
    const mensagem = document.getElementById('mensagem');
    
    if (mensagem.className === 'escondido') {
        mensagem.className = 'mostrando';
    } else {
        mensagem.className = 'escondido';
    }
});

document.getElementById('meuBotao2').addEventListener('click', function() {
    const mensagem2 = document.getElementById('mensagem2');
    
    if (mensagem2.className === 'escondido') {
        mensagem2.className = 'mostrando';
    } else {
        mensagem2.className = 'escondido';
    }
});

document.getElementById('meuBotao3').addEventListener('click', function() {
    const mensagem3 = document.getElementById('mensagem3');
    
    if (mensagem3.className === 'escondido') {
        mensagem3.className = 'mostrando';
    } else {
        mensagem3.className = 'escondido';
    }
});