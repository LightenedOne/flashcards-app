//** Variables **//

// Decks //

let sheetDeck = document.querySelector(".sheetDeck");
let noteDeck = document.querySelector(".noteDeck");
let fingerDeck = document.querySelector(".fingerDeck");

// Question Selectors //

let noteQuestion = document.querySelector(".note-music");
let nameQuestion = document.querySelector(".note-name");
let fingerQuestion = document.querySelector(".note-finger");

// Answer Selectors //

let answerOne = document.querySelector(".quiz-area__answer-1");
let answerTwo = document.querySelector(".quiz-area__answer-2");
let answerThree = document.querySelector(".quiz-area__answer-3");
let answerFour = document.querySelector(".quiz-area__answer-4");

// Button Selectors //

let submitBtn = document.querySelector(".btn__submit");

// Image Selector //

let quizImage = document.querySelector(".image-holder");

//////////////////////////////////////////////////////////////////

// Sheet Music Deck //

let deckSheetMusic = {
    "card" : [
        {
            "note" : "B Flat",
            "imgSrc" : "../../build/notes/bflat-1.png",
            // Answers //
            "correct" : "B Flat",
            "incorrect-1" : "B",
            "incorrect-2" : "C Flat",
            "incorrect-3" : "G"    
        },
        {
            "note" : "B",
            "imgSrc" : "../../build/notes/b-1.png",
            // Answers //
            "correct" : "B",
            "incorrect-1" : "C",
            "incorrect-2" : "E Flat",
            "incorrect-3" : "D"    
        },
        {
            "note" : "C",
            "imgSrc" : "../../build/notes/c-1.png",
            // Answers //
            "correct" : "C",
            "incorrect-1" : "B",
            "incorrect-2" : "E",
            "incorrect-3" : "A"    
        },
        {
            "note" : "C Sharp",
            "imgSrc" : "../../build/notes/csharp-1.png",
            // Answers //
            "correct" : "C Sharp",
            "incorrect-1" : "D Sharp",
            "incorrect-2" : "C Flat",
            "incorrect-3" : "B Sharp"    
        },
        {
            "note" : "D",
            "imgSrc" : "../../build/notes/d-1.png",
            // Answers //
            "correct" : "D",
            "incorrect-1" : "C",
            "incorrect-2" : "A",
            "incorrect-3" : "B"    
        },
        {
            "note" : "D Sharp",
            "imgSrc" : "../../build/notes/dsharp-1.png",
            // Answers //
            "correct" : "D Sharp",
            "incorrect-1" : "C Sharp",
            "incorrect-2" : "E Flat",
            "incorrect-3" : "A Flat Sharp"    
        }
    ]
}

// Note Names Deck //


function testing () {
    quizImage.innerHTML = "<img src=" + deckSheetMusic.card[0].imgSrc + ">";
}

testing();





