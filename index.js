
let true_list = [1, 2, 3, 4, 5, 6, 5];

let list_numbers = [1, 2, 3, 4, 5, 6, 5];

let list_cards = document.getElementsByTagName("img");

let is_game_started= false;

let game_over = false;

let button = document.querySelector("#start-button");

let score = 0;

let clicked_numbers = [];

function shuffle() {
    list_numbers.sort( () => Math.random()-0.5 );
}

function show_front(){
    for(let i = 0 ; i<7 ; i++){
        list_cards[i].src = "../images/" + list_numbers[i] + ".png";
    }
}

function show_back (){
    for(let i = 0 ; i<7 ; i++){
        list_cards[i].src = "../images/blank.png";
    }
}

function cardClicked(element, index){
    if(!is_game_started){
        return;
    }
    
    if(!element.src.endsWith("blank.png")){
        return;
    }
    
    clicked_numbers.push(list_numbers[index-1])
    element.src = "/images/" + list_numbers[index-1] + ".png";
    
    for(let i = 0; i<clicked_numbers.length ; i++){
        if (clicked_numbers[i] != true_list[i]){
            game_over = true;
        }
    }

    if(game_over){
        gameOver();
    } else{
        score += 100/7;
    }

    document.querySelector("#score").textContent = "Your Score : " + Math.floor(score);

    if(Math.floor(score) == 100){
        document.querySelector("#congrats").style.display = "block";
        game_over = true;
        gameOver();
    }
}

function gameOver(){
    is_game_started = false;
    show_front();
}

function ButtonClicked() {
    if(is_game_started){
        return;
    }
    score = 0;
    clicked_numbers = [];
    game_over = false;
    document.querySelector("#congrats").style.display = "none";
    document.querySelector("#score").textContent = "Your Score : " + Math.floor(score);
    shuffle();
    show_front();
    setTimeout(() => {
        is_game_started = true;
        show_back();
    }, 2000);
}