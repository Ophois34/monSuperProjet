/********************************
*								*
* Script JS de la page d'Index	*
* Sert à dire bonjour			*
*								*
* Développé par B. TAVERNIER	*
* Le 04 Octobre 2016			*
* Copyright Le Pole S 			*
*								*
********************************/
alert('Hello World!');
/*alert('test'); */
$(document).ready(function()
{
  $('#pomme').hover(function(){
  	this.src = "images/Pomme.jpg";
  }, function(){
  	this.src = "images/pomme-rouge.jpg";
  });	
});