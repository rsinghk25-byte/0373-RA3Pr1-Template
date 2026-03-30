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
}