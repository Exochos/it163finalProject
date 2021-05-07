<?php 
  //session_start();
  session_start();
  include('server.php');
  include('includes/config.php');
  include('includes/header.php');

  ?>


    <!-- Begin page content -->
    <main role="main" class="container">
    <div id="login">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" method="post">
                            <h3 class="text-center text-dark">Login</h3>
                            <div class="form-group">
                                <label for="username" class="text-dark">Username:</label><br>
                                <input type="text" name="username" id="username" class="form-control" value="<?php if(isset($_POST['userName'])) echo htmlspecialchars($_POST['userName']);?>">
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-dark">Password:</label><br>
                                <input type="password" name="passwordlogin" id="password" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="remember-me" class="text-dark"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"></span></label><br>
                                <input type="submit" name="login_user" class="btn btn-light btn-lg" value="Submit">
                                <button type="button" class="btn btn-light btn-lg" onclick="window.location.href='<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>"> Reset </button>
                            </div>
                            <div id="register-link" class="text-right">
                                <a href="register.php" class="text-dark">Not Registered? - <b> Register Here! </b></a>
                            </div>
                            <?php
                              include('includes/errors.php');
                            ?>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </main>
    <!-- End Main Content -->

<?php include('includes/footer.php'); ?>
