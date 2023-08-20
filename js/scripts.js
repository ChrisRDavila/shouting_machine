function explain() {
  window.alert("did this work the way you wanted it to?");
  document.querySelector("form").removeEventListener("submit", explain);
}
window.addEventListener("load", function() {
  let form = document.querySelector("form");
  let reset = document.querySelector("button#reset");
  let shout = document.querySelector("div#shout");

  form.addEventListener("submit", function(event) {
  
    
    const sentenceInput = document.getElementById("sentenceInput").value;
    
    document.querySelector("#sentenceOutput").innerText = sentenceInput.toUpperCase().concat("!!!");
    function increaseFont() {
      let increase = document.querySelector("#sentenceOutput").style.fontSize.vlaue
      document.querySelector("#sentenceOutput").style.fontSize = 20 + "px";
      numInc = parseInt(increase);
      return numInc;
      
    };
    shout.removeAttribute("class");
    event.preventDefault();
    return increaseFont();
  });

  form.addEventListener("submit", function() {
    reset.removeAttribute("class");
  });

  form.addEventListener("submit", explain );
  
  reset.addEventListener("click", function() {
    shout.setAttribute("class", "hidden");
    document.querySelector("#sentenceInput").value = null;
  });
});  


