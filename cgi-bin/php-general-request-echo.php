<!DOCTYPE html>
<html>
<body>

<h1>Team PJP - General Request Echo</h1>

<?php
echo "Protocol: " . getenv("SERVER_PROTOCOL");
echo "Request Method: " . getenv("REQUEST_METHOD");
echo "Message Body = " . stream_get_contents(STDIN);
?>

</body>
</html>