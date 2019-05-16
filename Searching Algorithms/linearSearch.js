module.exports.linearSearch = function (arr, val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val){ 
            console.log(i);
            return i; 
        
        }
    }
    console.log("-1");
    return -1;
}

this.linearSearch([34,51,1,2,3,45,10,687], 100)