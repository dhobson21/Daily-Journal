// Date of the journal entry.
// Concepts covered (which will be the title of the entry).
// The long-form contents of the journal entry.
// The mood of the journal entry.
// Define the keys and value for a JavaScript object that
// represents a journal entry about what you learned today



fetch("http://localhost:8088/entries")
.then(data => data.json())
.then(entries => {
  console.log(entries)
  printJournalEntries(entries)
  })




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