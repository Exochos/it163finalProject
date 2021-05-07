<?php
    session_start();
    require_once 'includes/credentials.php';

    $firstname = '';
    $lastname = '';
    $email = '';
    $username = '';
    $errors = array();
    $success = 'You are not logged in!';

    // Connect to the database
    $db = mysqli_connect("localhost", $DB_USER,$DB_PASSWORD,$DB_NAME);

    if (isset($_POST['reg_user'])) {

        // Get data //

        $firstname = mysqli_real_escape_string($db, $_POST['firstname']);
        $lastname = mysqli_real_escape_string($db, $_POST['lastname']);
        $email = mysqli_real_escape_string($db, $_POST['email']);
        $username = mysqli_real_escape_string($db, $_POST['username']);
        $password_1 = mysqli_real_escape_string($db, $_POST['password_1']);
        $password_2 = mysqli_real_escape_string($db, $_POST['password_2']);

        // Array_push function //
        // array_push();  //
        if (empty($firstname)) {
            array_push($errors,'Please enter your First name');
        }
        if (empty($lastname)) {
            array_push($errors,'Please enter your Last name');
        }
        if (empty($email)) {
            array_push($errors,'Please enter your Email');
        }
        if (empty($username)) {
            array_push($errors,'Please enter your Username');
        }
        if (empty($password_1)) {
            array_push($errors,'Password is Required');
        }
        if (empty($password_2)) {
            array_push($errors,'Password Confirmation is Required');
        }
        if ($password_1 != $password_2) {
            array_push($errors, 'Passwords must be the same');
        }

        // Check to see if there is a username and email //
        $user_check_query = "SELECT * FROM users WHERE username = '$username' OR email = '$email' LIMIT 1";
        $result = mysqli_query($db, $user_check_query) or die(myError(__FILE__,__LINE__,mysqli_connect_error($db)));
        $user = mysqli_fetch_assoc($result);

        if ($user) {
            if ($user['username'] == $username) {
                array_push($errors, 'Cannot have duplicate usernames');
            }
        }
        if ($user) {
            if ($user['email'] == $email) {
                array_push($errors, 'Cannot have duplicate usernames');
            }
        } // End ifs for username and email

        // If everything is okay and there is no errors, we need to now insert the data into the database //
        if (count($errors) == 0) {
            $password = md5($password_1);
            $query = "INSERT INTO users (firstname, lastname, username, email, password) VALUES ('$firstname', '$lastname', '$username', '$email', '$password')";

            mysqli_query($db, $query);
        
            $_SESSION['username'] = $username;
            $_SESSION['success'] = $success;
            header('Location:login.php');
        }
    } // End isset //



    if (isset($_POST['login_user'])) {
        // Get data //
        $username2 = mysqli_real_escape_string($db, $_POST['username']);
        $passwordlogin = mysqli_real_escape_string($db, $_POST['passwordlogin']);

        echo $username2;
        echo $passwordlogin;

        if (empty($username2)) {
            array_push($errors,'Please enter your Username');
        }
        if (empty($passwordlogin)) {
            array_push($errors,'Password is Required');
        }
        if (count($errors) == 0) {

            $passwordlogin = md5($passwordlogin);
            $query = "SELECT * FROM users WHERE UserName = '$username2' AND Password = '$passwordlogin'";
            $results = mysqli_query($db,$query);
            
            if (mysqli_num_rows($results) == 1) {

                $_SESSION['username'] = $username2;
                $_SESSION['success'] = "Success!";
                header('Location:index.php');

            } // End if mysqli
            else {
                array_push($error, 'Wrong username password combo');
            } // End else
        }



    } // Close isset

// End of PHP block //
?>
