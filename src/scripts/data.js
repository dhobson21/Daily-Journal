const API = {
  getJournalEntries () {
    return fetch("http://localhost:3000/entries")
    .then(response => response.json()
    );
  },
  saveJournalEntry (newEntry) {
    return fetch("http://localhost:3000/entries", {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify(newEntry)
});
},
deleteJournalEntry (id) {
  return fetch(`http://localhost:3000/entries/${id}`, {
  method: "DELETE",
  headers: {
  "Content-Type": "application/json"
  },
})
.then( data => data.json())
}
}

export {API}