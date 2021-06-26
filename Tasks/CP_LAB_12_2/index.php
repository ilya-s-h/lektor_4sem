<html>
  <head>
    <title>PHP Test</title>
  </head>
  <body>
    <?php
    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    ?>
    <form action="index.php" method="POST" >
        E-mail: <input id="email" name="email" />
        <br>     <br>     
        Password <input id="pass" name="pass" type="password" /> 
        <br>     <br> 
        Retype password <input id="pass_check" name="pass_check" type="password" />
        <br> <input type="submit">
    </form>
    <?php
    }
    echo '<p>Hello World</p>'; 
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if ((isset($_POST['email'])) && (isset($_POST['pass']))) {
            if ((empty($_POST['email'])) || (empty($_POST['pass']))) {
                echo 'Все поля должны быть заполнены!'; return;}
            $email = $_POST['email'];
            $pass = $_POST['pass'];
            echo '<h1>' . date('r') . '</h1>';
            echo 'MD5 hash: ' . md5($pass) . '<br>';
            echo 'SHA1 hash: ' . sha1($pass) . '<br>';
            var_dump($email); }}
?> 
  </body>
</html>