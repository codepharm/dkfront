// returns false invalid email is invalid
export default function checkEmail(email) {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  .test(email)) {
    return false;
  }
  return true
}
