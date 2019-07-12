import {makeJournalEntryComponent, editJournalEntryForm} from "./entryComponent.js"
import {API} from "./data.js"
import {editedJournalEntry} from "./journal.js"


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
      let deleteBtnId = event.target.id.split("-")[2]
      console.log(deleteBtnId)
      API.deleteJournalEntry(deleteBtnId)
      .then(data => getAndPrintEntries())
    })
  })
  }



  function editEntry() {
let editBtnArray = document.querySelectorAll(".edit-btn")
editBtnArray.forEach(editBtn => {
  editBtn.addEventListener( "click", event => {
    event.preventDefault()
    const editBtnId = event.target.id.split("-")[1]
    // document.getElementById(`editBtn-${editBtnId}`).style.visibility = "hidden"
    editBtn.disabled=true
    API.getJournalEntry(editBtnId)
    .then (entry => {
      console.log(entry)
      console.log("editBtnId", editBtnId)
      let entryDraft = document.querySelector(`.entry-${editBtnId}`)
      // let entryDraftConcepts = entryDraft.("concepts-${editBtnId}")
      // console.log(entryDraftConcepts)
      console.log(entryDraft)
      let editSection = document.createElement("section")
      editSection.setAttribute("id", `edit-section-${editBtnId}`)
      entryDraft.appendChild(editSection)
      editSection.innerHTML = editJournalEntryForm (entry)
      saveEditedEntry(editBtnId)
    })
  })
})
  }

const printJournalEntries = (entries) => {
  let entryLogContainer = document.querySelector(".entryLog")
  entries.forEach( obj => {
    entryLogContainer.innerHTML += makeJournalEntryComponent(obj)
  });
  deleteEntry()
  editEntry()
}


function saveEditedEntry (idNumb) {
  let saveEditBtn = document.querySelector(`#saveEditedEntry-${idNumb}`)
  saveEditBtn.addEventListener("click", () => {
    event.preventDefault()
    saveEntryToDB(idNumb)



})
}

function saveEntryToDB (id) {
  let editedDate = document.querySelector(`#EditedjournalDate${id}`)
  let editedConcepts =document.querySelector(`#EditedConceptsCovered${id}`)
  let editedEntry =document.querySelector(`#EditedJournalEntry${id}`)
  let editedMood =document.querySelector(`#EditedMoodForTheDay${id}`)
  console.log("date value", editedDate.value)
  console.log("concept value", editedConcepts.value)
  console.log("entry value", editedEntry.value)
  console.log("mood value", editedMood.value)
  let editedJEntry = editedJournalEntry (+id, editedDate.value, editedConcepts.value, editedEntry.value, editedMood.value)
  API.saveEditedEntry(id, editedJEntry)
  .then(getAndPrintEntries)
}

export{printJournalEntries, getAndPrintEntries}




