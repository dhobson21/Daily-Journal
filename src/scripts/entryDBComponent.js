const newJournalEntry = (date, concept, entry, mood) => ({
  "date": date,
    "concepts": concept,
    "entry": entry,
    "moodId": mood
  })


  function editedJournalEntry (id, date, concept, entry, mood) {
    return {
      "id": id,
      "date": date,
      "concepts": concept,
      "entry": entry,
      "moodId": mood
    }
    }

    export {newJournalEntry, editedJournalEntry}