// Interface Usage
// Define an interface Playable with a method play(). Implement this interface in classes Guitar and Piano. 
// Write a main method to create and use objects of these classes.


class Playable {
    play() {
        throw new Error("This method should be overridden");
    }
}

class Guitar extends Playable {
    play() {
        console.log("Playing the guitar");
    }
}

class Piano extends Playable {
    play() {
        console.log("Playing the piano");
    }
}

function main() {
    const guitar = new Guitar();
    const piano = new Piano();

    guitar.play();
    piano.play();
}

main();
