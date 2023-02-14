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


// Slaider

const previousSlaid = document.querySelector('.slaider_arrow_left'),
      nextSlaid = document.querySelector('.slaider_arrow_right'),
      card = document.querySelectorAll('.slaider_card'),
      cardInfo = document.querySelectorAll('.about_board');
     
      let indexId=1;
      showCard(indexId);
      function hideCard(){
        cardInfo.forEach(item=>{
item.style.display="none";
        });
        card.forEach((item)=>{
item.style.display='none';
        });
      }
      function showCard(i){
       
        if(i > card.length){indexId=1;}
        else if (i<1){indexId=card.length;}
        hideCard();
        card[indexId-1].style.display="block";
        cardInfo[indexId-1].style.display="block";
      }
      function plusSlaid(n){
showCard(indexId+=n);
      }
      previousSlaid.addEventListener('click',()=>{
plusSlaid(-1);
      });
      nextSlaid.addEventListener('click',()=>{
        plusSlaid(+1);
      });
    //   --------------------------
 