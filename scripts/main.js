const openProfile = document.querySelector('.profile-picture');
const profile = document.querySelector('.profile');
const closeProfile = document.getElementById('close-profile');
const conversations = document.querySelector('.conversations');
const openSearch = document.getElementById('open-search-module');
const search = document.querySelector('.change-message');
const closeSearch = document.getElementById('close-search-module');
const buttonOptions = document.querySelector('.message-options');
const openOptions = document.querySelector('.options-container');
const changeImage = document.querySelector('.image');
const inputNewImage = document.querySelector('.image-input');
const changeName = document.querySelector('.change-name');
const inputNewName = document.querySelector('.name-input')

import {openBlock} from "./UI/toggleFunctions.js"
import {closeBlock} from "./UI/toggleFunctions.js"
import {toggleMenu} from "./UI/toggleFunctions.js"

openBlock(openProfile, profile, conversations)
closeBlock(closeProfile, profile, conversations)

openBlock(openSearch, search)
closeBlock(closeSearch, search)

toggleMenu(buttonOptions, openOptions)

toggleMenu(changeImage, inputNewImage)

toggleMenu(changeName, inputNewName)