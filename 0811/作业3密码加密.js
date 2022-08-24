function getPassword(num) {
    return (((num % 10) + 5) % 10).toString() + (((~~(num / 10) % 10) + 5) % 10).toString() +
        (((~~(num / 100) % 10) + 5) % 10).toString() + (((~~(num / 1000) % 10) + 5) % 10).toString();
}
console.log(getPassword(8765));

