// Generate random integers
function randInt(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

// get the numbers
var M = randInt(300,600);
var N = randInt(100,300);
var K = randInt(0,100);
// update the questions -- total, giveout, takeback
document.querySelector('#total').textContent = M.toString();
document.querySelector('#giveout').textContent = N.toString();
document.querySelector('#takeback').textContent = K.toString();

// update the answers
var T = N+K;
var S = N+K;
// M-N+K, M-N-K, M-T, M-S
document.querySelector('[value="1"]').nextSibling.nodeValue=M.toString +"-"+N.toString()+"+"+K.toString();

// pick the answer
function changeStyle(e){
    e.preventDefault(); // prevent the checkbox been clicked ---otherwise two clicks
    var classname = this.getAttribute("class");
    alert("clicked class"+classname);
    if (classname == "answer"){
        this.setAttribute("class","answer selected");
    }else{
        // the style goees back to answer
        
    }
    // testing ona nimation
    this.animate([{transform:'rotate(0deg'},{transform:'rotate(180deg)'}],{duration:3000,fill:'forwards'});
}



// add eventlistener on the answer!!
var answerlist = document.getElementByClassName['answer'];
for(var i = 0; i<4; i++){
    answerlist[i].addEventListener('click', changeStyle,false);
}
