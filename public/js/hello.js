function required(inputtx){
    var a = document.forms["Form"]["value"].value;
  
   if ((a == null || a == "")) {
   alert("Please Fill In All Required Fields");
   return false;
   }
   return true;  
   } 