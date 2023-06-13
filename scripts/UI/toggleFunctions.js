export const openBlock = (clickedEl, openingEl, previousEl) => {
    clickedEl.addEventListener('click', () => {
        openingEl.classList.remove('inactive');
        previousEl.classList.add('inactive')
})
}

export const closeBlock = (clickedEl, closingEl, previousEl) => {
    clickedEl.addEventListener('click', () => {
        closingEl.classList.add('inactive');
        previousEl.classList.remove('inactive')
})
}
