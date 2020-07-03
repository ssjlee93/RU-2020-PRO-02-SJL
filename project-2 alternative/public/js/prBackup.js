$(document).ready(function(){
    $('.modal').modal();
    
    count = 0;
    
    $("#addExercise").on("click", function(event) {
        event.preventDefault();
        count++;
        var newRow = $("<div>");
        newRow.addClass("row");
        var exerciseDiv = $("<div class='input-field col s6'>");
        var exerciseInput = $("<input data='" + count + "' type='text' class='validate formExercise'>");
        var exerciseLabel = $("<label for='formExercise" + count + "'>Exercise " + count + "</label>");
        var repDiv = $("<div class='input-field col s3'>");
        var repInput = $("<input data='"+ count +" type='text' class='validate formRep'>");
        var repLabel = $("<label for='formRep" + count + "'>How many reps?</label>");
        var weightDiv = $("<div class='input-field col s3'>");
        var weightInput = $("<input data='"+ count +" type='text' class='validate formWeight'>");
        var weightLabel = $("<label for='formWeight" + count + "'>Weights (lb)</label>");

        $("#formExercises").append(newRow);
        newRow.append(exerciseDiv);
        newRow.append(repDiv);
        newRow.append(weightDiv);
        exerciseDiv.append(exerciseInput, exerciseLabel);
        repDiv.append(repInput, repLabel);
        weightDiv.append(weightInput, weightLabel);
    });

    $("#submitRoutine").on("click", function(event) {
        event.preventDefault();
        // make 2 ajax calls with one button click. 
        // post one to routines table 
        // another to exercises table. 
    
        let routine = $("#formRoutine").val().trim(); 
        let sets = parseInt($("#formSets").val());
        let routinesObj = {
            routineName: routine,
            sets: sets
        }

        $.post("/api/routines", routinesObj, () => {
            alert("Routine added");
            console.log("Routine added");
        })

        for (var i = 0; i < count+1; i++) {
            // for loop each ajax call 
            if ($(".formExercise").attr("data") === i) {
                console.log($(this));
                let exerciseValue = $(this).val().trim();
                console.log(exerciseValue);
            }

            if ($("input [type=text]").attr("data") === i) {
                let value = $(this).val()
                console.log(value);
            }

            // let exerciseValue = $("#formExercise").attr("").val(); 
            // let repValue = $("#formRep" + iString).val(); 
            // let weightValue = $("#formWeight" + iString).val(); 
            // console.log(exerciseValue);
            // let exerciseJSON = {
            //     exerciseName: exerciseValue,
            //     reps: repValue,
            //     weight: weightValue
            // }

            // $("input [type=text]").val() 
            // $("#formExercise" + count).val() 
                // map , for loop 
            // .find( ) problem: string of html DOM 
                // .amp filter .each() 
            
            
            $.post("/api/exercises", exerciseJSON, () => {
                console.log("Exercise Added");
            })
        }

      

        // count = 0;
        // location.reload();
    });






});