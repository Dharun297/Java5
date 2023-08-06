// Remove all vowels from a string and return the modified string
let mname = "DHARUN";
function removeVowels() {
    return mname.replace(/[AEIOU]/gi,'');
  }
  const result = removeVowels();
  console.log(result);