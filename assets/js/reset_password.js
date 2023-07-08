// Assuming you have the token available in a variable called `token`

let resetToken = document.getElementById('tokenInput');
let url = window.location.href;
console.log('Url ::',url);
let token = url.substring(url.indexOf('reset')+6,url.length);

console.log('Token ::',token);
resetToken.value = token;

console.log('resetToken ::',resetToken);
