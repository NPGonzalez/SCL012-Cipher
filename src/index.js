// DEFINICIONES DE FUNCIONES
//**********************************

//Función para limpiar 
function clear(){
    document.getElementById('message').value='';
    document.getElementById('offset').value='';
    document.getElementById('resultados').value='';
  }
    
//**********************************
    //Función para llamar función de decodificado
  
    function codificar(){
      let resultados   = document.getElementById("resultados");
      let messageInput = document.getElementById("message").value;
      let offsetEncode = parseInt(document.getElementById("offset").value);
          if(offsetEncode>=0){
          resultados.innerHTML = cipher.encode(Math.abs(offsetEncode),messageInput);
          }else{
              if(offsetEncode<0){
              resultados.innerHTML = cipher.decode(Math.abs(offsetEncode),messageInput);
              }
          }
  }
  
    
//**********************************
//Función para llamar función de decodificado
    
    function decodificar(){
        let resultados = document.getElementById("resultados");
        let messageInput = document.getElementById("message").value;
        let offsetEncode = parseInt(document.getElementById("offset").value);
                    
        if(offsetEncode>=0){
            resultados.innerHTML = cipher.decode(Math.abs(offsetEncode),messageInput);
            }else{
                if(offsetEncode<0){
                resultados.innerHTML = cipher.encode(Math.abs(offsetEncode),messageInput);
                }
            }
        }



     
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
                link.href = makeTextFile(textbox.value+' '+offsetcode.value);
                link.style.display = 'block';
              }, false);
            })();

            

            document.getElementById("buttonClear").addEventListener("click",clear);
            document.getElementById("buttonEncode").addEventListener("click",codificar);
            document.getElementById("buttonDecode").addEventListener("click",decodificar);
        