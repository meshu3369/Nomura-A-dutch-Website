$(document).ready(function () {

    /*
    *  owl carousel plugin initialize
    *
    * */
    $("#product_one").owlCarousel({

        // Most important owl features
        items : 3,
        itemsCustom : false,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        singleItem : false,
        itemsScaleUp : false,

        //Basic Speeds
        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,

        //Autoplay
        autoPlay : false,
        stopOnHover : false,

        // Navigation
        navigation : true,
        navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        rewindNav : true,
        scrollPerPage : false,

        //Pagination
        pagination : false,
        paginationNumbers: false,

        // Responsive
        responsive: true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth: window,

        // CSS Styles
        baseClass : "owl-carousel",
        theme : "owl-theme",

        //Lazy load
        lazyLoad : false,
        lazyFollow : true,
        lazyEffect : "fade",

        //Auto height
        autoHeight : false,

        //JSON
        jsonPath : false,
        jsonSuccess : false,

        //Mouse Events
        dragBeforeAnimFinish : true,
        mouseDrag : true,
        touchDrag : true,

        //Transitions
        transitionStyle : false,

        // Other
        addClassActive : false,

        //Callbacks
        beforeUpdate : false,
        afterUpdate : false,
        beforeInit: false,
        afterInit: false,
        beforeMove: false,
        afterMove: false,
        afterAction: false,
        startDragging : false,
        afterLazyLoad : false

    });

    /*
    * INITIAL OF SECOND PRODUCT SLIDER
    * */

    $("#product_two").owlCarousel({

        // Most important owl features
        items : 3,
        itemsCustom : false,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        singleItem : false,
        itemsScaleUp : false,

        //Basic Speeds
        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,

        //Autoplay
        autoPlay : false,
        stopOnHover : false,

        // Navigation
        navigation : true,
        navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        rewindNav : true,
        scrollPerPage : false,

        //Pagination
        pagination : false,
        paginationNumbers: false,

        // Responsive
        responsive: true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth: window,

        // CSS Styles
        baseClass : "owl-carousel",
        theme : "owl-theme",

        //Lazy load
        lazyLoad : false,
        lazyFollow : true,
        lazyEffect : "fade",

        //Auto height
        autoHeight : false,

        //JSON
        jsonPath : false,
        jsonSuccess : false,

        //Mouse Events
        dragBeforeAnimFinish : true,
        mouseDrag : true,
        touchDrag : true,

        //Transitions
        transitionStyle : false,

        // Other
        addClassActive : false,

        //Callbacks
        beforeUpdate : false,
        afterUpdate : false,
        beforeInit: false,
        afterInit: false,
        beforeMove: false,
        afterMove: false,
        afterAction: false,
        startDragging : false,
        afterLazyLoad : false

    });

    

    /*
    *
    * side mobile menu :::::
    * */

    $(".navbar-toggle").click(function (e) {

        $("#mySidenav").css("width", "80%");
        $("#main").css("right", "80%");
        $("#main").css("opacity", ".6");
        e.preventDefault();
    });

    $(".closebtn").click(function (e) {
        e.preventDefault();
        $("#main").css("opacity", "1");
        $("#mySidenav").css("width", "0px");
        $("#main").css("right", "0");

    });


    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
    }

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 300) {
            $(".slider").addClass("navic");
        } else {
            $(".slider").removeClass("navic");
        }
    });



    /*
    *   for the accordion
    * */

    $('.collapse').on('shown.bs.collapse', function(){
        $(this).parent().find(".fa-caret-down").removeClass("fa-caret-down").addClass("fa-caret-up");
    }).on('hidden.bs.collapse', function(){
        $(this).parent().find(".fa-caret-up").removeClass("fa-caret-up").addClass("fa-caret-down");
    });

    $('.collapse').on('shown.bs.collapse', function(){
        $(this).parent().find(".panel-heading").addClass("collapse_after_heading");
    }).on('hidden.bs.collapse', function(){
        $(this).parent().find(".panel-heading").removeClass("collapse_after_heading");
    });
    

    /*
    *
    * nav bar scrolling code here. ..........
    * */

  

/*
    $(window).bind('scroll', function () {
        var navHeight = $(window).height();
        if ($(window).scrollTop()) {
            $('#header').addClass('navbar-fixed-top');
        }
        else {
            $('#header').removeClass('navbar-fixed-top');
        }
    });*/

/*    function init() {
        window.addEventListener('scroll', function (e) {
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 300,
                header = document.querySelector("header");
            if (distanceY > shrinkOn) {
                classie.add(header, "smaller");
            } else {
                if (classie.has(header, "smaller")) {
                    classie.remove(header, "smaller");
                }
            }
        });
    }

    window.onload = init();*/

   /* /!**
     * This object controls the nav bar. Implement the add and remove
     * action over the elements of the nav bar that we want to change.
     *
     * @type {{flagAdd: boolean, elements: string[], add: Function, remove: Function}}
     *!/
     var myNavBar = {

     flagAdd: true,

     elements: [],

     init: function (elements) {
     this.elements = elements;
     },

     add: function () {
     if (this.flagAdd) {
     for (var i = 0; i < this.elements.length; i++) {
     document.getElementById(this.elements[i]).className += " fixed-theme";
     }
     this.flagAdd = false;
     }
     },

     remove: function () {
     for (var i = 0; i < this.elements.length; i++) {
     document.getElementById(this.elements[i]).className =
     document.getElementById(this.elements[i]).className.replace(/(?:^|\s)fixed-theme(?!\S)/g, '');
     }
     this.flagAdd = true;
     }

     };

     /!**
     * Init the object. Pass the object the array of elements
     * that we want to change when the scroll goes down
     *!/
     myNavBar.init([
     "header",
     "header-container",
     "brand"
     ]);

     /!**
     * Function that manage the direction
     * of the scroll
     *!/
     function offSetManager() {

     var yOffset = 0;
     var currYOffSet = window.pageYOffset;

     if (yOffset < currYOffSet) {
     myNavBar.add();
     }
     else if (currYOffSet == yOffset) {
     myNavBar.remove();
     }

     }

     /!**
     * bind to the document scroll detection
     *!/
     window.onscroll = function (e) {
     offSetManager();
     }

     /!**
     * We have to do a first detectation of offset because the page
     * could be load with scroll down set.
     *!/
     offSetManager();*/


});