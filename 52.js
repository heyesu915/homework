function loop(start, test, update, body) {
    let current = start;
    while (test(current)) {
        body(current);
        current = update(current);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);