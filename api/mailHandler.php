l<?php /** @noinspection PhpDeprecationInspection */

# Include the Autoloader
require '../vendor/autoload.php';
#include api key file
require '../.env/config.php';

use Mailgun\Mailgun;

# Instantiate the client.
//error_log($mgApiKey);
//$mgClient = new Mailgun($mgApiKey);
$mgClient = Mailgun::create($mgApiKey);
$domain = "mg.marbletowninfo.org";


if (isset($_POST['fullName'])) {
    $full_name = htmlentities(trim($_POST['fullName']), ENT_QUOTES, "UTF-8");
} else {
    $full_name = 'not set';
}
if (isset($_POST['email'])) {
    $email = htmlentities(trim($_POST['email']), ENT_QUOTES, "UTF-8");
} else {
    $email = 'not set';
}
if (isset($_POST['message'])) {
    $message= htmlentities(trim($_POST['message']), ENT_QUOTES, "UTF-8");
} else {
    $message = 'not set';
}

$messageText = "Full name: $full_name \n email: $email \n$message ";


# Make the call to the client.
try {
    $result = $mgClient->messages()->send($domain, array(
        'from' => 'Excited User <mailgun@mg.marbletowninfo.org>',
        'to' => 'MarbletownInfo <jacob@jbsherman.com>',
        'subject' => 'marbletown strong message',
        'text' => $messageText
    ));
} catch ( Exception $e ) {
    echo 'Caught exception: ', $e->getMessage(), "/n";
}

