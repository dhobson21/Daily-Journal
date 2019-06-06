// Date of the journal entry.
// Concepts covered (which will be the title of the entry).
// The long-form contents of the journal entry.
// The mood of the journal entry.
// Define the keys and value for a JavaScript object that
// represents a journal entry about what you learned today

var entries = []

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




for(let i = 0; i < objectsJournalEntry.length; i++) { 
  entries.push(objectsJournalEntry[i])
}
console.log(entries)

// Purpose: To create, and return, a string template that
// represents a single journal entry object as HTML

// Arguments: entries (array of objects)
const makeJournalEntryComponent = (entries) => {
  // Create your own HTML structure for a journal entry
  return `
    <div class="entry">
    <h1> ${entries.concepts} </h1>
    <h3>${entries.date}</h3>
    <p>${entries.entry}</p>
    <p><strong>${entries.mood}</strong></p>
</div>
  `
}


const printJournalEntries = (entries) => {
  let entryLogContainer = document.querySelector(".entryLog")
  entries.forEach( function(obj) {
    entryLogContainer.innerHTML += makeJournalEntryComponent(obj)});
  }

// Invoke the render function
printJournalEntries(entries)