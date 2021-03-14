function save(slot, value) {
    localStorage.setItem('wishing-fish-clock-' + slot, JSON.stringify(value));
}

function load(slot) {
    const value = localStorage.getItem('wishing-fish-clock-' + slot);
    return JSON.parse(value);
}

export { save, load };
