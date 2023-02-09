function fibonacci (num){
    if (num == 1) return [0]
    if (num == 2) return [0,1]
    let array = [0,1]
    for (i=2; i<num ; i++){
        array[i] = array[i-1]+array[i-2]
    }
    return array
    }
    
    let resultado = fibonacci(10)
    console.log(resultado)