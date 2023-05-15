var canvas = document.getElementById ('canvas1');
var ctx = canvas.getContext ('2d');
    
    
    //Retângulo
    ctx.fillStyle = "red";
    ctx.fillRect (300,50,150,100);
    ctx.strokeRect (300, 50, 150, 100);

    //Triângulo
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(120,15);
    ctx.lineTo(55,150);
    ctx.lineTo(185,150);
    ctx.fill(); 
    
    