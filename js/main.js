const tabs = document.querySelectorAll('.tabs_section .container');
function hideTabContent(){
    tabs.forEach(item=>{
        item.style.display="none";
    });
}

function showTabContent(i){
    tabs[i].style.display="flex";
}
hideTabContent();
showTabContent(0);