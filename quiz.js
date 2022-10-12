let i = 0;
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

const question = document.querySelector("h2");
const options = document.querySelectorAll(".options button");

Quiz(i);

function Quiz(index) {
    options.forEach(element => {
        element.style.backgroundColor = "white";
    })
    if (!quiz[index]) {
        alert("All the questions are covered");
    }
    else {
        question.textContent = quiz[index].ques;
        options.forEach((e, i) => {
            options[i].textContent = quiz[index].option[i];
            options[i].addEventListener("click", (e) => {
                if (e.target.textContent == quiz[index].answer) {
                    e.target.style.backgroundColor = "green";
                } else {
                    e.target.style.backgroundColor = "red";
                }
            })
        })
    }
}

// const nextButton = document.querySelector('.submit>button');
// console.log(nextButton);

$(function(){
    $('.submit>button').click(() => {
        i++;
        Quiz(i);
    })
})