const isEven = num => {
    if (num % 2 === 0){
      return 'even';
    }else{
      return 'not even';
    }
}
console.log(isEven(8));