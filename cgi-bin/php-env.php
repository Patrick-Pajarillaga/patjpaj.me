<!DOCTYPE html>
<html>
<body>

<h1>Team PJP - ENV Variables</h1>

<?php
foreach(getenv() as $key => $value) {
  echo $key . " = " . $value;
  echo "<br>";
}
?>

</body>
</html>