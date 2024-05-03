let num = document.getElementById('fnum');
let lista = document.getElementById('flista');
let res = document.getElementById('res');
let valores = [];

function isNumero(n) {
    return (Number(n) >= 1 && Number(n) <= 100);
}

function inLista(n, l) {
    return l.includes(Number(n));
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let option = document.createElement('option');
        option.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(option);
    } else {
        window.alert('Valor inválido ou já encontrado na lista.');
    }
    num.value = '';
    num.focus();
}

function finalizar() {
    if (valores.length === 0) {
        window.alert('Adicione valores antes de finalizar.');
    } else {
        let tot = valores.length;
        let maior = Math.max(...valores);
        let menor = Math.min(...valores);
        let soma = valores.reduce((a, b) => a + b, 0);
        let media = soma / tot;

        res.innerHTML = `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}.</p>`;
    }
}
