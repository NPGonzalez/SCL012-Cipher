//*********************************          
// Llamado de función codificado         
document.getElementById("buttonEncode").addEventListener("click", function (){
     let resultados   = document.getElementById("resultados");
     resultados.innerHTML = cipher.encode(document.getElementById('offset').value,document.getElementById('message').value);   
  }); 

//*********************************      
// Llamado de función de decodificado  
  document.getElementById("buttonDecode").addEventListener("click", function(){
      let resultados = document.getElementById("resultados");
      resultados.innerHTML = cipher.decode(document.getElementById('offset').value,document.getElementById('message').value);
}); 

//*********************************      
// Llamado función de limpieza de áreas de texto
document.getElementById("buttonClear").addEventListener("click",function clear(){
  document.getElementById('message').value='';
  document.getElementById('offset').value='';
  document.getElementById('resultados').value='';
}); 

  
//*********************************
//Función para guardar mensaje en archivo de texto
      (function () {
          var textFile = null,
            makeTextFile = function (text) {
              var data = new Blob([text], {type: 'text/plain'});
          

              if (textFile !== null) {
                window.URL.revokeObjectURL(textFile);
              }
          
              textFile = window.URL.createObjectURL(data);
          
              return textFile;
            };
          
          
            var create = document.getElementById('buttonSave'),
              textbox = document.getElementById('resultados'),
              offsetcode= document.getElementById('offset');
              

              create.addEventListener('click', function () {
              var link = document.getElementById('downloadlink');
              link.href = makeTextFile(textbox.value+' '+ offsetcode.value);
              link.style.display = 'block';
            }, false);
          })();

