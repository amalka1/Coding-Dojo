function change(){
   
    var vlera = document.querySelector(".convert");
    var id = ["todayleft", "todayright","tomorrowmax", "tomorrowmin", "fridaymax", "fridaymin", "sundaymax", "sundaymin"];
    if(vlera.value == "fahrent"){    
        for(var i = 0; i < id.length; i++){
                var value1 = parseInt( document.getElementById(id[i]).innerHTML);
                var changedvalue = (value1 *1.8) + 32;
                document.getElementById(id[i]).innerHTML = changedvalue+1 + "°";
        }
    }
}

function shfaqalert(){
    alert("Loading weather report...");
}
function remove(){
    var remove = document.getElementById("remove");
    remove.remove(remove);
}
