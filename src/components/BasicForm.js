import useInputRecreation from "./hooks/use-input-recreation";

const BasicForm = (props) => {
      const {
            value: enteredFirstName,
            isValid: firstNameIsValid,
            hasError: firstNameHasError,
            valueChangeHandler: firstNameChangedHandler,
            inputBlurHandler: firstNameBlurHandler,
            reset: resetFirstNameInput,
      } = useInputRecreation((value) => value.trim() !== "");

      const {
            value: enteredLastName,
            isValid: lastNameIsValid,
            hasError: lastNameHasError,
            valueChangeHandler: lastNameChangedHandler,
            inputBlurHandler: lastNameBlurHandler,
            reset: resetLastNameInput,
      } = useInputRecreation((value) => value.trim() !== "");

      const {
            value: enteredEmail,
            isValid: emailIsValid,
            hasError: emailHasError,
            valueChangeHandler: emailChangedHandler,
            inputBlurHandler: emailBlurHandler,
            reset: resetEmailInput,
      } = useInputRecreation(
            (value) => value.trim().length > 5 && value.includes("@")
      );

      let formIsValid = false;
      if (firstNameIsValid && lastNameIsValid && emailIsValid) {
            formIsValid = true;
      }

      const formSubmissionHandler = (event) => {
            event.preventDefault();
            if (!formIsValid) {
                  return;
            }
            resetFirstNameInput();
            resetLastNameInput();
            resetEmailInput();
      };

      const firstNameInputClasses = firstNameHasError
            ? "form-control invalid"
            : "form-control";
      const lastNameInputClasses = lastNameHasError
            ? "form-control invalid"
            : "form-control";
      const emailInputClasses = emailHasError
            ? "form-control invalid"
            : "form-control";

      return (
            <form onSubmit={formSubmissionHandler}>
                  <div className="control-group">
                        <div className={firstNameInputClasses}>
                              <label htmlFor="name">First Name</label>
                              <input
                                    type="text"
                                    id="name"
                                    onChange={firstNameChangedHandler}
                                    onBlur={firstNameBlurHandler}
                                    value={enteredFirstName}
                              />
                              {firstNameHasError && (
                                    <p className={"error-text"}>
                                          Please enter a valid last name.
                                    </p>
                              )}
                        </div>
                        <div className={lastNameInputClasses}>
                              <label htmlFor="name">Last Name</label>

                              <input
                                    type="text"
                                    id="name"
                                    onChange={lastNameChangedHandler}
                                    onBlur={lastNameBlurHandler}
                                    value={enteredLastName}
                              />
                              {lastNameHasError && (
                                    <p className={"error-text"}>
                                          Please enter a valid last name.
                                    </p>
                              )}
                        </div>
                  </div>
                  <div className={emailInputClasses}>
                        <label htmlFor="name">E-Mail Address</label>

                        <input
                              type="email"
                              id="email"
                              onChange={emailChangedHandler}
                              onBlur={emailBlurHandler}
                              value={enteredEmail}
                        />
                        {emailHasError && (
                              <p className={"error-text"}>
                                    Please enter a valid email address.
                              </p>
                        )}
                  </div>
                  <div className="form-actions">
                        <button disabled={!formIsValid}>Submit</button>
                  </div>
            </form>
      );
};

export default BasicForm;
