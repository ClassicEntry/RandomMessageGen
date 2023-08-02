// Define three arrays of data
const subjects = ["You", "Your friend", "Your colleague"];
const actions = ["will find success in", "should avoid", "will discover joy in"];
const objects = ["work", "relationships", "a new hobby"];

// Generate random indices
const randomSubject = Math.floor(Math.random() * subjects.length);
const randomAction = Math.floor(Math.random() * actions.length);
const randomObject = Math.floor(Math.random() * objects.length);

// Construct and print the message
const message = `${subjects[randomSubject]} ${actions[randomAction]} ${objects[randomObject]}.`;
console.log(message);
