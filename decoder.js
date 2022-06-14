function decoder(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let cipher = +string[0];
    let decoded = [];
    
    for(let i = 1; i < string.length; i++){
      for(let j = 0; j < alphabet.length; j++){
        if(string[i] === alphabet[j]){
          decoded.push(alphabet[j + cipher])
        }
      }
    }
    
    return decoded.join('');
  }