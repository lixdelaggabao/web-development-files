<!--
	Name: Lixdel Louisse L. Aggabao
    File name: process.php
    Date created: August 9, 2023
    Description: This displays the movie information sent from the Edit Movie Details form.
-->

<!DOCTYPE html>
<html>
    <head lang="en">
        <meta charset="utf-8">
        <title>Chapter 12</title>    
        <link rel="stylesheet" href="css/styles.css" />
    </head>
    <body>
        <?php include "headerM.php"; ?>
        <main class="results">
            <h1 class="results__caption">Movie Information Saved</h1>
            <?php
                // Check if the request method is POST
                if ($_SERVER["REQUEST_METHOD"] === "POST") {
                    // Check if the form fields are set and not empty
                    if (isset($_POST["title"]) && isset($_POST["description"]) && isset($_POST["genre"]) && isset($_POST["subject"])
                        && isset($_POST["star"]) && isset($_POST["year"]) && isset($_POST["production"])) {
                            // Assign the values to variables
                            $title = $_POST["title"];
                            $description = $_POST["description"];
                            $genre = $_POST["genre"];
                            $subject = $_POST["subject"];
                            $star = $_POST["star"];
                            $year = $_POST["year"];
                            $production = $_POST["production"];
                        
                            // Display all information
                            echo "<strong class='results__label'>Title</strong> " . $title . "<br>";
                            echo "<strong class='results__label'>Description</strong> " . $description . "<br>";
                            echo "<strong class='results__label'>Genre</strong> " . $genre . "<br>";
                            echo "<strong class='results__label'>Subject</strong> " . $subject . "<br>";
                            echo "<strong class='results__label'>Star</strong> " . $star . "<br>";
                            echo "<strong class='results__label'>Year</strong> " . $year . "<br>";
                            echo "<strong class='results__label'>Production</strong> " . $production;
                    } else {
                        echo "Some fields are missing or empty.";
                    }
                } else {
                    echo "Invalid request method.";
                }
            ?>
        </main>
        <?php include "footerM.php"; ?> 
    </body>
</html>