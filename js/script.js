//Click the button to change the text
function textChange(){
    document.getElementById('t_c').innerHTML="Hello Sraboni";
}

//To show the date and time
function showDate(){
    document.getElementById('t_d').innerHTML= Date();
        }

        //bulb on off
        function bulbOn(){
            document.getElementById('b_img').src="img/lightOn.jpg";
        }
        function bulbOff(){
            document.getElementById('b_img').src="img/lightOff.jpg"
        }

  //To color Change
  function colorChange(){
    document.getElementById('t_color').style.color="red";
  }      

        