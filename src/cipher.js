window.cipher = {
  encode: (offset,string) => {

    let initialString=[];
    let finalString='';

if((string)===''){ //valida cadena vacía
    return ('Ingrese texto para codificar');
  }
else{
  for(let i=0; i<=(string.length-1); i++){ 
    if((string.charCodeAt(i)>=65)&&(string.charCodeAt(i)<=90)){ //Cifrado abecedario simple mayúscula
       initialString[i]=String(String.fromCharCode((string.charCodeAt(i)+offset-65)%26 + 65));
          }
          else{
            if((string.charCodeAt(i)>=97)&&(string.charCodeAt(i)<=122)){ //Cifrado abecedario simple minúscula
                initialString[i]=String(String.fromCharCode((string.charCodeAt(i)+offset-97)%26 + 97));
            }
            else{
              if((string.charCodeAt(i)>=48)&&(string.charCodeAt(i)<=57)){ //Cifrado números
                  initialString[i]=String(String.fromCharCode((string.charCodeAt(i)+offset-48)%10+48));
              }

        
 // Vocales mayúsculas  con acentos 
 else{
  if((string.charCodeAt(i)===193)){ 
      initialString[i]=String(String.fromCharCode(253)); //Codifica "Á"
 }
 else{
  if((string.charCodeAt(i)===201)){
      initialString[i]=String(String.fromCharCode(254));//Codifica "É"
 }
 else{
  if((string.charCodeAt(i)===205)){
      initialString[i]=String(String.fromCharCode(255));//Codifica "Í"
 }
 else{
  if((string.charCodeAt(i)===211)){
      initialString[i]=String(String.fromCharCode(256));//Codifica "Ó"
 }
 else{
  if((string.charCodeAt(i)===218)){
      initialString[i]=String(String.fromCharCode(257));//Codifica "Ú"
 }


//Vocales minúsculas con acentos 

else{
  if((string.charCodeAt(i)===225)){
      initialString[i]=String(String.fromCharCode(258));//Codifica "á"
 }
 else{
  if((string.charCodeAt(i)===233)){
      initialString[i]=String(String.fromCharCode(259));//Codifica "é"
 }
 else{
  if((string.charCodeAt(i)===237)){
      initialString[i]=String(String.fromCharCode(260));//Codifica "í"
 }
 else{
  if((string.charCodeAt(i)===243)){
      initialString[i]=String(String.fromCharCode(261));//Codifica "ó"
 }
 else{
  if((string.charCodeAt(i)===250)){
      initialString[i]=String(String.fromCharCode(262));//Codifica "ú"
 }

                    

              //'ñ' 'Ñ' ' '
              else{
                if((string.charCodeAt(i)===209)){
                    initialString[i]=String(String.fromCharCode(177));//Codifica "ñ"
               }

               else{
                if(string.charCodeAt(i)===241){
                    initialString[i]=String(String.fromCharCode(178));//Codifica "Ñ"
               }
               else{
                if(string.charCodeAt(i)===32){
                    initialString[i]=String(String.fromCharCode(32));//Codifica " " como " "
               }
          
              else{
              initialString[i]=string.charAt(i);
              }
              }}}}}
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

finalString= initialString.join('');
return finalString;
    }
 
  },
  decode: (offset,string) => {
 
    let initialString=[];
    let finalString='';


if((string)===''){
  return ('Ingrese texto para decodificar');
}
  else{
   
    for( let i=0; i<=(string.length-1); i++){
      if((string.charCodeAt(i)>=65)&&(string.charCodeAt(i)<=90)){//Descifrado abecedario simple mayúscula
         initialString[i]=String(String.fromCharCode((string.charCodeAt(i)-offset-90)%26 + 90));
       }
       else{
           if((string.charCodeAt(i)>=97)&&(string.charCodeAt(i)<=122)){//Descifrado abecedario simple minúscula
               initialString[i]=String(String.fromCharCode((string.charCodeAt(i)-offset-122)%26 + 122));
           }
           else{
            if((string.charCodeAt(i)>=48)&&(string.charCodeAt(i)<=57)){//Descifrado números
              initialString[i]=String(String.fromCharCode((string.charCodeAt(i)-offset-57)%10 + 57));
            }     

            
 //Decodifica entregando vocales mayúsculas  con acentos 
 else{
  if((string.charCodeAt(i)===253)){ 
      initialString[i]=String(String.fromCharCode(193)); //Devuelve "Á"
 }
 else{
  if((string.charCodeAt(i)===254)){
      initialString[i]=String(String.fromCharCode(201));//Devuelve "É"
 }
 else{
  if((string.charCodeAt(i)===255)){
      initialString[i]=String(String.fromCharCode(205));//Devuelve "Í"
 }
 else{
  if((string.charCodeAt(i)===256)){ 
      initialString[i]=String(String.fromCharCode(211));//Devuelve "Ó"
 }
 else{
  if((string.charCodeAt(i)===257)){
      initialString[i]=String(String.fromCharCode(218));//Devuelve "Ú"
 }


//Decodifica entregando vocales minúsculas con acentos 

else{
  if((string.charCodeAt(i)===258)){
      initialString[i]=String(String.fromCharCode(225));//Devuelve "á"
 }
 else{
  if((string.charCodeAt(i)===259)){
      initialString[i]=String(String.fromCharCode(233));//Devuelve "é"
 }
 else{
  if((string.charCodeAt(i)===260)){
      initialString[i]=String(String.fromCharCode(237));//Devuelve "í"
 }
 else{
  if((string.charCodeAt(i)===261)){
      initialString[i]=String(String.fromCharCode(243));//Devuelve "ó"
 }
 else{
  if((string.charCodeAt(i)===262)){
      initialString[i]=String(String.fromCharCode(250));//Devuelve "ú"
 }

 
            else{
              if(string.charCodeAt(i)===177){ 
                  initialString[i]=String(String.fromCharCode(209));//Regresa una 'ñ' si es un ±
             }     

             else{
              if(string.charCodeAt(i)===178){ 
                  initialString[i]=String(String.fromCharCode(241));//Regresa una 'Ñ' si es un ²
             }    
             else{
              if(string.charCodeAt(i)===32){ 
                  initialString[i]=String(String.fromCharCode(32));//Devuelve " " para  " "
             }
           else{
            initialString[i]=string.charAt(i);
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
    finalString= initialString.join('');
    return finalString;
  
     }
   }  
};
