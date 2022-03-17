var story = 0; // keep story from being undefined 
var form = document.getElementById('DaDeathGame');// get the element with matching ids
var submit = document.getElementById('continueButton');
var reset = document.getElementById('resetButton');
var answer = '';

var story_telling = {
  "start": { //beginning of the story
    "question": "For this game, you will start off young and age as you unfold your tale. Your own decisions impact your life so watch your step and try your hardest to live a long life! For starters, where do you wish to be born? ",
    "answers": {
      "a": "Chicago",
      "b": "Los Angeles",
      "c": "Denver",
    }
  },
  //Born in Chicago 
  "1_a": {
    "question": "You made it to age 17! You're chilling with some friends and you guys decide to order food. You trim it down to three options, which one are you choosing? ",
    "answers": {
      "a": "A Chicago Style Hot Dog",
      "b": "A Deep Dish Pizza",
      "c": "Some Good Ol McDonalds",
    }
  },

  //Chicago: Hot dog
  "2_a": {
    "question": "You just turned 34 years old! Hot dogs are now your favorite food. You decide to take some time off work to go on a vacation, where do you go?",
    "answers": {
        "a": "Somewhere tropical",
        "b": "Somewhere with snow",
        "c": "Somewhere adventurous",
      }
  },
  //Chicago: Hot dog - Last
  "3_a": {
    "question": "Dead at 90! The trip was so refreshing that it made you feel your youth again, adding extra years to your long healthy life! ",
  },
  "3_b": {
    "question": "Dead at 34! You had decided to go skiing on your trip so you boarded a ski lift. Turns out there was frozen soda on the seat that made you slip to your death at the peak of the lift.",
  },
  "3_c": {
    "question": "Dead at 45! You picked up an injury on your trip that added extra stress to your life. Ends up oveerpowering you at the young age of 45.",
    "end": "the end"
  },
  //Chicago: Pizza
  "2_b": {
    "question": "You made it to 25! Pizza was good but that leads you to find out you're lactose intolerant. You're coming home from work, which form of transportation are you choosing to get home?",
    "answers": {
        "d": "CTA",
        "e": "Uber/Lyft",
        "f": "Bike",
      }
  },
  //Chicago: Pizza - Last
  "3_d": {
    "question": "Dead at 30! You continuously take CTA for the next five years and one day while you're waiting at the bus stop, it looks like the bus is going to hit you so you stand there shocked like a deer in headlights. Bus actually never hits, you die from shock.",
  },
  "3_e": {
    "question": "Dead at 25! You get stuck in traffic when a sudden meteor decides to strike you on I-94. Your perish soon after.",
  },
  "3_f": {
    "question": "Dead at 88! Your ride feels like a breath of fresh air to you so you decide to continue riding your bike, eventually leading you to pursue a career in professional bike riding. You end up dying to natural causes.",
    "end": "the end"
  },
  //Chicago: Mcdonalds
  "2_c": {
    "question": "Dead at 17. The specific McDonalds you had gone to was closed down IMMEDIATELY the next day for using buns that had been expired for 20 years. ",
  },

  // Born in LA

  "1_b": {
    "question": "You just turned 15! What activity do you take up?",
    "answers": {
      "d": "Skateboarding",
      "e": "Surfing",
      "f": "Gaming",
    }
  },
  // LA: Skate
  "2_d": {
    "question": "You made it to 26! Skating didn't quite workout but you realize that you have a big eye for business and have offers to work for a Silicon Valley Company. Who are you choosing?",
    "answers": {
        "g": "Facebook",
        "h": "Apple",
        "i": "Google",
    }
  },
  //LA: Skate - Last
  "3_g": {
    "question": "Dead at 26! You work directly under Mark Zuckerberg. On your first occurence meeting him, you step into his office only to never step out ever again. All footage and messages leading up to your interaction with Facebook disappear as well.",
  },
  "3_h": {
    "question": "Dead at 60! You eventually become head of Apple at 60. On your first year, you forget to release the new apple product for the year. You die from an angry mob of customers who storm your house in search of the new device.",
  },
  "3_i": {
    "question": "Dead at 89! You stay with Google for a bit but after 5 years you leave to make your own search engine. After 20 years you strike gold and your search engine, Yoogle, becomes the next best thing since Google. You live a life full of wealth and make to 89.",
    "end": "the end"
  },
  //LA: Surf
  "2_e": {
    "question": "Dead at 15! It's your second day surfing, you finally start to get the hang of things. Out of no where a big wave swoops you in, never to be seen again.",
  },
  //LA: Gaming
  "2_f": {
    "question": "You made it to 20! You build up a pretty big streaming career from your hobby. The main game that you always stream is...",
    "answers": {
        "j": "Super Smash Bros",
        "k": "Fortnite",
        "l": "Minesweeper",
    }
  },
  //LA: Gaming - Last
  "3_j": {
    "question": "Dead at 22! A new Smash game comes out the following year. You can't grasp the hang of it at all which leads yo to lose your followers, eventually leading to bankruptcy. Death by bankruptcy.",
  },
  "3_k": {
    "question": "Dead at 30! At this point the game is dead so you grabbed whatever money you could and made an honest living with it. On a random ocurrence, you encounter an old fan who brings up arguably one of your most embarrasing moments on stream. You die from humiliation.",
  },
  "3_l": {
    "question": "Dead at 92! Two years down the line, Minesweeper gets popularized. With the worldwide revival of Minesweeper, you're at the pinnacle of it all. You end up living a pretty decorated life with multiple cover appearances on TIMES magazine and even a Nobel Peace Prize. You die and go down in history as the most influential person of that era. ",
    "end": "the end"
  },
  // Denver

  "1_c": {
    "question": "Dead as an infant! As a baby you got swooped away by mountain lions, never to be seen again."
  },
  
};

//continue
submit.addEventListener('mouseup', function(){
  answer = form.querySelectorAll('input[type=radio]:checked')[0].value;
  if(answer) {
    story++;
    populateForm(story + '_' + answer);
    console.log("Is this death?");
  }
});

//reset
function resetForm(){
    document.getElementById("DaDeathGame").reset();
}

function populateForm(story) {
  var current_story = story_telling[story];
  var text = '';

  for(var prop in current_story['answers']) {
    if(current_story['answers'].hasOwnProperty(prop)) {
      text += '<label><input type="radio" name="answer" value="' + prop + '"/><span>' + current_story['answers'][prop] + '</span></label>';
    }
  }

  form.querySelector('p').innerHTML = current_story.question;
  form.querySelector('fieldset').innerHTML = text;
}

populateForm('start');