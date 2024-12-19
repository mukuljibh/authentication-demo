export const nameRegix = /[A-Za-z]{3}([A-Za-z]+ ?)*/;

export const emailRegix = /^[^@]+@[^@]+\.[^@]+$/;

export const passwordRegix = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

export const phoneRegix = /^[1-9]{1}[0-9]{9}$/;

export const usernameRegix = /^[a-zA-Z0-9_]{3,16}$/;