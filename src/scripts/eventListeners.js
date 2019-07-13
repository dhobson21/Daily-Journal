import {API} from "./data.js"
import {getAndPrintEntries, printJournalEntries} from "./entriesDOM.js"
import {saveEntryToDB} from "./entryToDb.js"
import {getAndFilterEntries} from "./entryToDb.js"
import {editJournalEntryForm} from "./entryComponent.js"
import {newJournalEntry} from "./entryDBComponent.js"


//event listener on save button that sends entry values to the DB and then fetches entries and posts them to the DOM
function saveNewEntryEl () {

  document.querySelector("#record-entry").addEventListener("click", () => {
    event.preventDefault() //preventDefault overdies HTML default of making POST request in a form with a button
    let recordDate = document.querySelector("#journalDate").value
    let recordConcepts = document.querySelector("#conceptsCovered").value
  let recordEntry = document.querySelector("#journalEntry").value
  let recordMood = document.querySelector("#moodForTheDay").value
  let x = /[^a-zA-Z0-9(){}:;\s.?!,"']/g;
  let conceptTest = recordConcepts.match(x);
  let entryTest = recordEntry.match(x);
  if (recordDate === "" || recordConcepts === "" || recordEntry === "") {
    return;
  }
   else if (conceptTest !== null || entryTest !== null) {
    return;
  }else
  {let saveEntry = newJournalEntry(recordDate, recordConcepts, recordEntry, recordMood)
    API.saveJournalEntry(saveEntry)
    .then(data => getAndPrintEntries())
  }
})
}

//function to put event listeners on delete buttons that delete from database and update the DOM
function deleteEntry() {
  let deleteBtnArray = document.querySelectorAll(".delete-btn")
  deleteBtnArray.forEach(deleteBtn => {

    deleteBtn.addEventListener("click", () =>{
      let x = confirm("Are you sure you want to delete entry?")
      if (x) {
        let deleteBtnId = event.target.id.split("-")[2]
        API.deleteJournalEntry(deleteBtnId)
        .then(data => getAndPrintEntries())
      }
      })
  })
}



//event listener on the edit entry button that populates an input form below the entery
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
          let entryDraft = document.querySelector(`.entry-${editBtnId}`)
          let editSection = document.createElement("section")
          editSection.setAttribute("id", `edit-section-${editBtnId}`)
          entryDraft.appendChild(editSection)
          editSection.innerHTML = editJournalEntryForm (entry)
          saveEditedEntry(editBtnId)
        })
      })
    })
      }

//event listener on save buttons in edit entry form which edits the object and PUT's to the db
      function saveEditedEntry (idNumb) {
        let saveEditBtn = document.querySelector(`#saveEditedEntry-${idNumb}`)
        saveEditBtn.addEventListener("click", () => {
          event.preventDefault()
          saveEntryToDB(idNumb)
        })
      }


// function on search bar that filters entries by search term and returns them to the DOM
      function searchJournalEl () {
        let searchInput = document.querySelector("#searchInput")
        searchInput.addEventListener("keypress",function (e) {
          var key = e.which || e.keyCode;
          if (key === 13) { // 13 is enter
            // code for enter
            let searchInputValue = searchInput.value.toLowerCase()
            getAndFilterEntries(searchInputValue)

      }
      })
      }


//function that places Event Listeners on Radio Buttons that filter DOM entries by mood
function radioDeleteListen () {
  let radioButtons = document.getElementsByName("moodBtn");
radioButtons.forEach(radioButton => {
  radioButton.addEventListener("click", event => {
    const mood = event.target.value;
    let entryLogContainer = document.querySelector(".entryLog")
    entryLogContainer.innerHTML = "";


    //The most straightforward way of doing this is to invoke the getJournalEntries() method on your data manager object - which will get all entries - and then use the filter() array method to extract only the entries that have the same mood as the one the user clicked on.

API.getJournalEntries()
    .then(entries => {
      let moodEntries = [];
      entries.filter(entry => {
        if (entry.mood === mood) {
          moodEntries.push(entry);
          //Once you have filtered the entries by mood, invoke the function that renders the HTML representations to the DOM and pass it the filtered array of entries.
          printJournalEntries(moodEntries);
        }
      });
    });
  });
});
}


  export {deleteEntry, editEntry, saveEditedEntry, searchJournalEl, saveNewEntryEl, radioDeleteListen}
