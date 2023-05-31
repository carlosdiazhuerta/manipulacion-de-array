const letters = ["a","b","c"];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
   console.log(element) 
}

/// para reducir lineas de codigo

letters.forEach(item => console.log("forE", item));