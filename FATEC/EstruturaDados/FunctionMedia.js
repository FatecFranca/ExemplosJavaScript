
const num1 = [1,3,2,4,6,-6,-4]
// media
// num1.forEach(function(numeros){
//   console.log(numeros+=numeros )
function media(vet) {
  var tot = 0
  var media = 0
  for (let i = 0; i < vet.length; i++) {
    tot = tot + vet[i]
  }
  var media = tot / vet.length
  return media
}
console.log('media = ' + media(num1))

//maior
function maior(vet) {
  var m = 0
  for (let i = 0; i < vet.length; i++) {
    if (vet[i]>m){ 
      m = vet[i]
    }   }
    return m
  }
  console.log('maior = ' + maior(num1))
  
  function parimp(vet) {
    var par = []
    var impar = []
    for (let i = 0; i < vet.length; i++) {
      if (vet[i]%2 ==0){
        par.push(vet[i])
      } 
      if (vet[i]%2 == 1){
        impar.push(vet[i])
      }
    }
    console.log('par = ' + par + ' | impar = ' + impar)
  }
  parimp(num1)
  
  function posit(vet){
    var positivos = []
    for (let i = 0; i < vet.length; i++) {
      if (vet[i]>0){
        positivos.push(vet[i])
      } 
    }
    console.log(positivos)
  }
  posit(num1)
  
    
    