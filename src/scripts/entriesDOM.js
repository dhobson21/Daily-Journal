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
  entryLogContainer.innerHTML = ""
  entries.forEach( obj => {
    entryLogContainer.innerHTML += makeJournalEntryComponent(obj)
  });
  deleteEntry()
  editEntry()
  searchJournalEl()
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

function searchJournalEl () {
  let searchInput = document.querySelector("#searchInput")
  searchInput.addEventListener("keypress",function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      // code for enter
      let searchInputValue = searchInput.value.toLowerCase()
      console.log(searchInputValue)
      getAndFilterEntries(searchInputValue)

}
})
}

function getAndFilterEntries (searchTerm) {
  let searchResults = []
  let entryLogContainer = document.querySelector(".entryLog")
  API.getJournalEntries()
  .then(entries => {
    entries.forEach(entry => {
    //put entry in lowercase so you can search by upper and lowercase
      let lowerCaseEntry = {
        date: entry.date,
        title: entry.concepts.toLowerCase(),
        text: entry.entry.toLowerCase(),
        mood: entry.mood.toLowerCase()

    };
    for (const x of Object.values(lowerCaseEntry)) {
      if (
        x.includes(searchTerm) === true &&
        !searchResults.includes(entry)
      ) {
        searchResults.push(entry);
      }
    }
  });
  entryLogContainer = ""
  printJournalEntries(searchResults)
})
}

export{printJournalEntries, getAndPrintEntries}




