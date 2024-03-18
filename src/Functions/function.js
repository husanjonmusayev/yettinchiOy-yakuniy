// function validate

export function RegValidate(username, email, password) {
  if (!username.current.value) {
    alert("Username bo'lishi shart");
    return false;
  }
  if (!email.current.value) {
    alert("Username bo'lishi shart");
    return false;
  }
  if (!password.current.value) {
    alert("Password bo'lishi shart");
    return false;
  }

  return true;
}

// clear function

export function clearReg(username, password, email) {
  username.current.value = "";
  password.current.value = "";
  email.current.value = "";
}

// login Validate
export function validate(username, password) {
  if (!username.current.value) {
    alert("Username bo'lishi shart");
    return false;
  }
  if (!password.current.value) {
    alert("Password bo'lishi shart");
    return false;
  }

  return true;
}

// clear function

export function clear(username, password) {
  username.current.value = "";
  password.current.value = "";
}
