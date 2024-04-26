

function verifieFormulaire () {
  document.getElementById('Formulaire').addEventListener('submit', function (event) {
    event.preventDefault();
    
  })
let nomcomplet=document.getElementById('nomcomplet').value;
let email=document.getElementById('email').value;
let objet=document.getElementById('objet').value;
let message=document.getElementById('message').value; 


if (nomcomplet === '' || email === '' || objet === '' || message === '') {
    alert('Veuillez remplir l\'ensemble des champs.');
   }
else{
    console.log('Nom complet : ' + nomcomplet);
    console.log('Adresse e-mail : ' + email);
    console.log('Objet du message : ' + objet);
    console.log('Message : ' + message); 

    
}   


}
