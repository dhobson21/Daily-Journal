// Create your own HTML structure for a journal entry
  const makeJournalEntryComponent = (entries) => {
  return `
    <div class="entry-${entries.id}">
    <h1 id="concepts-${entries.id}"> ${entries.concepts} </h1>
    <h3>${entries.date}</h3>
    <p>${entries.entry}</p>
    <p><strong>${entries.mood}</strong></p>
    <button id=delete-btn-${entries.id} class="delete-btn">Delete Entry</button>
    <button id=editBtn-${entries.id} class="edit-btn">Edit Entry</button>
    </div>
  `
}

//function that creates html of edit entry form that is appended to entry container once "edit entry" button is clicked and event listner calls form
function editJournalEntryForm (entry) {
return `
<form action="" class="edit-form">
<fieldset>
<label for="journalDate">Date of Entry</label>
<input type="date" name="journalDate" id="EditedjournalDate${entry.id}" class="label" required value = "${entry.date}">
</fieldset>
</form>
<form action="" class="form">
<fieldset>
    <label for="conceptsCovered">Concepts Covered</label>
    <input required type="text" name="conceptsCovered" id="EditedConceptsCovered${entry.id}" class="label" value = "${entry.concepts}">
</fieldset>
</form>
<form action="" class="form">
<fieldset>
    <label for="jornalEntry">Journal Entry</label>
    <textarea required Rows="5" columns="25" id="EditedJournalEntry${entry.id}" class="label" name="JornalEntry">${entry.entry}</textarea>
</fieldset>
</form>
<form action="" class="form">
<fieldset class="tiger">
    <label for="moodForTheDay">Mood for the Day</label>
    <select required name="moodForTheDay" id="EditedMoodForTheDay${entry.id}" class="label" selected>
        <option value="Happy" ${entry.mood === "Happy" ? "selected" : ""}>Happy</option>
        <option value="Determined" ${entry.mood === "Determined" ? "selected" : ""}>Determined</option>
        <option value="Frustrated" ${entry.mood === "Frustrated" ? "selected" : ""}>Frustrated</option>
        <option value="Confused" ${entry.mood === "Confused" ? "selected" : ""}>Confused</option>

    </select>
</fieldset>
<button id="saveEditedEntry-${entry.id}" class = "saveEditedEntry">Save Journal Entry</button>
</form>
`
}




 export {makeJournalEntryComponent, editJournalEntryForm}