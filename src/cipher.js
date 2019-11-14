window.cipher = {
  encode: (offset,string) => {
    let newText='';
    let newOffset=parseInt(offset);
      if((string)===''){ //valida cadena vacía
        return ('Ingrese texto para codificar');
      }
      else{
        for(let i=0; i<=(string.length-1); i++){ 

// TRANSFORMA VOCALES MAYÚSCULAS CON ACENTOS
          if((string.charCodeAt(i)===193)){ 
            newText += String.fromCharCode(253); //Codifica "Á"
          }
            else{
              if((string.charCodeAt(i)===201)){
                newText += String.fromCharCode(254);//Codifica "É"
              }
                else{
                  if((string.charCodeAt(i)===205)){
                    newText += String.fromCharCode(255);//Codifica "Í"
                  }
                    else{
                      if((string.charCodeAt(i)===211)){
                      newText += String.fromCharCode(256);//Codifica "Ó"
                      }
                        else{
                          if((string.charCodeAt(i)===218)){
                            newText += String.fromCharCode(257);//Codifica "Ú"
                          }
//TRANSFORMA CARACTERES A VOCALES MAYÚSCULAS CON ACENTOS
                          else{  
                              if((string.charCodeAt(i)===253)){ 
                                newText += String.fromCharCode(193); //Devuelve "Á"
                              }
                                else{
                                  if((string.charCodeAt(i)===254)){
                                    newText += String.fromCharCode(201);//Devuelve "É"
                                  }
                                    else{
                                      if((string.charCodeAt(i)===255)){
                                        newText += String.fromCharCode(205);//Devuelve "Í"
                                      }
                                        else{
                                          if((string.charCodeAt(i)===256)){ 
                                            newText += String.fromCharCode(211);//Devuelve "Ó"
                                          }
                                            else{
                                              if((string.charCodeAt(i)===257)){
                                                newText += String.fromCharCode(218);//Devuelve "Ú"
                                              } 
//TRANSFORMA VOCALES MINÚSCULAS CON ACENTOS
                                                else{
                                                  if((string.charCodeAt(i)===225)){
                                                    newText += String.fromCharCode(258);//Codifica "á"
                                                  }
                                                    else{
                                                      if((string.charCodeAt(i)===233)){
                                                        newText += String.fromCharCode(259);//Codifica "é"
                                                      }
                                                        else{
                                                          if((string.charCodeAt(i)===237)){
                                                            newText += String.fromCharCode(260);//Codifica "í"
                                                          }
                                                            else{
                                                              if((string.charCodeAt(i)===243)){
                                                                newText += String.fromCharCode(261);//Codifica "ó"
                                                              }
                                                                else{
                                                                  if((string.charCodeAt(i)===250)){
                                                                    newText += String.fromCharCode(262);//Codifica "ú"
                                                                  }
     
//TRANSFORMA CARACTERES A VOCALES MINÚSCULAS CON ACENTOS
     
                                                                else{
                                                                  if((string.charCodeAt(i)===258)){
                                                                    newText += String.fromCharCode(225);//Devuelve "á"
                                                                  }
                                                                    else{
                                                                      if((string.charCodeAt(i)===259)){
                                                                        newText += String.fromCharCode(233);//Devuelve "é"
                                                                      }
                                                                        else{
                                                                          if((string.charCodeAt(i)===260)){
                                                                            newText += String.fromCharCode(237);//Devuelve "í"
                                                                          }
                                                                            else{
                                                                              if((string.charCodeAt(i)===261)){
                                                                                newText += String.fromCharCode(243);//Devuelve "ó"
                                                                              }
                                                                                else{
                                                                                  if((string.charCodeAt(i)===262)){
                                                                                    newText += String.fromCharCode(250);//Devuelve "ú"
                                                                                  }
     
//TRANSFORMA CARACTERES" ",ñ,,Ñ A ¹,²,± RESPECTIVAMENTE  
                                                                                    else{
                                                                                      if((string.charCodeAt(i)===209)){
                                                                                        newText += String.fromCharCode(177);//Codifica "ñ"
                                                                                      }
                                                                                        else{
                                                                                          if(string.charCodeAt(i)===241){
                                                                                            newText += String.fromCharCode(178);//Codifica "Ñ"
                                                                                          }
                                                                                            else{
                                                                                              if(string.charCodeAt(i)===32){
                                                                                                newText += String.fromCharCode(185);//Codifica " " como "¹"
                                                                                              }
 //TRANSFORMA CARACTERES ¹,²,± A " ", ñ, Ñ RESPECTIVAMENTE   
     
                                                                                                else{
                                                                                                  if(string.charCodeAt(i)===177){ 
                                                                                                    newText += String.fromCharCode(209);//Regresa una 'Ñ' si es un ±
                                                                                                  }     
                                                                                                    else{
                                                                                                      if(string.charCodeAt(i)===178){ 
                                                                                                        newText += String.fromCharCode(241);//Regresa una 'ñ' si es un ²
                                                                                                      }    
                                                                                                        else{
                                                                                                          if(string.charCodeAt(i)===185){ 
                                                                                                            newText += String.fromCharCode(32);//Devuelve " " para  "¹"
                                                                                                          }
                                      
//OFFSET POSITIVO                                
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
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
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
