var canvas = document.getElementById ('canvas1');
var ctx = canvas.getContext ('2d');
    
    
    //Retângulo
    ctx.fillStyle = "red";
    ctx.fillRect(300,50,150,100);
    ctx.strokeRect(300, 50, 150, 100);

    //Triângulo
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(120,15);
    ctx.lineTo(55,150);
    ctx.lineTo(185,150);
    ctx.fill(); 
    ctx.stroke();

    //Círculo
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(605,95,75,0,2 * Math.PI);
    ctx.moveTo(110,75);
    ctx.fill()
    ctx.stroke();
    
   //Linha
   ctx.moveTo(0,0);
   ctx.lineTo(0,300)
   ctx.lineTo(1500,300);
   ctx.stroke();

   //Imagem 
   let img = document.querySelector('img');
    ctx.drawImage(img,50,10);