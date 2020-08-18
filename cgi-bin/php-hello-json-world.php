<!DOCTYPE html>
<html>
<body>

<h1>Team PJP - Hello World</h1>

<?php
$jso->message = "Team PJP = Hello World!";
$jso->time = date("Y/m/d") . date("h:i:sa") . "<br>";
$jso->ip = getenv("REMOTE_ADDR") . "<br>";
$myJSON = json_encode($jso);

echo $myJSON;
?>

</body>
</html>