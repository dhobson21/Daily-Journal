/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
// objectWithGetterMethod.methodToGetData().then(functionThatRendersData)ournal entry about what you learned today

API.getJournalEntries().then(entries => {
    printJournalEntries(entries)
  })




// Purpose: To create, and return, a string template that
// represents a single journal entry object as HTML

// Arguments: entries (array of objects)


