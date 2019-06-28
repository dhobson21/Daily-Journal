import {makeJournalEntryComponent} from "./entryComponent.js"
import {API} from "./data.js"


function getAndPrintEntries () {
  API.getJournalEntries()
  .then(entries => {
    let entryLogContainer = document.querySelector(".entryLog")
      entryLogContainer.innerHTML = ""
    printJournalEntries(entries)
  })
}

function deleteEntry() {
  let deleteBtnArray = document.querySelectorAll(".delete-btn")
  deleteBtnArray.forEach(deleteBtn => {
    deleteBtn.addEventListener("click", () =>{
      console.log("is this delete")
      let btnId = event.target.id.split("-")[2]
      console.log(btnId)
      API.deleteJournalEntry(btnId)
      .then(data => getAndPrintEntries())
    })
  })
  }

const printJournalEntries = (entries) => {
  let entryLogContainer = document.querySelector(".entryLog")
  entries.forEach( obj => {
    entryLogContainer.innerHTML += makeJournalEntryComponent(obj)
  });
  deleteEntry()
  }



export{printJournalEntries, getAndPrintEntries}




