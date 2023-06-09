var adat1 = [[
    "ABC-001", 600,  600, "kezdete: 2023-06-05 11:00, vege: 2023-06-05 14:00"],
       

["DEF-001",  1800,  600,"kezdete: 2023-06-05 11:00, vege: 2023-06-05 14:00 <br>kezdete: 2023-06-05 14:00, vege: 2023-06-05 17:00 <br>kezdete: 2023-06-05 17:00, vege: 2023-06-05 20:00"],
    
   
["GHI-001",  1200,  1200,"kezdete: 2023-06-05 11:00 vege: 2023-06-05 14:00 <br> kezdete: 2023-06-05 17:00, vege: 2023-06-05 20:00"]
]

var lepteto = 0;
   function leptet()
   {
       lepteto++;

       lepteto = lepteto%3
       console.log(lepteto)
       update()
   }
   function vleptet()
   {
       lepteto = lepteto%3
       if (lepteto == 0){
           lepteto=3
       }
       lepteto--;
       console.log(lepteto)
       
       update()
   }

document.getElementById("rendszam").innerHTML = "rendszam: " + adat1[lepteto][0];
document.getElementById("szamla").innerHTML ="szamla: "+ adat1[lepteto][1];
document.getElementById("befizetett").innerHTML ="befizetett: " + adat1[lepteto][2];
document.getElementById("parkolas").innerHTML ="parkolasok:<br> "+ adat1[lepteto][3];



function update(){
document.getElementById("rendszam").innerHTML = "rendszam: " + adat1[lepteto][0];
document.getElementById("szamla").innerHTML ="szamla: "+ adat1[lepteto][1];
document.getElementById("befizetett").innerHTML ="befizetett: " + adat1[lepteto][2];
document.getElementById("parkolas").innerHTML ="parkolasok:<br> "+ adat1[lepteto][3];
}