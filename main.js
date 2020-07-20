const isEven = function(number) {
    if (number % 2 == 0) {
        return(true)
    } else {
        return(false)
    }
}

module.exports = function(number){
    return isEven(number);
}