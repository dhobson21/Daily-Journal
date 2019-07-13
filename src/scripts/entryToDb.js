import {editedJournalEntry} from "./entryDBComponent.js"
import {API} from "./data.js"
import {printJournalEntries, getAndPrintEntries} from "./entriesDom.js"
import { makeMoodSelectChoices } from "./entryComponent.js";

//funnction that saves edited journal entry to the db upon clicking "save edited entry" button with event listener. values of input fields are plugged into object and posted to db because id of object is specified
function saveEntryToDB (id) {
  let editedDate = document.querySelector(`#EditedjournalDate${id}`)
  let editedConcepts =document.querySelector(`#EditedConceptsCovered${id}`)
  let editedEntry =document.querySelector(`#EditedJournalEntry${id}`)
  let editedMood =document.querySelector(`#EditedMoodForTheDay${id}`)
  let editedJEntry = editedJournalEntry (+id, editedDate.value, editedConcepts.value, editedEntry.value, +editedMood.value)
  API.saveEditedEntry(id, editedJEntry)
  .then(getAndPrintEntries)
}

//function that queries the db and filters by search term entered in search input w/ "enter" event listener. Search is not case sensitive and searches every value of the entry object. Search results are prubted to the DOM
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
        mood: entry.mood.label.toLowerCase()


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

function getMoods () {
  API.getMoods()
  .then(moods => {
    console.log("moods", moods)
    makeMoodSelectChoices(moods)
  })
}
export {saveEntryToDB, getAndFilterEntries, getMoods}