export default function decryptText(){
  const btnDecrypt = document.querySelector('#decrypt')
  const textArea = document.querySelector('#text')
  const textResult = document.querySelector('#textResult')

  btnDecrypt.addEventListener('click', ()=>{
    const textvalue = textArea.value;
    
    if(textvalue != ""){
      const textEncrypt = textvalue.replace(/enter/gi, 'e').replace(/imes/gi,"i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u")
      textResult.innerHTML = `<p class="result">${textEncrypt}</p>`
    }else{
      textResult.innerHTML = "<h3>Você deve digitar um texto antes.</h3>" 
    }

  })

}