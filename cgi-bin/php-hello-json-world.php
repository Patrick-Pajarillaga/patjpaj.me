<!DOCTYPE html>
<html>
<body>

<h1>Team PJP - Hello World JSON</h1>

<?php
$jso->message = "Team PJP = Hello World!";
$jso->time = date("Y/m/d") . date("h:i:sa");
$jso->ip = getenv("REMOTE_ADDR");
$myJSON = json_encode($jso);

echo $myJSON;
?>

</body>
</html>