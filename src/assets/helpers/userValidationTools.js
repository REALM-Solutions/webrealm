export function validateName(name, errorSpan) {
   if (name.length < 3 || name.length > 15) {
      errorSpan('Please enter a valid name, at least 3 characters long, but no longer than 15 characters')
      return false;
   }
   return true;
}

export function validatePassword(password, passwordVerification, errorSpan) {
   const invalidCharRegularExpression = /^\w+$/;
   const lowercaseRegularExpression = /[a-z]/;
   const uppercaseRegularExpression = /[A-Z]/;
   const numberRegularExpression = /[0-9]/;
   if (password.length < 3 || password.length > 15) {
      errorSpan('Please enter a password, at least 3 characters long, but no longer than 15 characters')
      return false;
   }
   if (passwordVerification.length < 3 || passwordVerification.length > 15) {
      errorSpan('Please enter a password, at least 3 characters long, but no longer than 15 characters')
      return false;
   }

   if (password !== passwordVerification) {
      errorSpan('A valid password, containing at least one number, at least one capital letter, and at least one more character of letters, numbers or underscores.')
      return false;
   } else if (!invalidCharRegularExpression.test(password)) {
      errorSpan('A valid password, containing at least one number, at least one capital letter, and at least one more character of letters, numbers or underscores.')
      return false;
   } else if (!lowercaseRegularExpression.test(password)) {
      errorSpan('A valid password, containing at least one number, at least one capital letter, and at least one more character of letters, numbers or underscores.')
      return false;
   } else if (!uppercaseRegularExpression.test(password)) {
      errorSpan('A valid password, containing at least one number, at least one capital letter, and at least one more character of letters, numbers or underscores.')
      return false;
   } else if (!numberRegularExpression.test(password)) {
      errorSpan('A valid password, containing at least one number, at least one capital letter, and at least one more character of letters, numbers or underscores.')
      return false;
   }

   return true;
}

export function validateEmail(email, errorSpan) {
   const validEmailRegularExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   const eduEmailRegularExpression = /^[a-zA-Z0-9._%+-]+@[msudenver|cudenver|ccd]+\.edu$/
   if (!validEmailRegularExpression.test(email)) {
      errorSpan('Please enter a valid .edu email')
      return false;
   } else if (!eduEmailRegularExpression.test(email)) {
      errorSpan('Please enter a valid msusenver.edu, cudenver.edu, or ccd.edu email')
      return false;
   }

   return true;
}