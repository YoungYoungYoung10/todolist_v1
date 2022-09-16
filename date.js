
module.exports.getDate = function(){
    const today = new Date();
    var options = {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    }
    return today.toLocaleDateString("en-US", options);
};

module.exports.getDay = function(){
    const today = new Date();
    var options = {
        weekday: 'long', 
    }
    return today.toLocaleDateString("en-US", options);
};

// console.log(module.exports)