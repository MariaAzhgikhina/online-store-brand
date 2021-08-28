function clickOnBrowseButton(){
    document.querySelector('.search-form__browse')
            .addEventListener('click', () => {
                if (document.querySelector('.search-form__browse')
                .nextElementSibling.classList.contains('drop__down')){
                    document.querySelector('.search-form__browse')
                .nextElementSibling.classList.toggle('drop__down');
                }
                else {
                    document.querySelector('.search-form__browse')
                .nextElementSibling.classList.add('drop__down');
                }
    });
}


function makeActiveNavItem(){
    let pageId = document.querySelector("[data-id-page]").getAttribute("data-id-page"),
        navItem = document.querySelector(`[data-id-nav=${pageId}]`);

    if(pageId === navItem.getAttribute("data-id-nav")) {
        navItem.classList.add("menu__list_active");
    }
}



clickOnBrowseButton();
makeActiveNavItem();