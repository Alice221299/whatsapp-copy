export const printUsers = (array, container) => {
    container.innerHTML = '';
    array.forEach((user) => {
        container.innerHTML += `
        <div class="chat" id="${user.id}">
            <figure class="profile-picture">
                <img src="${user.profilePicture}" alt="${user.name}">
            </figure>
            <div class="chat-all">
                <div class="chat-info">
                    <h3>${user.name}</h3>
                    <p>Wednesday</p>
                </div>
                <div class="chat-message">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1.5 12.5L5.57574 16.5757C5.81005 16.8101 6.18995 16.8101 6.42426 16.5757L9 14" stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round"></path> <path d="M16 7L12 11" stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 12L11.5757 16.5757C11.8101 16.8101 12.1899 16.8101 12.4243 16.5757L22 7" stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
            </div>
        </div>  `  })}