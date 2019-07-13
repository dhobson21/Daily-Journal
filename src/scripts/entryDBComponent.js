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

    export {newJournalEntry, editedJournalEntry}