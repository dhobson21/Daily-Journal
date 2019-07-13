const API = {
  getJournalEntries () {
    return fetch("http://localhost:3000/entries?_expand=mood")
    .then(response => response.json()
    );
  },
  getMoods () {
    return fetch("http://localhost:3000/moods")
    .then(response => response.json()
    );
  },
  getJournalEntry (id) {
  return fetch(`http://localhost:3000/entries/${id}?_expand=mood`)
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
saveEditedEntry (id, objectContainingNewProperties) {
    return fetch(`http://localhost:3000/entries/${id}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(objectContainingNewProperties)
})
    .then(res => res.json())
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