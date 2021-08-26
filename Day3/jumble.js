let words=
[
    {
        jumbled:"ricstpjvaa",
        correct:"javascript"
    },
    {
        jumbled:"nopthy",
        correct:"python"
    },
    {
        jumbled:"aavj",
        correct:"java"
    },
    {
        jumbled:"iknlot",
        correct:"kotlin"
    },
    {
        jumbled:"atnrorf",
        correct:"fortran"
    },

]

let currentWord=0;
let score=0;

function displayWord()
{
    document.querySelector("#j-word").innerText = 
    words[currentWord].jumbled;

    document.querySelector("#score").innerText=score;
}


displayWord();


function checkAnswer()
{
    
            let answer=document.querySelector("#inp").value;
            

            if(answer.toLowerCase()===words[currentWord].correct.toLowerCase()){

                score++;

            }

            if(currentWord==words.length-1){

                let msg="";

                if(score===5){
                    msg="Amazing game "+score;
                }
                else if(score===4){
                    msg="Good Game "+score
                }
                else if(score<4){
                    msg="Good Try "+score
                }

                alert(msg);

                location.reload();
            }
            else{
                currentWord++;
                displayWord();
                document.querySelector("#inp").value="";
            }

            

    
}















