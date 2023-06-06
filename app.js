function solve(s){
    // Solve how many upper & lower cases exist
    var numUpper = s.length - s.replace(/[A-Z]/g, '').length;  
    var numLower = s.length - s.replace(/[a-z]/g, '').length;  
    if(numLower > numUpper || numLower == numUpper){
        return s.toLowerCase();
    } else {
        return s.toUpperCase();
    }
}

console.log(solve("code")); // "code"
console.log(solve("CODe")); // "CODE"
console.log(solve("COde")); // "code"
console.log(solve("Code")); // "code"