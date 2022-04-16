let player={
    name:"yok",
    chips:200,
    sayhello:function(){
        console.log("I here to play!")
    }
}

playerel=document.querySelector("#player-el")

playerel.textContent=player.name+" :"+" $"+player.chips


let cards=[]
let sum=0
let hasblackjack=false
let isalive=false
let msg=""

let messageel=document.querySelector("#message-el")
let cardsel=document.querySelector("#cards-el")
let sumel=document.querySelector("#sum-el")

function startgame(){
	rendergame()

}

function getrandomcard(){

    randomcard=Math.floor(Math.random()*13)+1
    if (randomcard>10){
        return 10
    }else if(randomcard===1){
        return 11
    }else{
        return randomcard
    }

}

function rendergame(){
    isalive=true
    let firstcard=getrandomcard()
    let secondcard=getrandomcard()
    cards=[firstcard,secondcard]
    
    let sum= firstcard+secondcard
	cardsel.textContent="Cards:"+cards[0]+","+cards[1]
    sumel.textContent="Sum:"+sum

    if(sum<=20){
    	msg="Do you wanna draw a new card?"
    }
    else if(sum===21){
    	msg="You've got a blackjack"
    }
    else{
    	msg="You're out of the game:( "
    }
    messageel.textContent=msg
}

function newcard(){
   
	if (isalive === true && hasblackjack === false){
        let card=getrandomcard()
        sum+=card
        cards.push(card)
        rendergame()
    }
}