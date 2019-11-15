window.cipher = {
    encode: (offset,string) => {
      let newText='';
      let newOffset=parseInt(offset);
        if((string)===''){ //valida cadena vacía
          return ('Ingrese texto para codificar');
        }
        else{
          for(let i=0; i<=(string.length-1); i++){ 
  
          if ((string.charCodeAt(i)===193) || (string.charCodeAt(i)===201) || (string.charCodeAt(i)===203) || (string.charCodeAt(i)===214) || (string.charCodeAt(i)===220) ||
          (string.charCodeAt(i)===225) || (string.charCodeAt(i)===233) || (string.charCodeAt(i)===237) || (string.charCodeAt(i)===243) ||(string.charCodeAt(i)===250)||
           (string.charCodeAt(i)===209)||(string.charCodeAt(i)===241)){
               newText += String.fromCharCode(string.charCodeAt(i)+62) ;
          }
          else{
              if((string.charCodeAt(i)===255) || (string.charCodeAt(i)===263) || (string.charCodeAt(i)===265) || (string.charCodeAt(i)===276) || (string.charCodeAt(i)===282) ||
              (string.charCodeAt(i)===287) || (string.charCodeAt(i)===295) || (string.charCodeAt(i)===299) || (string.charCodeAt(i)===305) ||(string.charCodeAt(i)===312) ||
              (string.charCodeAt(i)===271)||(string.charCodeAt(i)===303)){
                     newText += String.fromCharCode(string.charCodeAt(i)-62) ;
              }
       
  
  //TRANSFORMA CARACTERES" ",ñ,,Ñ A ¹,²,± RESPECTIVAMENTE  
  
              else{
                if(string.charCodeAt(i)===32){
                newText += String.fromCharCode(185);//Codifica " " como "¹"
              }
  //TRANSFORMA CARACTERES ¹,²,± A " ", ñ, Ñ RESPECTIVAMENTE   
  
     
                        else{
                          if(string.charCodeAt(i)===185){ 
                            newText += String.fromCharCode(32);//Devuelve " " para  "¹"
                          }
  
  
  
  
              //TRANSFORMA ABECEDARIO SIMPLE MAYÚSCULAS                                     
                                                                                                            else{                              
                                                                                                             if (newOffset>=0){
                                                                                                                if((string.charCodeAt(i)>=65)&&(string.charCodeAt(i)<=90)){ //Modifica abecedario simple mayúscula
                                                                                                                  newText += String.fromCharCode((string.charCodeAt(i)+newOffset-65)%26 + 65);
                                                                                                                }
  //TRANSFORMA ABECEDARIO SIMPLE MINÚSCULAS                                                                                                              
                                                                                                                  else{
                                                                                                                    if((string.charCodeAt(i)>=97)&&(string.charCodeAt(i)<=122)){ //Modifica abecedario simple minúscula
                                                                                                                      newText +=String.fromCharCode((string.charCodeAt(i)+newOffset-97)%26 + 97);
                                                                                                                    }
  //TRANSFORMA DÍGITOS 0 AL 9                                                                                                                  
                                                                                                                      else{
                                                                                                                        if((string.charCodeAt(i)>=48)&&(string.charCodeAt(i)<=57)){ //Modifica números
                                                                                                                          newText += (String.fromCharCode((string.charCodeAt(i)+newOffset-48)%10+48));
                                                                                                                        }
  //MANTIENE CUALQUIER OTRO CARACTER DISTINTO DE LOS TRANSFORMADOS EN LOS CASOS ANTERIORES                                                                                                                
                                                                                                                          else{
                                                                                                                            newText +=string.charAt(i);
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                      }
  //OFFSET NEGATIVO                
  //ABECEDARIO SIMPLE MAYÚSCULAS                
                                                                                                               else{
                                                                                                                if((string.charCodeAt(i)>=65)&&(string.charCodeAt(i)<=90)){//Modifica abecedario simple mayúscula
                                                                                                                  newText += String.fromCharCode((string.charCodeAt(i) - Math.abs(newOffset)-90)%26 + 90);
                                                                                                                }
  //ABECEDARIO SIMPLE MINÚSCULAS
                                                                                                                else{
                                                                                                                    if((string.charCodeAt(i)>=97)&&(string.charCodeAt(i)<=122)){//modifica abecedario simple minúscula
                                                                                                                      newText += String.fromCharCode((string.charCodeAt(i)-Math.abs(newOffset)-122)%26 + 122);
                                                                                                                    }
  //DÍGITOS 0 AL 9                              
                                                                                                                    else{
                                                                                                                        if((string.charCodeAt(i)>=48)&&(string.charCodeAt(i)<=57)){//Modifica números
                                                                                                                          newText += String.fromCharCode((string.charCodeAt(i)-Math.abs(newOffset)-57)%10 + 57);
                                                                                                                        }  
  //MANTIENE CUALQUIER OTRO CARACTER DISTINTO DE LOS TRANSFORMADOS EN LOS CASOS ANTERIORES
                                                                                                                        else{
                                                                                                                            newText +=string.charAt(i);
                                                                                                                              }   
                                                                                                                            }
                                                                                                                          }
                                                                                                             }}} }}}
                                                                                                                      
                                                                                                                  
                                                                                                              
                                                                                                          
                                                                                                                
                                                                                                              
                                                                                                            
                                                                                                          
                                                                                                        
                                                                                                      
                                                                                                    
                                                                                                  
                                                                                                
                                                                                              
                                                                                            
                                                                                          
                                                                                        
                                                                                      
                                                                                    
                                                                                  
                                                                                                                                                            
                                                                            
                                                                          
                                                                        
                                                                      
                                                                  
                                                                  
      return newText;
    
    
    }                   
                   
    },
    decode: (offset,string) => {
      let newOffset=parseInt(offset);
      if((string)===''){ //valida cadena vacía
        return ('Ingrese texto para decodificar');
      }
  
      else{
        let changeOffsetSign= -newOffset;
        return cipher.encode(changeOffsetSign,string);
       
    }
  }
  };
  