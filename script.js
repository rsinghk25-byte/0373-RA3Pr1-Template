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
}