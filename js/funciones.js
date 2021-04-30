function calcularArea () {
  const base = parseInt(document.getElementById('base').value)
  const altura = parseInt(document.getElementById('altura').value)
  if (base > 0 && altura > 0) {
    const area = base * altura;
    document.getElementById('area').value = area
  }
}
