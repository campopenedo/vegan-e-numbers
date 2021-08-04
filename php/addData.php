<?php
    include '../../creds/e-vegan-cred.php';
    $vegan = $_POST["vegan-numbers"];
    $notVegan = $_POST["not-vegan-numbers"];
    $unclearNumber = $_POST["unclear-numbers"];

    $patt = '/ |\"|\'|`|\[|]/';
    $veganArray = explode(",", strtoupper(preg_replace($patt, "", $vegan)));
    $notVeganArray = explode(",", strtoupper(preg_replace($patt, "", $notVegan)));
    $unclearNumberArray = explode(",", strtoupper(preg_replace($patt, "", $unclearNumber)));

    $date = date("d-m-Y");

    $sql = "REPLACE INTO  `enumbers` (`enumber`, `vegan`, `last_update`) VALUES ";
    
    foreach($veganArray as $eNumber) {
        if(strlen($eNumber) > 0)
        $sql = $sql . "(:v$eNumber, 'Vegan', '$date'),";
    }

    foreach($notVeganArray as $eNumber) {
        if(strlen($eNumber) > 0)
        $sql = $sql . "(:nv$eNumber, 'Not Vegan', '$date'),";
    }

    foreach($unclearNumberArray as $eNumber) {
        if(strlen($eNumber) > 0)
        $sql = $sql . "(:u$eNumber, 'Depends of manufacter', '$date'),";
    }

    $sql = substr($sql, 0, -1);

    try{
        $con = new PDO($host, $user, $password);

        $send = $con->prepare($sql);
        
        foreach($veganArray as $eNumber) {
            if(strlen($eNumber) > 0){
                $send->bindValue(":v$eNumber", $eNumber);
            }
        }

        foreach($notVeganArray as $eNumber) {
            if(strlen($eNumber) > 0){
                echo "hola ";
                $send->bindValue(":nv$eNumber", $eNumber);

            }
        }

        foreach($unclearNumberArray as $eNumber) {
            if(strlen($eNumber) > 0){
                echo "hola ";
                $send->bindValue(":u$eNumber", $eNumber);

            }
        }

        $send->execute();

        
    } catch(PDOException $err) {
        echo "Connection failed: " . $err->getMessage();
    }

?>