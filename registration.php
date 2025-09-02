<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname   = htmlspecialchars($_POST['firstname']);
    $middlename  = htmlspecialchars($_POST['middlename']);
    $familyname  = htmlspecialchars($_POST['familyname']);
    $suffix      = htmlspecialchars($_POST['suffix']);
    $mobileno    = htmlspecialchars($_POST['mobileno']);
    $section     = htmlspecialchars($_POST['section']);
    $technolgy   = htmlspecialchars($_POST['technolgy']);
    $batch       = htmlspecialchars($_POST['batch']);
    $schoolid    = htmlspecialchars($_POST['schoolid']);


    header("Location: success.php");
    exit();
}
?>

<!DOCTYPE html>
<html>
  <head>
    <title>Registration Form</title>
    <link rel="stylesheet" href="assets/css/style.css" />
  </head>
  <body>
    <section>
      <div class="container">
        <h2>Registration Form</h2>
        <form id="registrationForm" method="POST" action="registration.php">
          <label for="firstname">First Name</label>
          <input type="text" id="firstname" name="firstname" required />
          <small class="error"></small>

          <label for="middlename">Middle Name</label>
          <input type="text" id="middlename" name="middlename" />
          <small class="error"></small>

          <label for="familyname">Family Name</label>
          <input type="text" id="familyname" name="familyname" required />
          <small class="error"></small>

          <label for="suffix">Suffix</label>
          <select id="suffix" name="suffix">
            <option value="">--Select Suffix--</option>
            <option value="Jr.">Jr.</option>
            <option value="Sr.">Sr.</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
          </select>
          <small class="error"></small>

          <label for="mobileno">Mobile No.</label>
          <input
            type="tel"
            id="mobileno"
            name="mobileno"
            placeholder="09123456789"
            required
          />
          <small class="error"></small>

          <label for="section">Section</label>
          <input type="text" id="section" name="section" placeholder="1A" required />
          <small class="error"></small>

          <label for="technolgy">Technology</label>
          <select id="technolgy" name="technolgy" required>
            <option value="" disabled selected>Select Technology</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Computer Engineering">Computer Engineering</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            <option value="Electronics Engineering">Electronics Engineering</option>
          </select>
          <small class="error"></small>

          <label for="batch">Batch</label>
          <input type="text" id="batch" name="batch" placeholder="33A" required />
          <small class="error"></small>

          <label for="schoolid">School ID (format: YYYY-BB-NNN):</label>
          <input
            type="text"
            id="schoolid"
            name="schoolid"
            placeholder="2023-33-129"
            required
          />
          <small class="error"></small>

          <button type="submit" id="register">Register</button>
        </form>
      </div>
    </section>

    <script src="assets/js/script.js"></script>
  </body>
</html>
