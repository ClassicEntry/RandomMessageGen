const subject = new Subject();
const object = ["Ball", "Cat", "Dog", "Person", "Car"];
const actions = ["said hello", "said bye", "said something", "said nothing"];

const messageGenerator = {
    generateMessage: function() {
        const randomSubject = object[Math.floor(Math.random() * object.length)];
        const randomAction = actions[Math.floor(Math.random() * actions.length)];
        const message = `${randomSubject} ${randomAction}`;
        subject.notify(message);
    }
}

