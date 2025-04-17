var nol="sonlar 0 dan katta bolsin!! "
console.log(nol)
var num1=Number(prompt("1-sonni kiriting: "));
var num2=Number(prompt("2-sonni kiriting: "));
if (num1>=1 && num2>=1) {
    if (num1>num2) {
        var natija=Number(num1/num2);
        console.log(`sonlarning bolinmasi= ${natija}`);
    }
    else{
        alert("1-son katta bolsin 2-sondan!!");
    }
    
}
else{
    alert("0 dan katta son kiriting!!");
}