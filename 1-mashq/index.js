var time =Number(prompt("soatni kiriting:"));
var i = 1;
var minut=0;
while (i<=time){
    minut+=60;
    i++;
}
console.log(`${time} soat= ${minut} minutga`);
