import { DateTime } from "luxon";

export const printMessages = (object, container) => {
    container.innerHTML = '';
    object.messages.forEach((item) => {
        if (object.idUser1 === item.sentBy) {
        container.innerHTML += `
        <div class="message-received">
            <svg class="triangle received" width="40px" height="40px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <title>icon/18/icon-triangle</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="out" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <path d="M4,7 L9,13 L14,7 L4,7 L4,7 Z" id="path" fill="#FFF" sketch:type="MSShapeGroup"> </path> </g> </g>
            </svg>
            <svg class="message-options" data-id="${item.id}" fill="#343434" width="10px" height="10px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.15 28.012v-0.85c0.019-0.069 0.050-0.131 0.063-0.2 0.275-1.788 1.762-3.2 3.506-3.319 1.95-0.137 3.6 0.975 4.137 2.787 0.069 0.238 0.119 0.488 0.181 0.731v0.85c-0.019 0.056-0.050 0.106-0.056 0.169-0.269 1.65-1.456 2.906-3.081 3.262-0.125 0.025-0.25 0.063-0.375 0.094h-0.85c-0.056-0.019-0.113-0.050-0.169-0.056-1.625-0.262-2.862-1.419-3.237-3.025-0.037-0.156-0.081-0.3-0.119-0.444zM20.038 3.988l-0 0.85c-0.019 0.069-0.050 0.131-0.056 0.2-0.281 1.8-1.775 3.206-3.538 3.319-1.944 0.125-3.588-1-4.119-2.819-0.069-0.231-0.119-0.469-0.175-0.7v-0.85c0.019-0.056 0.050-0.106 0.063-0.162 0.3-1.625 1.244-2.688 2.819-3.194 0.206-0.069 0.425-0.106 0.637-0.162h0.85c0.056 0.019 0.113 0.050 0.169 0.056 1.631 0.269 2.863 1.419 3.238 3.025 0.038 0.15 0.075 0.294 0.113 0.437zM20.037 15.575v0.85c-0.019 0.069-0.050 0.131-0.063 0.2-0.281 1.794-1.831 3.238-3.581 3.313-1.969 0.087-3.637-1.1-4.106-2.931-0.050-0.194-0.094-0.387-0.137-0.581v-0.85c0.019-0.069 0.050-0.131 0.063-0.2 0.275-1.794 1.831-3.238 3.581-3.319 1.969-0.094 3.637 1.1 4.106 2.931 0.050 0.2 0.094 0.394 0.137 0.588z"></path>
            </svg>
            <div class="options-container inactive message--${item.id}">
                <p class="edit">Edit</p>
                <textarea name="" id="" cols="10" rows="10" class="inactive"></textarea>
                <p class="delete">Delete</p>
            </div>
            <p>${item.message}</p>
            <span>${item.hour}</span>
        </div>
        `  }
        else {
            container.innerHTML += `
            <div class="message-sent">
                <svg class="triangle sent" class="triangle received" width="40px" height="40px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                    <g id="SVGRepo_iconCarrier"> <title>icon/18/icon-triangle</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="out" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <path d="M4,7 L9,13 L14,7 L4,7 L4,7 Z" id="path" fill="#E1F6CB" sketch:type="MSShapeGroup"> </path> </g> </g>
                </svg>
                <svg class="message-options" data-id="${item.id}" fill="#343434" width="10px" height="10px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.15 28.012v-0.85c0.019-0.069 0.050-0.131 0.063-0.2 0.275-1.788 1.762-3.2 3.506-3.319 1.95-0.137 3.6 0.975 4.137 2.787 0.069 0.238 0.119 0.488 0.181 0.731v0.85c-0.019 0.056-0.050 0.106-0.056 0.169-0.269 1.65-1.456 2.906-3.081 3.262-0.125 0.025-0.25 0.063-0.375 0.094h-0.85c-0.056-0.019-0.113-0.050-0.169-0.056-1.625-0.262-2.862-1.419-3.237-3.025-0.037-0.156-0.081-0.3-0.119-0.444zM20.038 3.988l-0 0.85c-0.019 0.069-0.050 0.131-0.056 0.2-0.281 1.8-1.775 3.206-3.538 3.319-1.944 0.125-3.588-1-4.119-2.819-0.069-0.231-0.119-0.469-0.175-0.7v-0.85c0.019-0.056 0.050-0.106 0.063-0.162 0.3-1.625 1.244-2.688 2.819-3.194 0.206-0.069 0.425-0.106 0.637-0.162h0.85c0.056 0.019 0.113 0.050 0.169 0.056 1.631 0.269 2.863 1.419 3.238 3.025 0.038 0.15 0.075 0.294 0.113 0.437zM20.037 15.575v0.85c-0.019 0.069-0.050 0.131-0.063 0.2-0.281 1.794-1.831 3.238-3.581 3.313-1.969 0.087-3.637-1.1-4.106-2.931-0.050-0.194-0.094-0.387-0.137-0.581v-0.85c0.019-0.069 0.050-0.131 0.063-0.2 0.275-1.794 1.831-3.238 3.581-3.319 1.969-0.094 3.637 1.1 4.106 2.931 0.050 0.2 0.094 0.394 0.137 0.588z"></path>
                </svg>
                <div class="options-container inactive message--${item.id}">
                    <p class="edit">Edit</p>
                    <textarea name="" id="" cols="10" rows="10" class="inactive"></textarea>
                    <p class="delete">Delete</p>
                </div>
                <p>${item.message}</p>
                <div class="message-date-sent">
                    <span>${item.hour}</span>
                    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1.5 12.5L5.57574 16.5757C5.81005 16.8101 6.18995 16.8101 6.42426 16.5757L9 14" stroke="#2EA3F2" stroke-width="1.5" stroke-linecap="round"></path> <path d="M16 7L12 11" stroke="#2EA3F2" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 12L11.5757 16.5757C11.8101 16.8101 12.1899 16.8101 12.4243 16.5757L22 7" stroke="#2EA3F2" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
            </div>
            `
        }
    })

openOptions()
}


const openOptions = () => {
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("message-options")) {
            const idMessage = event.target.getAttribute("data-id");
            const actions = document.querySelector(`.message--${idMessage}`);
            actions.classList.toggle("inactive");
        }
    })
}

