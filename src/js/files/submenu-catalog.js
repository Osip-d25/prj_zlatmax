document.addEventListener('click', documentActions);
const menuBlocks = document.querySelectorAll('.catalog-menu-block');
if (menuBlocks.length) {
    menuBlocks.forEach(menuBlock => {
        const menuBlockItems = menuBlock.querySelectorAll('.catalog-menu-block .category').length;
        menuBlock.classList.add(`_block_${menuBlockItems}`);
    })
}

function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('[data-parent]')) {
        const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
        const subMenu = document.querySelector(`[data-sumenu = "${subMenuId}"]`);
        const catalogMenu = document.querySelector('.sub-menu-catalog');

        if (subMenu) {
            const activeLink = document.querySelector('.sub-menu-active');
            const activeBlock = document.querySelector('.sub-menu-open');

            if (activeBlock && activeLink !== targetElement) {
                activeLink.classList.remove('sub-menu-active');
                activeBlock.classList.remove('sub-menu-open');
            }
            targetElement.classList.toggle('sub-menu-active');
            subMenu.classList.toggle('sub-menu-open');
        } else {
            console.log("Нет такoго подменю");
        }
        e.preventDefault();
    }
}