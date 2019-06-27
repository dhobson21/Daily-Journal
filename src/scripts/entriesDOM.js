
  let entryLogContainer = document.querySelector(".entryLog")
const printJournalEntries = (entries) => {
  entries.forEach( obj => {
    entryLogContainer.innerHTML += makeJournalEntryComponent(obj)});
  }







