const makeJournalEntryComponent = (entries) => {
  // Create your own HTML structure for a journal entry
  return `
    <div class="entry">
    <h1> ${entries.concepts} </h1>
    <h3>${entries.date}</h3>
    <p>${entries.entry}</p>
    <p><strong>${entries.mood}</strong></p>
</div>
  `
}
