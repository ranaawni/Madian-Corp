function crack() {
  var pass = document.getElementById("passInput").value;
  //    we want to take tha pass from the input box then crack it by split it and take each letter or index from this pass with all alphabets
  //         one by one then return the cracking and we need to compare then stop when it matches

  var alpha = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOIPASDFGHJKLZXCVBNM";
  var crack = "";
  var char;
  while (crack != pass) {
    for (var i = 0; i < alpha.length; i++) {
      char = alpha.charAt(i);
      if (char === pass.charAt(crack.length)) {
        crack = crack + char;
        console.log(crack);
        break;
      }
    }
  }
  document.getElementById("crackPass").innerHTML = crack;
}
