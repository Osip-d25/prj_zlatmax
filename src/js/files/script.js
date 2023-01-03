// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

//========================================================
$(document).ready(function() {

    //burger
    const $burger = $('.burger');
    const $btnCls = $('.btn-cls-menu');
    const $mobMenu = $('#mobile-menu');
    $burger.on('click', function() {
        $mobMenu.addClass('mobile-menu-open'); //open mob-menu
    });
    $btnCls.on('click', function() {
        $mobMenu.removeClass('mobile-menu-open'); //close mob-menu
    });

    //submenu phone
    const $listSpoller = $('.list-phones');
    const $btnSpoller = $('.phones ._icon-arrow');
    const $iconPhone = $('._icon-phone');
    //open sub-list phone (destop)
    $btnSpoller.on('click', function() {
        $btnSpoller.toggleClass('activeBtnPhones');
        $listSpoller.toggleClass('activeList').slideToggle(500);
    });
    //open sub-list phone (mob)
    $iconPhone.on('click', function() {
        $listSpoller.toggleClass('activeList').slideToggle(500);
    })

    //mob-menu 
    const $linkCatalog = $('#link-mob-catalog');
    const $mainMobMenu = $('.main-menu-mob');
    const $secondMobMenu = $('.second-menu-mob');
    const $btnPrev = $('.btn-prev-menu');
    const $itemListMobMenu = $('#mobile-menu .second-menu-mob .item ._icon-arrow');
    const $subMobList = $('#mobile-menu .sub-mob-list');

    //open main menu
    $btnPrev.on('click', function() {
        $mainMobMenu.css("display", "block");
        $secondMobMenu.css("display", "none");
        $btnPrev.css("display", "none");
    });
    //open second menu
    $linkCatalog.on('click', function() {
        $mainMobMenu.css("display", "none");
        $secondMobMenu.css("display", "block");
        $btnPrev.css("display", "block");
    });
    //open sub-menu
    $itemListMobMenu.on('click', function() {
        $itemListMobMenu.not($(this)).removeClass('sub-mob-list-open');
        $subMobList.not($(this).next()).slideUp(300);
        $(this).toggleClass('sub-mob-list-open').next().slideToggle(300);
    })
});