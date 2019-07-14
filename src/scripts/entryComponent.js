// Create your own HTML structure for a journal entry
function makeMoodSelectChoices (moods) {
  moods.forEach(mood => {
    let moodSelect = document.querySelector("#moodForTheDay")
    let valueArr = []
    for(let foo of Object.values(mood))
    valueArr.push(foo)
    let moodOpt = document.createElement("option")
    moodOpt.setAttribute("value", +`${valueArr[0]}`)
    moodOpt.textContent = `${valueArr[1]}`
    moodSelect.appendChild(moodOpt)

  })
}
//creates option choices for edit form's moods that also selects the entry's mood as the default choice to be edited--LOOK AT CALUSE OF MmoodOpt
function makeEditedMoodSelectChoices (mood, entry) {

    let moodSelect = document.querySelector(`#EditedMoodForTheDay${entry.id}`)
    let valueArr = []
    let entryArr = []
    for(let foo of Object.values(mood))
    valueArr.push(foo)
    for(let bar of Object.values(entry.mood))
    entryArr.push(bar)
    let moodOpt = `<option value = ${valueArr[0]} class = editMoodOpts${entry.id}-${valueArr[0]}>${valueArr[1]}</option>`


    //setting value of option to placeId, space, and conditional that selects mood as default choice if mood was the value of entryMood

    // moodOpt.textContent = `${valueArr[1]}`
    moodSelect.innerHTML += moodOpt
    selectEditedMoodChoices(entry, valueArr[0])

}

function selectEditedMoodChoices(entry, id) {
  let Entryid = +(entry.moodId)
  let option = document.querySelector(`.editMoodOpts${entry.id}-${id}`)
  if (+entry.moodId === +option.value) {
   option.setAttribute("selected", "selected")
  }

}

function entryBackground (entry) {
    let entryContainer = document.querySelector(`#entry-${entry.mood.label}-${entry.id}`)
    if (entry.mood.label === "Happy") {
      entryContainer.setAttribute("class", `Jentry${entry.id} bg-success`)
    }
    else if (entry.mood.label === "Determined") {
      entryContainer.setAttribute("class", `Jentry${entry.id} bg-info`)
    }
    else if (entry.mood.label === "Frustrated") {
      entryContainer.setAttribute("class", `Jentry${entry.id} bg-danger`)
    }
else (
      entryContainer.setAttribute("class", `Jentry${entry.id} bg-warning`)
)
}

const makeJournalEntryComponent = (entries) => {
let entryDate = entries.date
 let m = entryDate.split("-")[1]
    let d = entryDate.split("-")[2]
    let y = entryDate.split("-")[0]
    let date = `${m}/${d}/${y}`


  return `
  <div class="Jentry${entries.id} card" id = "entry-${entries.mood.label}-${entries.id}">
  <hr class="col-xs-12">
    <h1 id="concepts-${entries.id}" class = "text-center"> ${entries.concepts} </h1>
    <h3 class = "text-center">${date}</h3>
    <p>${entries.entry}</p>
    <p class = "text-center"><strong>${entries.mood.label}</strong></p>
    <button id=delete-btn-${entries.id} class="delete-btn btn-dark">Delete Entry</button>
    <button id=editBtn-${entries.id} class="edit-btn btn-light" >Edit Entry</button>
    </div>
  `
}

//function that creates html of edit entry form that is appended to entry container once "edit entry" button is clicked and event listner calls form
function editJournalEntryForm (entry) {
return `
<form action="" class="edit-form">
<fieldset>
<label for="journalDate">Date of Entry</label>
<input type="date" name="journalDate" id="EditedjournalDate${entry.id}" class="label " required value = "${entry.date}">
</fieldset>
</form>
<form action="" class="form">
<fieldset>
    <label for="conceptsCovered">Concepts Covered</label>
    <input required type="text" name="conceptsCovered" id="EditedConceptsCovered${entry.id}" class="label " value = "${entry.concepts}">
</fieldset>
</form>
<form action="">
<fieldset>
    <label for="jornalEntry">Journal Entry</label>
    <textarea required Rows="8" id="EditedJournalEntry${entry.id}" name="JornalEntry">${entry.entry}</textarea>
</fieldset>
</form>
<form action="" class="form">
<fieldset class="tiger">
    <label for="moodForTheDay">Mood for the Day</label>
    <select required name="moodForTheDay" id="EditedMoodForTheDay${entry.id}" class="label " selected>


    </select>
</fieldset>
<button id="saveEditedEntry-${entry.id}" class = "saveEditedEntry btn-primary">Save Journal Entry</button>
</form>
`
}




 export {makeJournalEntryComponent, editJournalEntryForm, makeMoodSelectChoices, makeEditedMoodSelectChoices, entryBackground}