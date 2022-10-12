const quiz = [
    {
        ques: "What are the small pieces of wood on top of the stumps called?",
        option: ["Bails", "Sticks", "Stumpettes", "Toothpicks"],
        answer: "Bails"
    },
    {
        ques: "Which International team is nicknamed the Baggy Greens?",
        option: ["India", "England", "Australia", "Pakistan"],
        answer: "Australia"
    },
    {
        ques: "Which British county cricket team has a daffodil as part of the club badge?",
        option: ["Middlesex", "Glamorgan", "Lancashire", "Essex"],
        answer: "Glamorgan"
    },
    {
        ques: "Harold 'Dickie' Bird is a famous...",
        option: ["Batsman", "Commentator", "Umpire", "Bowler"],
        answer: "Umpire"
    }
]
let i=0;
$(function(){
    Quiz(i);
    function Quiz(i){
        if(!quiz[i]){
            alert("Attempted");
        }  
    $("h2").text(quiz[i].ques);
    $(`.options button:nth-child(1)`).text(quiz[i].option[0]);
    $(`.options button:nth-child(2)`).text(quiz[i].option[1]);
    $(`.options button:nth-child(3)`).text(quiz[i].option[2]);
    $(`.options button:nth-child(4)`).text(quiz[i].option[3]);
    
    $(".options button").click(function(){
        $(this).animate({fontSize: "17px"})
        if($(this).text() == quiz[i].answer){
            $(this).css("background-color", "green");
        }
        else{
            $(this).css("background-color", "red");
        }
    })
    }

    $(".submit button").click(()=>{
        
        $(".options button").css("font-size","15px")
        $(".options button").css("background-color", "white")
            i++;
            Quiz(i);
    })

});