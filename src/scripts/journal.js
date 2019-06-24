
/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
// objectWithGetterMethod.methodToGetData().then(functionThatRendersData)ournal entry about what you learned today

API.getJournalEntries()
.then(entries => {
    printJournalEntries(entries)
  })




//In your main JavaScript module (journal.js) add a click event listener to the Record Journal Entry button at the bottom of your form.
document.querySelector("#record-entry").addEventListener("click", () => {
  event.preventDefault() //preventDefault overdies HTML default of making POST request in a form with a button
  let recordDate = document.querySelector("#journalDate").value 
  let recordConcepts = document.querySelector("#conceptsCovered").value 
  let recordEntry = document.querySelector("#journalEntry").value
  let recordMood = document.querySelector("#moodForTheDay").value
  if (recordDate === "" || recordConcepts === "" || recordEntry === "") {
  } else 
  {let saveEntry = newJournalEntry(recordDate, recordConcepts, recordEntry, recordMood)
  API.saveJournalEntry(saveEntry) 
  .then(data => API.getJournalEntries () 
  .then(entries => {
    let entryLogContainer = document.querySelector(".entryLog")
    entryLogContainer.innerHTML = ""
      printJournalEntries(entries)
  }))
}
})

  const newJournalEntry = (date, concept, entry, mood) => ({
      "date": date,
      "concepts": concept,
      "entry": entry,
      "mood": mood
    })
  

    

  
     function regexp (input) {
      var regex = /[^a-z, 0-9,(){}:;.]/gi
      input.value = input.value.replace(regex, "")
    }
  





