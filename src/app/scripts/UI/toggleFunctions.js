export const openBlock = (clickedEl, openingEl, previousEl = null) => {
    clickedEl.addEventListener('click', () => {
        openingEl.classList.remove('inactive');
        if (previousEl) {
            previousEl.classList.add('inactive')
        }
})
}

export const closeBlock = (clickedEl, closingEl, previousEl = null) => {
    clickedEl.addEventListener('click', () => {
        closingEl.classList.add('inactive');
        if (previousEl) {
            previousEl.classList.remove('inactive')
        }
})
}

export const toggleMenu = (clickedEl, openingEl) => {
    clickedEl.addEventListener('click', () => {
        openingEl.classList.toggle('inactive');
})
}