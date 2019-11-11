describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "Ingrese texto para codificar" para "" con offset 33',()=>{
      assert.equal(cipher.encode(33,"" ),"Ingrese texto para codificar" );
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',()=>{
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ" ),"HIJKLMNOPQRSTUVWXYZABCDEFG" );
    });

    it('debería retornar "bcdefghijklmnopqrstuvwxyza" para "abcdefghijklmnopqrstuvwxyz" con offset 27',()=>{
      assert.equal(cipher.encode(27,"abcdefghijklmnopqrstuvwxyz" ),"bcdefghijklmnopqrstuvwxyza" );
    });

    it('debería retornar "1234567890" para "0123456789" con offset 11',()=>{
      assert.equal(cipher.encode(11,"0123456789" ),"1234567890" );
    });

  //Caractere ñ, Ñ, ' '
    it('debería retornar " " para " " con offset 27',()=>{
      assert.equal(cipher.encode(27," ")," ");
    });

    it('debería retornar "²" para "ñ" con offset 27',()=>{
        assert.equal(cipher.encode(27,"ñ" ),"²" );
    });

    it('debería retornar "±" para "Ñ" con offset 27',()=>{
      assert.equal(cipher.encode(27,"Ñ"),"±");
    });

    //Vocales mayúsculas con acento

    it('debería retornar "ý" para "Á" con offset 27',()=>{
        assert.equal(cipher.encode(27,"Á" ),"ý" );
    });

    it('debería retornar "þ" para "É" con offset 27',()=>{
      assert.equal(cipher.encode(27,"É"),"þ");
    });

    it('debería retornar "ÿ" para "Í" con offset 27',()=>{
        assert.equal(cipher.encode(27,"Í" ),"ÿ" );
    });

    it('debería retornar "Ā" para "Ó" con offset 27',()=>{
      assert.equal(cipher.encode(27,"Ó"),"Ā");
    });

    it('debería retornar "ā" para "Ú" con offset 27',()=>{
        assert.equal(cipher.encode(27,"Ú" ),"ā" );
    });

    //Vocales minúsculas con acento
    it('debería retornar "Ă" para "á" con offset 27',()=>{
      assert.equal(cipher.encode(27,"á" ),"Ă" );
  });

  it('debería retornar "ă" para "é" con offset 27',()=>{
    assert.equal(cipher.encode(27,"é"),"ă");
  });

  it('debería retornar "Ą" para "í" con offset 27',()=>{
      assert.equal(cipher.encode(27,"í" ),"Ą" );
  });

  it('debería retornar "ą" para "ó" con offset 27',()=>{
    assert.equal(cipher.encode(27,"ó"),"ą");
  });

  it('debería retornar "Ć" para "ú" con offset 27',()=>{
      assert.equal(cipher.encode(27,"ú" ),"Ć" );
  });

//Cualquier otro caracter
it('debería retornar "°!#$%&/()=?¡" para "°!#$%&/()=?¡" con offset 27',()=>{
  assert.equal(cipher.encode(27,"°!#$%&/()=?¡" ),"°!#$%&/()=?¡" );
});


   });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "Ingrese texto para decodificar" para "" con offset 33',()=>{
      assert.equal(cipher.decode(33,"" ),"Ingrese texto para decodificar" );
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',()=>{
    assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG" ),"ABCDEFGHIJKLMNOPQRSTUVWXYZ" );
    });


    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "bcdefghijklmnopqrstuvwxyza" con offset 27',()=>{
      assert.equal(cipher.decode(27,"bcdefghijklmnopqrstuvwxyza" ),"abcdefghijklmnopqrstuvwxyz" );
    });

    it('debería retornar "0123456789" para "1234567890" con offset 11',()=>{
      assert.equal(cipher.decode(11,"1234567890" ),"0123456789" );
    });
    
    it('debería retornar " " para " " con offset 27',()=>{
      assert.equal(cipher.decode(27," ")," ");
    });

    it('debería retornar "ñ" para "²" con offset 27',()=>{
        assert.equal(cipher.decode(27,"²" ),"ñ" );
    });

    it('debería retornar "Ñ" para "±" con offset 27',()=>{
      assert.equal(cipher.decode(27,"±"),"Ñ");
    });

    //Vocales mayúsculas con acento

    it('debería retornar "Á" para "ý" con offset 27',()=>{
        assert.equal(cipher.decode(27,"ý" ),"Á" );
    });

    it('debería retornar "É" para "þ" con offset 27',()=>{
      assert.equal(cipher.decode(27,"þ"),"É");
    });

    it('debería retornar "Í" para "ÿ" con offset 27',()=>{
        assert.equal(cipher.decode(27,"ÿ" ),"Í" );
    });

    it('debería retornar "Ó" para "Ā" con offset 27',()=>{
      assert.equal(cipher.decode(27,"Ā"),"Ó");
    });

    it('debería retornar "Ú" para "ā" con offset 27',()=>{
        assert.equal(cipher.decode(27,"ā" ),"Ú" );
    });

    //Vocales minúsculas con acento
    it('debería retornar "á" para "Ă" con offset 27',()=>{
      assert.equal(cipher.decode(27,"Ă" ),"á" );
  });

  it('debería retornar "é" para "ă" con offset 27',()=>{
    assert.equal(cipher.decode(27,"ă"),"é");
  });

  it('debería retornar "í" para "Ą" con offset 27',()=>{
      assert.equal(cipher.decode(27,"Ą" ),"í" );
  });

  it('debería retornar "ó" para "ą" con offset 27',()=>{
    assert.equal(cipher.decode(27,"ą"),"ó");
  });

  it('debería retornar "ú" para "Ć" con offset 27',()=>{
      assert.equal(cipher.decode(27,"Ć" ),"ú" );
  });

//Cualquier otro caracter
  it('debería retornar "°!#$%&/()=?¡" para "°!#$%&/()=?¡" con offset 27',()=>{
    assert.equal(cipher.decode(27,"°!#$%&/()=?¡" ),"°!#$%&/()=?¡" );
  });
  });
});
