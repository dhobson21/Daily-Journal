
const printJournalEntries = (entries) => {
  let entryLogContainer = document.querySelector(".entryLog")
  entries.forEach( function(obj) {
    entryLogContainer.innerHTML += makeJournalEntryComponent(obj)});
  }