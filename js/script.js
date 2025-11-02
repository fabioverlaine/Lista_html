const botaoAdicionar = document.getElementById('botaoAdicionar');
const playlist = document.getElementById('playlist');
const inputMusica = document.getElementById('inputMusica');


function adicionarMusica() {
    const nomeMusica = inputMusica.value;

    if(nomeMusica === ""){
        alert('Digite uma música!');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `${nomeMusica} <button class="remover">Remover</button>`  
    playlist.appendChild(li);

    inputMusica.value = "";

    const botaoRemover = li.querySelector('.remover');
    botaoRemover.addEventListener('click', removerMusica);
}

botaoAdicionar.addEventListener('click', adicionarMusica);

inputMusica.addEventListener('keypress', function(e) {
    if(e.key === 'Enter'){
        adicionarMusica();
    }
});

function removerMusica(e) {
    const li = e.target.parentElement;
    playlist.removeChild(li)
}
