<?php
include($_SERVER['DOCUMENT_ROOT'] . '/views/partials/header.php');

$page = 'home';
if (isset($_GET['page'])){
	$page = $_GET['page'];
}

switch ($page) {
	case 'home':
		include($_SERVER['DOCUMENT_ROOT'] . '/views/home.php');
		break;

	case 'booking-list':
		include($_SERVER['DOCUMENT_ROOT'] . '/views/booking-list.php');
		break;

	case 'login':
		include($_SERVER['DOCUMENT_ROOT'] . '/views/login.php');
		break;

	case 'register':
		include($_SERVER['DOCUMENT_ROOT'] . '/views/register.php');
		break;

	case 'app1':
        include($_SERVER['DOCUMENT_ROOT'] . '/views/app1.php');
        break;

	default:
		// code...
		break;
}
?>
<?php
include($_SERVER['DOCUMENT_ROOT'] . '/views/partials/footer.php');
 ?>
