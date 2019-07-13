var n = 0;
function changeImage() {
    if ( n == 0 ) {
        document.images["user-img"].src = "assets/img/standing.jpg";
        document.getElementById('work').innerHTML = ' Actions and Repercussions Adviser';
        document.getElementById('bio').innerHTML = ' "Is your dad a terrorist? Cause you’re the bomb."';
        n = 1;
    }
    else if ( n == 1 ) {
        document.images["user-img"].src = "assets/img/why.jpg";
        document.getElementById('work').innerHTML = ' Communications Ambassador';
        document.getElementById('bio').innerHTML = ' "Did it hurt? When you fell from heaven?"';
        n = 2;
    }
    else if ( n == 2 ) {
        document.images["user-img"].src = "assets/img/glass.jpg";
        document.getElementById('work').innerHTML = ' Meme Lord';
        document.getElementById('bio').innerHTML = ' "Im not google but I have everything you’ve been searching for."';
        n = 3;
    }
    else if ( n == 3 ) {
        document.images["user-img"].src = "assets/img/gun.jpg";
        document.getElementById('work').innerHTML = ' Master Handshaker';
        document.getElementById('bio').innerHTML = ' "Is it hot in here or is it just you?"';
        n = 4;
    }
    else if ( n == 4 ) {
        document.images["user-img"].src = "assets/img/biri.jpg";
        document.getElementById('work').innerHTML = ' Chief Everything Officer';
        document.getElementById('bio').innerHTML = ' "Well, here I am. What were your other two wishes?"';
        n = 5;
    }
    else {
        document.images["user-img"].src = "assets/img/Snapchat-1572415492.jpg";
        document.getElementById('work').innerHTML = ' Head of Bagels';
        document.getElementById('bio').innerHTML = ' "Settle down boo-boo, this is the best thing that ever happend to you."';
        n = 0;
    }
}