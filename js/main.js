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
//  FORMA


const spaceSerf = [
'Los Angeles',
'Vladivostok',
'Bali',
'Taiti',
'Portugal'
];

const knopka = document.querySelector('.form_button');
const addInput = document.querySelector('.add__input');
const spisokMest = document.querySelector('.forma_list_lil');



function showSpisok (){
    spisokMest.innerHTML="";
    spaceSerf.forEach((item)=>{
        spisokMest.innerHTML +=`  <li class="forma__list_item"><div class=" list__item">${item}  <img src="/img/delete.png" alt="basket_delete" class="delete"> </div></li>`;
            });
            document.querySelectorAll('.delete').forEach((item,i)=>{
                item.addEventListener('click',(e)=>{
                    if(e.target===item){item.parentElement.parentElement.remove();
                   spaceSerf.pop();
            
           
                    }
                    
                });
            });
}
knopka.addEventListener('click',(e)=>{
    e.preventDefault();
    const newPlace = addInput.value;
    spaceSerf.push(newPlace);
    spaceSerf.sort();
   showSpisok();
});

showSpisok();

// Timer

const finishDate = '2023-02-23';

function getFinishDate(date){
    const t = Date.parse(date) - Date.parse(new Date()),
 
    day = Math.floor( (t/(1000*60*60*24)) ),
    hour = Math.floor( (t/(1000*60*60)%24) ),
    minute = Math.floor( (t/1000/60) % 60 ),
    second = Math.floor( (t/1000) % 60 );
   
  
    return {
        'total':t,
        'days':day,
        'hours':hour,
        'minutes':minute,
        'seconds':second
    };
}

function setTimer(){
    let dayss = document.querySelector('#days'),
    hourss = document.querySelector('#hours'),
    minutess = document.querySelector('#minutes'),
    secondss = document.querySelector('#seconds');

    function updateTimer(){
        let t = getFinishDate(finishDate);
        dayss.innerHTML=t.days;
        hourss.innerHTML=t.hours;
        minutess.innerHTML=t.minutes;
        secondss.innerHTML=t.seconds;
    }
    const interval = setInterval(()=>{
getFinishDate();
updateTimer();
    },1000);
}
setTimer();



