  var qrcode = new QRCode(document.getElementById("qrcode"), {
      width : 150,
      height : 150,
 
  });
  function makeCode () {		
      var elText = "welcome random";
	  qrcode.makeCode(elText);
      	
  }
  $("#active").
      on("click", function () {
    
	makeCode();
   });
