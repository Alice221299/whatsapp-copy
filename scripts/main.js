const openProfile = document.querySelector('.profile-picture');
const profile = document.querySelector('.profile');
const closeProfile = document.getElementById('close-profile');
const conversations = document.querySelector('.conversations');
const openSearch = document.getElementById('open-search-module');
const search = document.querySelector('.change-message');
const closeSearch = document.getElementById('close-search-module');

import {openBlock} from "./UI/toggleFunctions.js"
import {closeBlock} from "./UI/toggleFunctions.js"

openBlock(openProfile, profile, conversations)
closeBlock(closeProfile, profile, conversations)

openBlock(openSearch, search)
closeBlock(closeSearch, search)