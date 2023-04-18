export default function copyText(result){
  const btnCopy = document.querySelector('#btnCopy')
  
  btnCopy.addEventListener('click', function (event) {
    event.preventDefault();
    btnCopy.ariaLabel = 'Copiado';
    navigator.clipboard.writeText(result);
  });

}