//your JS code here. If required.
function removeSelected() {
    let selectedElements = document.querySelectorAll("#colorSelect");
    let value = selectedElements[0].value;

	let options = document.getElementsByTagName("option");
    for(let i=0;i<options.length;i++){
        if(options[i].innerText == value){
            options[i].remove();
        }
    }
}