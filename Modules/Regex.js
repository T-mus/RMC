//| Mobility check ↓
export function isMobile() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

//| Forms validation ↓
export let formsValidation = {
    // Forms validation -→> Email ↓ 
    checkEmail: function (input) {
        return /^\w+([\._-]?\w+)*@\w+([\._-]?\w+)*(\.[a-zA-Z]{2,8})+$/.test(input);
    },

    // Forms validation -→> Number ↓ 
    checkNumber: function (input) {
        return /^(\+|00)\d{1,3}[- ]?\(?(\d{3})\)?[- ]?\d{3}[- ]?\d{2}[- ]?\d{2}$/.test(input);
    },
}
