
 const form = document.getElementById('form-numeros');
 const numeroA = document.getElementById('numero-a');
 const numeroB = document.getElementById('numero-b');
 const message = document.getElementById('message');

 form.addEventListener('submit', function(event) {
     event.preventDefault();
     const valorA = parseFloat(numeroA.value);
     const valorB = parseFloat(numeroB.value); 

   
     if (valorB > valorA) {
         message.textContent = "Parabéns! O número B é maior que o número A!";
         message.style.color = 'green'; 
     } else {
         message.textContent = "Oops! O número B não é maior que o número A. Tente novamente.";
         message.style.color = 'red'; 
     }
 });