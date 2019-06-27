//Now, you could attach the event listeners to each individually. You could also use the document.getElementsByName() method, and a forEach() to add them more dynamically.
let radioButtons = document.getElementsByName("moodBtn");
console.log(radioButtons);
radioButtons.forEach(radioButton => {
  radioButton.addEventListener("click", event => {
    console.log(event);
    const mood = event.target.value;
    entryLogContainer.innerHTML = "";


//The most straightforward way of doing this is to invoke the getJournalEntries() method on your data manager object - which will get all entries - and then use the filter() array method to extract only the entries that have the same mood as the one the user clicked on.
    API.getJournalEntries()
    .then(entries => {
      entries.filter(entry => {
        let moodEntries = [];
        if (entry.mood === mood) {
          moodEntries.push(entry);
          //Once you have filtered the entries by mood, invoke the function that renders the HTML representations to the DOM and pass it the filtered array of entries.
          printJournalEntries(moodEntries);
        }
      });
    });
  });
});
