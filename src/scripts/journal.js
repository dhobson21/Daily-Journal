/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/



const objectsJournalEntry = [
  {
    date: "06/03/2019",
    concepts: "Dot Notation v. Bracket Notation",
    entry: "Today we discussed dot notation v. bracket notation. Both seem very straight forward to me, and i feel more comfortable using dot notation and it seems to be able to do more so I'll probably use that predominantly.",
    mood: "Determined"
  },
  {
  date: "06/04/2019",
  concepts:"Scope and Variables",
  entry: "Today we finally discussed scope and variables. I now realize why var isn't used much anymore. I solidified using 'let' 'const' and 'var' later on that night when I was playing around with scopes and inserting different declarations in to see which could move up/down in scope",
  mood: "Happy"
},
{
  date: "06/05/2019",
  concepts: "Passing a function through a function",
  entry: "Today we learned about passing a function through a function. This was a very clear concept to me as it reminded me of old logic games i used to play while studying for the LSATS.",
  mood: "Happy"
}
]


var entries = []


for(let i = 0; i < objectsJournalEntry.length; i++) { 
  entries.push(objectsJournalEntry[i])
}

console.log( "enteries", entries) 

