<!DOCTYPE html>
<html>
<body>

<h1>Team PJP - ENV Variables</h1>

<?php
foreach($_SERVER as $key => $value) {
  echo $key . " = " . $value;
  echo "<br>";
}
foreach($_REQUEST as $key => $value) {
  echo $key . " = " . $value;
  echo "<br>";
}
foreach($_POST as $key => $value) {
  echo $key . " = " . $value;
  echo "<br>";
}
foreach($_GET as $key => $value) {
  echo $key . " = " . $value;
  echo "<br>";
}
foreach($_FILES as $key => $value) {
  echo $key . " = " . $value;
  echo "<br>";
}
foreach($_ENV as $key => $value) {
  echo $key . " = " . $value;
  echo "<br>";
}
foreach($_COOKIE as $key => $value) {
  echo $key . " = " . $value;
  echo "<br>";
}
foreach($_SESSION as $key => $value) {
  echo $key . " = " . $value;
  echo "<br>";
}
?>

</body>
</html>