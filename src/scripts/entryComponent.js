// Create your own HTML structure for a journal entry
  const makeJournalEntryComponent = (entries) => {
  return `
    <div class="entry">
    <h1> ${entries.concepts} </h1>
    <h3>${entries.date}</h3>
    <p>${entries.entry}</p>
    <p><strong>${entries.mood}</strong></p>
    <button id=delete-btn-${entries.id} class="delete-btn">Delete Entry</button>
    </div>
  `
}
 export {makeJournalEntryComponent}