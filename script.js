let display = document.getElementById('display');
let expressao = '';


function atualizarDisplay() {
  display.textContent = expressao || '0';
}

function adicionar(valor) {
  expressao += valor;
  atualizarDisplay();
}

function limpar() {
  expressao = '';
  atualizarDisplay();
}

function inverterSinal() {
  if (expressao) {
    try {
      let resultado = eval(expressao);
      resultado *= -1;
      expressao = resultado.toString();
      atualizarDisplay();
    } catch (e) {
      display.textContent = 'Erro';
    }
  }
}

function porcentagem() {
  if (expressao) {
    try {
      let resultado = eval(expressao) / 100;
      expressao = resultado.toString();
      atualizarDisplay();
    } catch (e) {
      display.textContent = 'Erro';
    }
  }
}

function raizQuadrada() {
  if (expressao) {
    try {
      let resultado = Math.sqrt(eval(expressao));
      expressao = resultado.toString();
      atualizarDisplay();
    } catch (e) {
      display.textContent = 'Erro';
    }
  }
}


function ptencial() {
  if (expressao) {
    try {
      let resultado = Math.pow(eval(expressao), 2);
      expressao = resultado.toString();
      atualizarDisplay();
    } catch (e) {
      display.textContent = 'Erro';
    }
  }
}

function calcular() {
  if (expressao) {
    try {
      let resultado = eval(expressao);
      expressao = resultado.toString();
      atualizarDisplay();
    } catch (e) {
      display.textContent = 'Erro';
    }
  }
}
