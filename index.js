function delayedExecution(callback, delay, ...args) {
    setTimeout(() => {
        callback(...args);
    }, delay);
}

function greet(name, message) {
    console.log(`Hello, ${name}! ${message}`);
}

delayedExecution(greet, 10000, 'John Doe', 'Welcome to the callback demonstration!');



