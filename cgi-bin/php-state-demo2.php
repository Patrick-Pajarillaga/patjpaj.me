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
echo "<a href="/php-state-demo.php">Session 2</a>";
?>

</body>
</html>