var checkSidebar = false;

function showSidebar(){
    console.log('hrhrhrhrhrhrhrhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
    const sidebar = document.getElementById('home-hamburger-menu');
    if(checkSidebar == false){
        checkSidebar = true
        sidebar.style.display = 'flex'
    }
    else{
        checkSidebar = false
        sidebar.style.display = 'none'
    }
    
}