
// Función que calcula el área de una figura
function calcularArea () {
  const base = parseInt(document.getElementById('base').value)
  const altura = parseInt(document.getElementById('altura').value)
  if (base > 0 && altura > 0) {
    let area = 0
    const tipo = document.getElementsByName('tipo')
    if (tipo[0].checked) {
      area = base * altura
    } else {
      area = base * altura / 2
    }
    document.getElementById('area').value = area
  } else {
    if (base < 0) {
      window.alert('El valor de base es invalido')
      document.getElementById('base').value = '0'
    }
    if (altura < 0) {
      window.alert('El valor de altura es invalido')
      document.getElementById('altura').value = '0'
    }
    document.getElementById('area').value = '0'
  }
}

// Borra los valores del formulario
function limpiaValores () {
  document.getElementById('base').value = '0'
  document.getElementById('altura').value = '0'
  document.getElementById('area').value = '0'
}
