export const validatorEmail = (value: string): boolean => {
  const regMail =
    /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z0-9-]{2,6}$/;
  const regMails =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = true;
  if (!value) {
    return isValid;
  }
  if (!regMails.test(value) || !regMail.test(value)) {
    return Boolean(!isValid);
  }
  return isValid;
};