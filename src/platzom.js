

const reverse = (str) => str.split('').reverse().join('')

const minMay = (str) => {

  const largo = str.length
  let newTranslation = ''
  let capitalize = true

  for (var i = 0 - 1; i < largo; i++) {
    const char = str.charAt(i)
    newTranslation += capitalize ? char.toUpperCase() : char.toLowerCase()
    capitalize = !capitalize
  }

  return newTranslation

}

export default function platzom(str) {

  let translation = str

  if(translation == reverse(translation)){
    return minMay(translation)
  }
   if(str.toLowerCase().endsWith("ar")){
    translation = str.slice(0, -2);
   }
   if(str.toLowerCase().startsWith("z")){
    translation += "pe"
   }
   const largo = translation.length
   if(largo >= 10){
    const firstHalf = translation.slice(0, largo/2)
    const secondHalf = translation.slice(largo/2)
    translation = `${firstHalf}-${secondHalf}`
   }
  return translation
}