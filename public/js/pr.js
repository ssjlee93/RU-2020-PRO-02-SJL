$(document).ready(function () {
    $('.modal').modal();

    let eleme;
    let editObj = [];

    $("#submitRoutine").on("click", function (event) {
        event.preventDefault();
        $("#myRoutine").empty();
        var routineName = $("#routineName").val().trim();
        var sets = parseInt($("#sets").val());
        var exercise1 = $("#exercise1").val().trim();
        var repCount1 = parseInt($("#repCount1").val());
        var exercise2 = $("#exercise2").val().trim();
        var repCount2 = parseInt($("#repCount2").val());
        var exercise3 = $("#exercise3").val().trim();
        var repCount3 = parseInt($("#repCount3").val());

        if (!routineName || !sets || !exercise1 || !exercise2 || !exercise3 || !repCount1 || !repCount2 || !repCount3) {
            var myRoutine =
                `<div class="modal-content center-align">
                    <h2>Please Fill in all fields</h2>
                </div> 
                <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
                </div>`
            $("#myRoutine").append(myRoutine);
        } else {
            var myRoutine =
                ` <div class="modal-content center-align">
                            <p>Your routine name is <b>${routineName}</b> and it has <b>${sets}</b> sets. </p>
                                <p>Your first exercise is <b>${repCount1}</b> <b>${exercise1}</b></p>
                                <p>Your second exercise is <b>${repCount2}</b> <b>${exercise2}</b></p>
                                <p>Your third exercise is <b>${repCount3}</b> <b>${exercise3}</b></p>
                            </div> 
                            <div class="modal-footer">
                                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
                                <a href="#userRoutines" class="waves-effect waves-green btn">Lets view your routine!</a>
                            </div>`
            $("#myRoutine").append(myRoutine);
        }

        let newRoutine = {
            routineName: routineName,
            sets: sets,
            exerciseOne: exercise1,
            repOne: repCount1,
            exerciseTwo: exercise2,
            repTwo: repCount2,
            exerciseThree: exercise3,
            repThree: repCount3
        }
        submit(newRoutine);
    });

    function submit(data) {
        $.post("/api/pr", data, function () {
            location.realod()
        });
    }

    //Dry and working GET. DO NOT TOUCH
    $.get("/api/pr", function (data) {
        let routines = data.routines;
        let length = routines.length;
        console.log(routines);
        for (var i = 0; i < length; i++) {
            let newRow = $("<tr class='hoverable'>");
            let values = Object.values(routines[i]);
            editObj.push(routines[i]);
            for (var j = 0; j < 9; j++) {
                let column = $("<td>").text(values[j]);
                newRow.append(column);
            }
            let btns = $("<td class='center-align'>").html("<a href='#editModal' data=" + routines[i].id + " class='editRoutine waves-effect waves-light btn modal-trigger'>Edit</a><button data=" + routines[i].id + " class='deleteRoutine waves-effect waves-light btn'>Delete</button>");
            newRow.append(btns);
            $("#prTable").append(newRow);
        }
    });

    $("#prTable").on("click", "a", function (event) {
        event.preventDefault();
        eleme = $(this).attr("data");
        for (var k = 0; k < editObj.length; k++) {
            if (editObj[k].id == eleme) {
                $("#editroutineName").val(editObj[k].routineName);
                console.log(editObj[k].routineName);
                $("#editsets").val(editObj[k].sets);
                $("#editexercise1").val(editObj[k].exerciseOne);
                $("#editrepCount1").val(editObj[k].repOne);
                $("#editexercise2").val(editObj[k].exerciseTwo);
                $("#editrepCount2").val(editObj[k].repTwo);
                $("#editexercise3").val(editObj[k].exerciseThree);
                $("#editrepCount3").val(editObj[k].repThree);
            };
        }

        console.log("edit btn id: " + eleme);
    });

    $(".saveRoutine").on("click", function (event) {
        event.preventDefault();

        $("#myRoutine").empty();
        var routineName = $("#editroutineName").val().trim();
        var sets = parseInt($("#editsets").val());
        var exercise1 = $("#editexercise1").val().trim();
        var repCount1 = parseInt($("#editrepCount1").val());
        var exercise2 = $("#editexercise2").val().trim();
        var repCount2 = parseInt($("#editrepCount2").val());
        var exercise3 = $("#editexercise3").val().trim();
        var repCount3 = parseInt($("#editrepCount3").val());

        if (!routineName || !sets || !exercise1 || !exercise2 || !exercise3 || !repCount1 || !repCount2 || !repCount3) {
            var myRoutine =
                `<div class="modal-content center-align">
                          <h2>Please Fill in all fields</h2>
                      </div> 
                      <div class="modal-footer">
                          <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
                      </div>`
            $("#myRoutine").append(myRoutine);
        } else {
            var myRoutine =
                ` <div class="modal-content center-align">
                                  <p>Your routine name is <b>${routineName}</b> and it has <b>${sets}</b> sets. </p>
                                      <p>Your first exercise is <b>${repCount1}</b> <b>${exercise1}</b></p>
                                      <p>Your second exercise is <b>${repCount2}</b> <b>${exercise2}</b></p>
                                      <p>Your third exercise is <b>${repCount3}</b> <b>${exercise3}</b></p>
                                  </div> 
                                  <div class="modal-footer">
                                      <a href="/" class="waves-effect waves-green btn">Lets view your routine!</a>
                                  </div>`
            $("#myRoutine").append(myRoutine);
        }

        let editRoutine = {
            routineName: routineName,
            sets: sets,
            exerciseOne: exercise1,
            repOne: repCount1,
            exerciseTwo: exercise2,
            repTwo: repCount2,
            exerciseThree: exercise3,
            repThree: repCount3
        }
        $.ajax("/api/pr/" + eleme, {
            type: "PUT",
            data: editRoutine,
        }).then(function () {
            location.reload();
        })
    });

    $("#prTable").on("click", "button", function (event) {
        event.preventDefault();
        eleme = $(this).attr("data");
        console.log("DELETE BUTTON CLICKED");
        $.ajax({
            method: "DELETE",
            url: "/api/pr/" + eleme
        }).then(() => location.reload());
    });

    $("#myRoutine").on("click", "a", function (event) {
        event.preventDefault();
        location.reload();
    })
});