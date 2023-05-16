# atividade-dupla
Fernanda Viana e Isabella Correia

    HTML
    1 - Criei a tag "<canvas>", nela definimos a cor, altura, largura e a posição em que o canvas iria ficar.
    2 - Criei a tag "<context>". Que mais tarde será usado para definir o tipo de renderização do meu site(("2d")).
    3 - Linkamos o HTML com o arquivo "script.js" para começar a desenvolver o canvas.

        JAVASCRIPT
        1  - Criamos as variáveis para o canvas e para o context.
        2  - Começamos a criar os elementos do meu site:
            
            2.1 - Retângulo: 
            Usando o "ctx.fillStyle = "red";" definimos a cor do preenchimento da forma;
            Usando o "ctx.fillRect(300,50,150,100);" e o "ctx.strokeRect(300,50,150,100);" definimos o tamanho e a posição do preenchimento e do contorno da forma; 

            2.2 - Triângulo:
            Usando o "ctx.fillStyle = "blue";" definimos a cor do preenchimento; 
            Usando o "ctx.beginPath();" reiniciamos o caminho do desenho;
            Usando o " ctx.moveTo(120,15);" definimos a posição da forma dentro do canva; 
            Usando o " ctx.lineTo()" definimos o tamanho de ambos o lados do triângulo; 
            Usamos o "ctx.fill();" e o "ctx.stroke();" para contornar e preencher; 

            2.3 - Círculo: 
            Usando o "ctx.fillStyle = "yellow";" definimos a cor do preenchimento;
            Usando o "ctx.beginPath();" reiniciamos o caminho do desenho;
            Usando o " ctx.arc(605,95,75,0,2 * Math.PI);" desenhamos o círculo, definindo a posição, o tamanho e o raio; 
            Usando o " ctx.moveTo(120,15);" definimos a posição da forma dentro do canva; 
            Usamos o "ctx.fill();" e o "ctx.stroke();" para contornar e preencher; 

            2.4 - Linha: 
            Usando o " ctx.moveTo(120,15);" definimos a posição do começo da linha dentro do canva; 
            Usando o "lineTo();" defini o começo e o fim do traço que divide as formas da imagem do gato;
            Usando o "ctx.stroke();" para a linha aparecer no canvas.

            2.5 - Imagem:
            Usando o "ctx.drawImage(img, 0, 300);" definimos a posição da imagem;
            Usando o "img.src = 'img/cat.jpg';" inserimos a imagem desejada. 

                CSS
                1 - "Usei o background-color: gainsboro;" para definir a cor de fundo do meu site. 
   
            




![Captura de tela 2023-05-16 195134](https://github.com/Fernanda-Marcelino/atividade-dupla/assets/128320607/ee5b2af7-0dac-41d2-bdaa-f4260d8aed78)
