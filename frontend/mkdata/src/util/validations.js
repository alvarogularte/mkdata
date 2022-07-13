export const validateEmail = (mail) => mail && /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
  .test(mail);

const SIX = 6;

export const validatePassword = (pass) => pass && pass.length >= SIX;