src = "https://www.gstatic.com/firebasejs/3.3.0/firebase.js";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDl7CmQ9ZgFwOtT-8kNTkyP8JD1bCDY5OU",
    authDomain: "train-schedule-5896d.firebaseapp.com",
    databaseURL: "https://train-schedule-5896d.firebaseio.com",
    storageBucket: "train-schedule-5896d.appspot.com",
    messagingSenderId: "1078636261221"
};
firebase.initializeApp(config);


var trainLine;
var trainDestination;
var trainFrequency = 5;
var firstTime = "12:00"
var firstTimeConverted = moment(firstTime, "hh:mm");
var now = moment().format('LT');
var trainDifference = moment().diff(moment(firstTimeConverted), "minutes");
var trainRemainder = trainDifference % trainFrequency;
var trainMinutes = trainFrequency - trainRemainder;
var nextTrain = moment().add(trainMinutes, "minutes")

// var nextArrival = trainMinutes + firstTime;
// var firstTime;
// var trainMinutes = moment().add(trainFrequency);
console.log();

// Current Time

//var database = firebase.database();

$("#addTrainButton").on("click", function() {
    trainLine = $("#trainLineInput").val().trim();
    trainDestination = $("#trainDestinationInput").val().trim();
    firstTime = $("#firstTimeInput").val().trim();
    trainFrequency = $("#trainFrequencyInput").val().trim();

    var newTrain = {
        train: trainLine,
        destination: trainDestination,
        time: firstTime,
        frequency: trainFrequency,
    };

    $("#trainLineInput").html(trainLine);
    $("#trainDestinationInput").html(trainDestination);
    $("#firstTimeInput").html(nextTrain);
    $("trainFrequencyInput").html(trainFrequency);

    firebase.database().ref().push(newTrain);

    $("#trainLineInput").val("");
    $("#trainDestinationInput").val("");
    $("#firstTimeInput").val("");
    $("trainFrequencyInput").val("");

    var newTrainData =
        "<td>" + trainLine + "</td>" + "<td>" + trainDestination + "</td>" + "<td>" + firstTime + "</td>" + "<td>" + trainFrequency + "</td>" + "<td>" + trainMinutes + "</td>"

    var newRow = $("<tr>").append(newTrainData);
    $("#trainTable").append(newRow);
    return false;

    database.ref("#addTrainButton").set(null);
});
