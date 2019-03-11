function addTabs(tabHeaderClass, infoHeaderClass, tabContentClass){
    'use strict';
    
    let tab = document.querySelectorAll(tabHeaderClass),
        info = document.querySelector(infoHeaderClass),
        tabContent = document.querySelectorAll(tabContentClass);
        
    function hideTabContent(a){
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');            
        }
    }
    hideTabContent(1);
    
    

    function showTabContent(b){
        if (tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;        
        if (target && target.classList.contains('info-header-tab')){
            for (let i = 0; i < tab.length; i++){
                if (target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
    
}

addTabs(tabHeaderClass, infoHeaderClass, tabContentClass); 
//Введите в аргументы функции названия ваших классов как в примере:


// tabHeaderClass - класс названия таба (пример: '.yourClassName')
// infoHeaderClass - класс заголовка контента внутри таба (пример: '.yourClassName')
// tabContentClass - класс блока с контентом внутри таба (пример: '.yourClassName')   
