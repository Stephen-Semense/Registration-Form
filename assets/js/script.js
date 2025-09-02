const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let isValid = true;

  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  document
    .querySelectorAll("input, select")
    .forEach((el) => el.classList.remove("input-error"));

  const firstname = form.firstname.value.trim();
  const middlename = form.middlename.value.trim();
  const familyname = form.familyname.value.trim();
  const mobileno = form.mobileno.value.trim();
  const section = form.section.value.trim();
  const batch = form.batch.value.trim();
  const schoolid = form.schoolid.value.trim();
  const technolgy = form.technolgy.value.trim();

  const nameRegex = /^[A-Za-z\s]+$/;

  if (!firstname) {
    setError("firstname", "First name is required.");
    isValid = false;
  } else if (!nameRegex.test(firstname)) {
    setError("firstname", "First name must contain only letters.");
    isValid = false;
  }

  if (!middlename) {
    setError("middlename", "Middle name is required.");
    isValid = false;
  } else if (!nameRegex.test(middlename)) {
    setError("middlename", "Middle name must contain only letters.");
    isValid = false;
  }

  if (!familyname) {
    setError("familyname", "Family name is required.");
    isValid = false;
  } else if (!nameRegex.test(familyname)) {
    setError("familyname", "Family name must contain only letters.");
    isValid = false;
  }

  if (!/^09[0-9]{9}$/.test(mobileno)) {
    setError("mobileno", "Mobile number must start with 09 and be 11 digits.");
    isValid = false;
  }

  if (!/^[1-6][A-Z]$/.test(section)) {
    setError("section", "Section must look like 1A, 2B, etc.");
    isValid = false;
  }

  if (!/^[0-9]{1,2}[A-Z]$/.test(batch)) {
    setError("batch", "Batch must look like 33A.");
    isValid = false;
  }

  if (!/^[0-9]{4}-[0-9]{2}-[0-9]{3}$/.test(schoolid)) {
    setError("schoolid", "School ID must be YYYY-BB-NNN.");
    isValid = false;
  }

  if (!technolgy) {
    setError("technolgy", "Please select a technology.");
    isValid = false;
  }

  if (isValid) {
    form.submit(); 
  }
});

function setError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const errorElement = field.nextElementSibling;
  if (errorElement && errorElement.classList.contains("error")) {
    errorElement.textContent = message;
  }
  field.classList.add("input-error");
}
