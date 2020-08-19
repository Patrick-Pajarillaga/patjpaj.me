<?php
// Start the session
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<h1>Team PJP - Session 1</h1>

<?php
$_SESSION["username"] = $_POST["username"];
echo "Name entered: " . $_POST["username"];
echo "<a href="/php-state-demo2.php">Session 2</a>";
?>

</body>
</html>