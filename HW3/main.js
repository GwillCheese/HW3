origArray = [2,3,4];

  var txt1 = document.getElementById("txt1");

  var txt2 = document.getElementById("txt2");

  var txt3 = document.getElementById("txt3");



  document.addEventListener("DOMContentLoaded", function() {

  

    txt1.value = origArray[0];

    txt2.value = origArray[1];

    txt3.value = origArray[2];


    document.getElementById("btn2").addEventListener("click", function(){

      var newArray = origArray.map(x => x*x*x*x);

      txt1.value = newArray[0];

      txt2.value = newArray[1];

      txt3.value = newArray[2];

    });



    document.getElementById("btn3").addEventListener("click", myFunction);

  });



  // Define a function called by the first button 

  function onClickFunction() {

    var newArray = origArray.map(x => x*x);

    txt1.value = newArray[0];

    txt2.value = newArray[1];

    txt3.value = newArray[2];

  }



  // Define a function called by the 3rd button

  function myFunction() {

    var newArray = origArray.map(x => x*x*x*x*x);

    txt1.value = newArray[0];

    txt2.value = newArray[1];

    txt3.value = newArray[2];

  }
