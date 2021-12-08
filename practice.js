function stringLength(string){
    if(string.length < 1 || string.length > 10){
        throw new Error('The string must be at least 1 character or at most 10 characters long') 
    }
    return string.length;
}
module.exports = stringLength;