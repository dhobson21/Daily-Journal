const API = {
  getJournalEntries: function() {
    return fetch("http://localhost:3000/entries")
    .then(response => response.json()
    );
  }
};