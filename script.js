function calcular(tipo, valor){

   if(tipo === 'acao' ){

       if( valor === 'c' ){
           //limpar o visor de resultado
           document.getElementById('input').value= ""
        }

        if(valor ==='+' || valor==='-' || valor==='*'|| valor==='/' || valor==='.') {
            document.getElementById('input').value += valor
       } 
       
       if( valor === '=' ) {
            var valor_campo = eval(document.getElementById('input').value)

            document.getElementById('input').value = valor_campo

        }

     
    } else if(tipo === 'valor'){
        document.getElementById('input').value += valor
    }
}