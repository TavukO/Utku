document.getElementById("yesBtn").addEventListener("click", function() {
    alert("Instagram'da bizi takip etmeyi unutma!");
  });
  
  document.getElementById("noBtn").addEventListener("mouseover", function() {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    document.getElementById("noBtn").style.position = "absolute";
    document.getElementById("noBtn").style.left = x + "px";
    document.getElementById("noBtn").style.top = y + "px";
  });
  