
import{API} from "./data.js"
import {radioDeleteListen} from "./radio_btns.js"
import {getAndPrintEntries} from "./entriesDOM.js"




//Initial fetching and posting of journal entries to the DOM
getAndPrintEntries()

//event listener on save button that sends entry values to the DB
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



  const newJournalEntry = (date, concept, entry, mood) => ({
    "date": date,
      "concepts": concept,
      "entry": entry,
      "mood": mood
    })


    function editedJournalEntry (id, date, concept, entry, mood) {
      return {
        "id": id,
        "date": date,
        "concepts": concept,
        "entry": entry,
        "mood": mood
      }
      }

    //calling function that attaches event Listener to delete buttons dynamically made when entries are generated to the DOM
    radioDeleteListen()

      export {editedJournalEntry}