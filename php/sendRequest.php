<?php
    include '../../creds/e-vegan-cred.php';
    $numbers = $_POST["search-engine"];

    $numbersClean = str_replace(" ", "",$numbers);
    
    $numbersArray = explode(",", $numbersClean);

    foreach($numbersArray as $key => $val) {
        if(strlen($val) === 0) {
            unset($numbersArray[$key]);
            array_values($numbersArray);
        }
    }

    $patt = '/^[Ee][0-9]{3,4}[a-zA-Z]{0,1}$/';

    $sql = 'SELECT * FROM enumbers WHERE';

     foreach($numbersArray as $key => $val) {
            $sql = $sql . (preg_match($patt, $val) && $key !== (count($numbersArray) - 1)
                ? " enumber = :bv$val"
                : " enumber LIKE :bv$val"
            );
            $sql = $sql . ($key === (count($numbersArray) - 1)
            ? ";"
            :  " OR"
        );
    }
    
    try{
        $con = new PDO($host, $user, $password);

        $send = $con->prepare($sql);
        
        foreach($numbersArray as $val) {
                $send->bindValue(":bv$val", (preg_match($patt, $val) ? $val : $val . "%"));
        }

        $send->execute();

        $result = $send->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode($result);
        
    } catch(PDOException $err) {
        echo "Connection failed: " . $err->getMessage();
    }

?>

