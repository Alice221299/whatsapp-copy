export const printUserPicture = (user, container) => {
    container.innerHTML = '';
    container.innerHTML += `
    <img src="${user.profilePicture}" alt="${user.name}">
    `
}

export const printUserName = (user, container) => {
    container.innerHTML = '';
    container.innerHTML += `
    <p>${user.name}</p>
    `
}