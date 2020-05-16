let gameWith = prompt("Play with player or computer ?","p");
        let boardArray = [];
        let name1 = "";
        let name2 = "";
        let sign1 = "";
        let sign2 = "";
        let player1=0;
        let player2 =0;
        let xS = 0;
        let oS = 0;

        if(gameWith == "c"){
            document.querySelector("#player2").removeChild(document.querySelector("#nameForm2"));
            document.querySelector("#player2").style.whiteSpace = "pre";
            document.querySelector("#player2").textContent = "Player 2:";
            document.querySelector("#player2").textContent += "\r\nComputer";
            
        }
        document.querySelector("#start").addEventListener('click',function(){
            document.querySelector("#sign1").disabled = true;
            document.querySelector("#start").disabled = true;

            name1 = document.getElementById("nameForm1").value;
            sign1 = document.getElementById("sign1").value;

                if(!document.querySelector("#nameForm2")){
                    name2="";
                }
                else{
                    name2 = document.getElementById("nameForm2").value;
                }

            player1 = player(name1,sign1);

            if(sign1 =="x"){
                sign2 = "o"
            }
            else{
                sign2 = "x"
            }
            if(gameWith=="p"){
                player2 = player(name2,sign2);
            }
            else{
                player2 = player("computer",sign2);
            }
                player1.play(player2);
        });

        document.querySelector("#playAgain").addEventListener('click',function(){
            document.querySelectorAll(".playBox").forEach(div => {
                div.textContent ="";
            });
            xS =0;
            oS =0;
            boardArray =[];
            for(let i=0;i<9;i++){
                boardArray.push(null);
            }
        })

        let gameBoard = (function(){
            for(let i=0;i<9;i++){
            let box = document.createElement("div");
            box.setAttribute('id',`box${i}`);
            box.dataset.x = i;
            box.dataset.o = i;
            box.classList.add("playBox");
            box.style.border="1px solid black";
            document.querySelector(".gameBoard").appendChild(box);
            boardArray.push(null);
            }
            
        })();

        function player(name, sign){
            xS = 0;
            oS = 0;
            let getName = () => name;
            let getSign = () => sign;
            let play = (player2) => {
                
                    document.querySelectorAll(".playBox").forEach((div) => {
                        div.addEventListener('click',function(){
                        if(gameWith == "p"){
                            if(player1.getSign() == "x"){
                                if(xS==0 && oS==0 || xS==oS){
                                    div.textContent = player1.getSign();
                                    if(boardArray[`${div.dataset.x}`]== null){
                                        boardArray[`${div.dataset.x}`]=div.textContent;
                                        xS++;
                                    }
                                    else{

                                    }
                                }
                                else{
                                    div.textContent = player2.getSign();
                                    if(boardArray[`${div.dataset.o}`]== null){
                                        boardArray[`${div.dataset.o}`]=div.textContent;
                                        oS++;
                                    }
                                    else{

                                    }
                                }
                            }

                            else if(player1.getSign()== "o"){
                                if(xS==0 && oS==0 || xS==oS){
                                    div.textContent = player1.getSign();
                                    if(boardArray[`${div.dataset.o}`]== null){
                                        boardArray[`${div.dataset.o}`]=div.textContent;
                                        oS++;
                                    }
                                    else{

                                    }
                                }
                                else{
                                    div.textContent = player2.getSign();
                                    if(boardArray[`${div.dataset.x}`]== null){
                                        boardArray[`${div.dataset.x}`]=div.textContent;
                                        xS++;
                                    }
                                    else{

                                    }
                                }
                            }
                        }
                        else if(gameWith=="c"){
                                    let indexArray =[];
                                    if(player1.getSign() == "x"){
                                            if(boardArray[`${div.dataset.x}`]== null){
                                                div.textContent = player1.getSign();
                                                boardArray[`${div.dataset.x}`]=div.textContent;
                                            }
                                            else{
                                                return;
                                            }
                                    }
                                    else if(player1.getSign()== "o"){
                                            if(boardArray[`${div.dataset.o}`]== null){
                                                div.textContent = player1.getSign();
                                                boardArray[`${div.dataset.o}`]=div.textContent;
                                            }
                                            else{
                                                return;
                                            }
                                    }
                                    if(boardArray.indexOf(null)>-1){
                                        for(let i=0;i<boardArray.length;i++){
                                            
                                            if(boardArray[i]==null){
                                                indexArray.push(i);
                                            }
                                        }
                                    }
                                    else{
                                        return alert("It's a draw!")
                                    }
                                    let computerSelection = indexArray[parseInt(Math.floor(Math.random()*indexArray.length))];
                                    let computerDiv= document.querySelector(`#box${computerSelection}`);
                                    computerDiv.textContent = player2.getSign();
                                    boardArray[computerSelection] = player2.getSign();
                        }
                            if(boardArray[0]==boardArray[1] && boardArray[1]==boardArray[2] && boardArray[0]!= undefined){
                                if(boardArray[0]==player1.getSign()){
                                    alert(`${player1.getName()} wins`);
                                }
                                else{
                                    alert(`${player2.getName()} wins`);
                                }
                            }
                            else if(boardArray[3]==boardArray[4] && boardArray[4]==boardArray[5] && boardArray[3]!= undefined){
                                if(boardArray[3]==player1.getSign()){
                                    alert(`${player1.getName()} wins`);
                                }
                                else{
                                    alert(`${player2.getName()} wins`);
                                }
                            }
                            else if(boardArray[6]==boardArray[7] && boardArray[7]==boardArray[8] && boardArray[6]!= undefined){
                                if(boardArray[6]==player1.getSign()){
                                    alert(`${player1.getName()} wins`);
                                }
                                else{
                                    alert(`${player2.getName()} wins`);
                                }
                            }
                            else if(boardArray[0]==boardArray[3] && boardArray[3]==boardArray[6] && boardArray[0]!= undefined){
                                if(boardArray[0]==player1.getSign()){
                                    alert(`${player1.getName()} wins`);
                                }
                                else{
                                    alert(`${player2.getName()} wins`);
                                }
                            }
                            else if(boardArray[1]==boardArray[4] && boardArray[4]==boardArray[7] && boardArray[1]!= undefined){
                                if(boardArray[1]==player1.getSign()){
                                    alert(`${player1.getName()} wins`);
                                }
                                else{
                                    alert(`${player2.getName()} wins`);
                                }
                            }
                            else if(boardArray[2]==boardArray[5] && boardArray[5]==boardArray[8] && boardArray[2]!= undefined){
                                if(boardArray[2]==player1.getSign()){
                                    alert(`${player1.getName()} wins`);
                                }
                                else{
                                    alert(`${player2.getName()} wins`);
                                }
                            }
                            else if(boardArray[0]==boardArray[4] && boardArray[4]==boardArray[8] && boardArray[0]!= undefined){
                                if(boardArray[0]==player1.getSign()){
                                    alert(`${player1.getName()} wins`);
                                }
                                else{
                                    alert(`${player2.getName()} wins`);
                                }
                            }
                            else if(boardArray[2]==boardArray[4] && boardArray[4]==boardArray[6] && boardArray[2]!= undefined){
                                if(boardArray[2]==player1.getSign()){
                                    alert(`${player1.getName()} wins`);
                                }
                                else{
                                    alert(`${player2.getName()} wins`);
                                }
                            }
                            else if(boardArray.indexOf(null)==-1){
                                alert("It's a draw!")
                            }
                        
                    })
                    });
                
            }
            return {getName,play,getSign};
        }