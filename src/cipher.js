window.cipher = {
  encode: (offset,string) => {

    let a=[];
    let b='';

if((string)===''){ //valida cadena vacía
    return ('Ingrese texto para codificar');
  }
else{
  for(let i=0; i<=(string.length-1); i++){ 
    if((string.charCodeAt(i)>=65)&&(string.charCodeAt(i)<=90)){ //Cifrado abecedario simple mayúscula
       a[i]=String(String.fromCharCode((string.charCodeAt(i)+offset-65)%26 + 65));
          }
          else{
            if((string.charCodeAt(i)>=97)&&(string.charCodeAt(i)<=122)){ //Cifrado abecedario simple minúscula
                a[i]=String(String.fromCharCode((string.charCodeAt(i)+offset-97)%26 + 97));
            }
            else{
              if((string.charCodeAt(i)>=48)&&(string.charCodeAt(i)<=57)){ //Cifrado números
                  a[i]=String(String.fromCharCode((string.charCodeAt(i)+offset-48)%10+48));
              }

        
 // Vocales mayúsculas  con acentos 
 else{
  if((string.charCodeAt(i)===193)){
      a[i]=String(String.fromCharCode(253));
 }
 else{
  if((string.charCodeAt(i)===201)){
      a[i]=String(String.fromCharCode(254));
 }
 else{
  if((string.charCodeAt(i)===205)){
      a[i]=String(String.fromCharCode(255));
 }
 else{
  if((string.charCodeAt(i)===211)){
      a[i]=String(String.fromCharCode(256));
 }
 else{
  if((string.charCodeAt(i)===218)){
      a[i]=String(String.fromCharCode(257));
 }


//Vocales minúsculas con acentos 

else{
  if((string.charCodeAt(i)===225)){
      a[i]=String(String.fromCharCode(258));
 }
 else{
  if((string.charCodeAt(i)===233)){
      a[i]=String(String.fromCharCode(259));
 }
 else{
  if((string.charCodeAt(i)===237)){
      a[i]=String(String.fromCharCode(260));
 }
 else{
  if((string.charCodeAt(i)===243)){
      a[i]=String(String.fromCharCode(261));
 }
 else{
  if((string.charCodeAt(i)===250)){
      a[i]=String(String.fromCharCode(262));
 }

                    

              //'ñ' 'Ñ' ' '
              else{
                if((string.charCodeAt(i)===209)){
                    a[i]=String(String.fromCharCode(177));
               }

               else{
                if(string.charCodeAt(i)===241){
                    a[i]=String(String.fromCharCode(178));
               }
               else{
                if(string.charCodeAt(i)===32){
                    a[i]=String(String.fromCharCode(32));
               }
          
              else{
              a[i]=string.charAt(i);
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

b= a.join('');
return b;
    }
 
  },
  decode: (offset,string) => {
 
    let a=[];
    let b='';


if((string)===''){
  return ('Ingrese texto para decodificar');
}
  else{
   
    for( let i=0; i<=(string.length-1); i++){
      if((string.charCodeAt(i)>=65)&&(string.charCodeAt(i)<=90)){//Descifrado abecedario simple mayúscula
         a[i]=String(String.fromCharCode((string.charCodeAt(i)-offset-90)%26 + 90));
       }
       else{
           if((string.charCodeAt(i)>=97)&&(string.charCodeAt(i)<=122)){//Descifrado abecedario simple minúscula
               a[i]=String(String.fromCharCode((string.charCodeAt(i)-offset-122)%26 + 122));
           }
           else{
            if((string.charCodeAt(i)>=48)&&(string.charCodeAt(i)<=57)){
              a[i]=String(String.fromCharCode((string.charCodeAt(i)-offset-57)%10 + 57));
            }     

            
 //Decodifica entregando vocales mayúsculas  con acentos 
 else{
  if((string.charCodeAt(i)===253)){
      a[i]=String(String.fromCharCode(193));
 }
 else{
  if((string.charCodeAt(i)===254)){
      a[i]=String(String.fromCharCode(201));
 }
 else{
  if((string.charCodeAt(i)===255)){
      a[i]=String(String.fromCharCode(205));
 }
 else{
  if((string.charCodeAt(i)===256)){
      a[i]=String(String.fromCharCode(211));
 }
 else{
  if((string.charCodeAt(i)===257)){
      a[i]=String(String.fromCharCode(218));
 }


//Decodifica entregando vocales minúsculas con acentos 

else{
  if((string.charCodeAt(i)===258)){
      a[i]=String(String.fromCharCode(225));
 }
 else{
  if((string.charCodeAt(i)===259)){
      a[i]=String(String.fromCharCode(233));
 }
 else{
  if((string.charCodeAt(i)===260)){
      a[i]=String(String.fromCharCode(237));
 }
 else{
  if((string.charCodeAt(i)===261)){
      a[i]=String(String.fromCharCode(243));
 }
 else{
  if((string.charCodeAt(i)===262)){
      a[i]=String(String.fromCharCode(250));
 }

 
            else{
              if(string.charCodeAt(i)===177){ 
                  a[i]=String(String.fromCharCode(209));//Regresa una 'ñ' si es un ±
             }     

             else{
              if(string.charCodeAt(i)===178){ 
                  a[i]=String(String.fromCharCode(241));//Regresa una 'Ñ' si es un ²
             }    
             else{
              if(string.charCodeAt(i)===32){ 
                  a[i]=String(String.fromCharCode(32));
             }
           else{
            a[i]=string.charAt(i);
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
}
    b= a.join('');
    return b;
  
     }
   }  
};
