import {makeJournalEntryComponent} from "./entryComponent.js"
import {API} from "./data.js"
import{deleteEntry, editEntry} from "./eventListeners.js"


function getAndPrintEntries () {
  API.getJournalEntries()
  .then(entries => {
    let entryLogContainer = document.querySelector(".entryLog")
      entryLogContainer.innerHTML = ""
    printJournalEntries(entries)
  })
}







const printJournalEntries = (entries) => {
  let entryLogContainer = document.querySelector(".entryLog")
  entryLogContainer.innerHTML = ""
  entries.forEach( obj => {
    entryLogContainer.innerHTML += makeJournalEntryComponent(obj)
  });
  deleteEntry()
  editEntry()

}












export{printJournalEntries, getAndPrintEntries}




