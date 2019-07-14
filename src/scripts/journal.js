
import{API} from "./data.js"

import {getAndPrintEntries} from "./entriesDOM.js"
import { saveNewEntryEl, radioDeleteListen, searchJournalEl} from "./eventListeners.js";
import { getMoods } from "./entryToDb.js";



getMoods()
//Initial fetching and posting of journal entries to the DOM
getAndPrintEntries()


//function that puts Event Listener on save new entry button. Adds entry to database and repopulates DOM with all entries
saveNewEntryEl()


//calling function that attaches event Listener to delete buttons dynamically made when entries are generated to the DOM
radioDeleteListen()

//calling function that attaches Event Listener to search input field. Once enter is clicked the value of search input is used to filter entries and post results to dOM
searchJournalEl()
