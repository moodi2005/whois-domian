const check = require('./check');

// check("khorshidsharg")

const abc = [1,2,3,4,5,6,7,8,9,0,"q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
let word = []

for(let i = 0;i<abc.length; i++){
  for(let m = 0;m<abc.length; m++){
    for(let x = 0;x<abc.length; x++){
     check(`${abc[i]}${abc[m]}${abc[x]}`);
    }
  }
};