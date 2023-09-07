<!--
	Name: Lixdel Louisse L. Aggabao
    File name: index.php
    Date created: August 9, 2023
    Description: This contains the form for the Edit Movie Details.
-->

<?php
    // Create the arrays for the list of genres and subjects
    $genres = array("action", "adventure", "comedy", "drama");
    $subjects = array("Animation", "Children and Youth", "People");

    // Function to generate options for a select element
    function generateSelectOptions($options) {
        $optionsHTML = "";

        foreach ($options as $option) {
            $optionsHTML .= "<option value='$option'>$option</option>";
        }

        return $optionsHTML;
    }
?>
<!DOCTYPE html>
<html>
    <head lang="en">
        <meta charset="utf-8">
        <title>Chapter 12</title>    
        <link rel="stylesheet" href="css/styles.css" />
    </head>
    <body>
        <?php include "headerM.php"; ?>
        <main>
            <form class="form" method="post" action="process.php" id="mainForm">
            <fieldset class="form__panel">
                <legend class="form__heading">Edit Movie Details</legend>
                    <p class="form__row">
                    <label>Title</label><br/>
                    <input type="text" name="title" class="form__input form__input--large"/>
                </p>
                <p class="form__row">
                    <label>Description</label><br/>
                    <input type="text" name="description" class="form__input form__input--large">
                </p>            
                <p class="form__row"> 
                    <label>Genre</label><br/>
                    <select name="genre" class="form__input form__select">
                        <option disabled selected>Choose genre</option> 
                        <?php echo generateSelectOptions($genres); ?>
                    </select>
                </p>
                <p class="form__row"> 
                    <label>Subject</label><br/>
                    <select name="subject" class="form__input form__select">
                        <option disabled selected>Choose subject</option> 
                        <?php echo generateSelectOptions($subjects); ?>
                    </select>
                </p>
                <p class="form__row">	
                    <label>Star</label><br/>               
                    <input type="text" name="star" class="form__input form__input--medium" />
                </p>
                <p class="form__row">	
                    <label>Year</label><br/>               
                    <input type="text" name="year" class="form__input form__input--small" />
                </p>  
                <p class="form__row">	
                    <label>Production</label><br/>               
                    <input type="text" name="production" class="form__input form__input--medium"/>
                </p>                             

                <div class="form__box"> 
                    <input type="submit" class="form__btn"> <input type="reset" value="Clear Form" class="form__btn">      
                </div>
            </fieldset>
            </form>
        </main>
        <?php include "footerM.php"; ?> 
    </body>
</html>
