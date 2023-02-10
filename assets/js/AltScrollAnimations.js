
let scrollpos = window.scrollY;
const navigation = document.getElementById("nav");


function add_class_on_scroll() {
    navigation.classList.add("colorOnScroll");
}

function remove_class_on_scroll() {
    navigation.classList.remove("colorOnScroll");
}

window.addEventListener('scroll', function(){ 
    //Here you forgot to update the value
    scrollpos = window.scrollY;

    if(scrollpos > 260){
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
    console.log(scrollpos);
});