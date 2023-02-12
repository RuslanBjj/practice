const tabsContent = document.querySelectorAll('.tabs_section .container'),
      tabs = document.querySelector('.tabs__list'),
      tabSkill = document.querySelectorAll('.tabs__list__item');
      
function hideTabContent(){
    tabsContent.forEach(item=>{
        item.style.display="none";
    });
}

function showTabContent(i){
    tabsContent[i].style.display="flex";
}
tabs.addEventListener('click',(e)=>{
const target = e.target;
if(target&&target.classList.contains('tabs__list__item')){
    tabSkill.forEach((item,i)=>{
if(target===item){
    hideTabContent();
showTabContent(i);
}
    });
}
});


hideTabContent();
showTabContent(0);