const balls = document.getElementsByClassName('ball');  //grabbing ball

document.onmousemove = (event) => 
    { //the following function will run onmousemove
        const x = (event.clientX * 100) / window.innerWidth + '%';  //mouse tracking
        const y = (event.clientY * 100) / window.innerHeight + '%'; //mouse tracking

        //the following for loop will adjust both eyeballs location based on mouse tracking location data
        for (let i = 0; i < 2; i++)
            {
            balls[i].style.left = x;
            balls[i].style.top = y;
            balls[i].transform = 'translate(-' + x + ',-' + y + ')';
            }
            
     //end of onmousemove function
    };
