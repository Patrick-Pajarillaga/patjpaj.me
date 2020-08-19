<?php
// Start the session
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<h1>Team PJP - Session 1</h1>

<?php
echo "Name entered: " . $_SESSION["username"] . "<br>";
echo "<a href='/cgi-bin/php-state-demo.php'>Session 1</a>";
?>

</body>
</html>