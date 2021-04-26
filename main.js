const member = document.getElementById('member1');
const closePopUp = document.getElementById('closing');


member.addEventListener('click',popUp);
closePopUp.addEventListener('click',closing);

const screen = window.matchMedia("(max-width: 799px)");

function popUp(){
    document.getElementById('pop').style.display = 'flex';
    document.getElementById('overlay').style.display = 'block';
}

function closing(){
    document.getElementById('pop').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

if(screen.matches){
    document.getElementById('main-container').remove();
    const div = document.createElement('div');



    div.innerHTML = `<div id="myCarousel" class="carousel slide"  >
    <!-- Indicators -->
    <ol class="carousel-indicators ">
      <li data-target="#myCarousel" data-slide-to="0" style="background: black;" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1" style="background: black;" ></li>
      <li data-target="#myCarousel" data-slide-to="2" style="background: black;" ></li>
      <li data-target="#myCarousel" data-slide-to="3" style="background: black;" ></li>

    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">
        <div id="popUp" class="item active"> 
            <div id="member1">
                <img class="ceos" src="/image/ceo1.png" alt="" width="150" height="150">
                <h5>Edgar Morrison</h5>
                <p class="occupation">CEO</p>
                <p>Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner...</p>
                <div class="icon">
                    <div><i id="fab" class="fab fa-facebook-f"></i></div>
                    <div><i id="fab" class="fab fa-linkedin-in"></i></div>
                </div>
            </div>
        </div>
        <div class="item">
            <div id="member">
                <img class="ceos" src="/image/ceo2.png" alt="" width="150" height=150>
                <h5>Mae Martin</h5>
                <p class="occupation">CEO</p>
                <p>Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner...</p>
                <div class="icon">
                    <div><i id="fab" class="fab fa-facebook-f"></i></div>
                    <div><i id="fab" class="fab fa-linkedin-in"></i></div>
                </div>
            </div>
        </div>

        <div class="item">
            <div id="member">
                <img class="ceos" src="/image/ceo3.png" alt="" width="150" height="150">
                <h5>David Banks</h5>
                <p class="occupation">CEO</p>
                <p>Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner...</p>
                <div class="icon">
                    <div><i id="fab" class="fab fa-facebook-f"></i></div>
                    <div><i id="fab" class="fab fa-linkedin-in"></i></div>
                </div>
            </div>
        </div>
    
        <div class="item">
            <div id="member">
                <img class="ceos" src="/image/ceo4.png" alt="" width="150" height="150">
                <h5>Frederick Parsons</h5>
                <p class="occupation">CEO</p>
                <p>Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner...</p>
                <div class="icon">
                    <div><i id="fab" class="fab fa-facebook-f"></i></div>
                    <div><i id="fab" class="fab fa-linkedin-in"></i></div>
                </div>
            </div>
        </div>
    </div>

    <!-- Left and right controls -->
    <!-- <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a> -->
  </div>
`

    div.setAttribute('id','main-container');
    document.getElementById('main-containers').appendChild(div);

    const myCarousel = document.getElementById('popUp');

    myCarousel.addEventListener('click',popUp);
    
}

