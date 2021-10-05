
export const validateRegister = (defaultFields: any, fields: any) => {
  const fieldErrors = {...defaultFields};
  let formIsValid = true;
  if (typeof fields["first"] !== "undefined") {
    const pattern = /^[a-zA-Z._-]+$/;
    if (!pattern.test(fields["first"])) {
      formIsValid = false;
      fieldErrors["first"] = "First name is not valid";
    }
  }
  if (typeof fields["last"] !== "undefined") {
    const pattern = /^[a-zA-Z._-]+$/;
    if (!pattern.test(fields["last"])) {
      formIsValid = false;
      fieldErrors["last"] = "Last name is not valid";
    }
  }

  if (!fields["email"]) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(fields["email"])) {
      formIsValid = false;
      fieldErrors["email"] = "Email is not valid";
    }
  }

  if (typeof fields["address"] !== "undefined") {
    const pattern = /^[a-zA-Z0-9 ._-]+[a-zA-Z0-9 .-]+$/;
    if (!pattern.test(fields["address"])) {
      formIsValid = false;
      fieldErrors["address"] = "Street Address is not valid";
    }
  }

  if (typeof fields["city"] !== "undefined") {
    const pattern = /^[a-zA-Z._-]+$/;
    if (!pattern.test(fields["city"])) {
      formIsValid = false;
      fieldErrors["city"] = "City is not valid";
    }
  }

  if (!fields["province"]) {
    formIsValid = false;
    fieldErrors["province"] = "State/Province is required";
  }

  if (typeof fields["zip"] !== "undefined") {
    const pattern = /^[0-9]+$/;
    if (!pattern.test(fields["zip"])) {
      formIsValid = false;
      fieldErrors["zip"] = "Zip/Postal is not valid";
    }
  }

  if (typeof fields["birthday"] !== "undefined") {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 18);
    const birthday = new Date(fields["birthday"]);

    if (isNaN(birthday.getTime()) || today < birthday) {
      
      formIsValid = false;
      fieldErrors["birthday"] = "Must old than 18 years";
    }
  }

  if (typeof fields["gender"] !== "undefined") {
    if (fields["gender"] == "" || fields["gender"] == null) {
      formIsValid = false;
      fieldErrors["gender"] = "Gender is required";
    }
  }

  return {formIsValid, fieldErrors};
}