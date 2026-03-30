var formulari = document.getElementById('formulariAlumne');
var inputNom = document.getElementById('nom');
var inputExamen = document.getElementById('examen');
var inputPractiques = document.getElementById('practiques');
var inputActitud = document.getElementById('actitud');
var missatge = document.getElementById('missatge');
var cosTaula = document.getElementById('cosTaula');
 
var alumnes = [];
 
formulari.addEventListener('submit', validarFormulari);
document.getElementById('ordenarAsc').addEventListener('click', function() { ordenarAlumnes('asc'); });
document.getElementById('ordenarDesc').addEventListener('click', function() { ordenarAlumnes('desc'); });
 
function validarFormulari(event) {
  event.preventDefault();
 
  var nom = inputNom.value.trim();
  var examen = parseFloat(inputExamen.value);
  var practiques = parseFloat(inputPractiques.value);
  var actitud = parseFloat(inputActitud.value);
 
  if (nom === '') {
    missatge.textContent = 'El nom no pot estar buit.';
    missatge.className = 'error';
    return;
  }
 if (isNaN(examen) || examen < 0 || examen > 10) {
    missatge.textContent = 'La nota de l\'examen ha de ser entre 0 i 10.';
    missatge.className = 'error';
    return;
  }
 
  if (isNaN(practiques) || practiques < 0 || practiques > 10) {
    missatge.textContent = 'La nota de pràctiques ha de ser entre 0 i 10.';
    missatge.className = 'error';
    return;
  }
 
  if (isNaN(actitud) || actitud < 0 || actitud > 10) {
    missatge.textContent = 'La nota d\'actitud ha de ser entre 0 i 10.';
    missatge.className = 'error';
    return;
  }
  var notaFinal = (examen * 0.6) + (practiques * 0.3) + (actitud * 0.1);
 
  alumnes.push({
    nom: nom,
    examen: examen,
    practiques: practiques,
    actitud: actitud,
    notaFinal: notaFinal
  });
 
  mostrarAlumnes();
 
  missatge.textContent = 'Alumne afegit correctament!';
  missatge.className = 'correcte';
  formulari.reset();
}
 
function mostrarAlumnes() {
  cosTaula.innerHTML = '';
 
  for (var i = 0; i < alumnes.length; i++) {
    var a = alumnes[i];
    var estat = a.notaFinal >= 5 ? 'Aprovat' : 'Suspès';
    var classe = a.notaFinal >= 5 ? 'aprovat' : 'suspes';
 
    cosTaula.innerHTML += '<tr>' +
      '<td>' + a.nom + '</td>' +
      '<td>' + a.examen.toFixed(2) + '</td>' +
      '<td>' + a.practiques.toFixed(2) + '</td>' +
      '<td>' + a.actitud.toFixed(2) + '</td>' +
      '<td>' + a.notaFinal.toFixed(2) + '</td>' +
      '<td class="' + classe + '">' + estat + '</td>' +
      '</tr>';
  }
}

function ordenarAlumnes(direccio) {
  alumnes.sort(function(a, b) {
    if (direccio === 'asc') return a.notaFinal - b.notaFinal;
    return b.notaFinal - a.notaFinal;
  });
  mostrarAlumnes();
}