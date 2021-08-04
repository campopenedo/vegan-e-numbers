<?php
    $numbers = $_POST["search-engine"];

    $numbersClean = str_replace(" ", "",$numbers);
    
    $numbersArray = explode(",", $numbersClean);

    foreach($numbersArray as $val) {
        echo $val . " ";
    }

?>