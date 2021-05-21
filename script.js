//Adds a function to generate a random number
const rand = () => {
    return Math.floor(Math.random() * 3);
}

//Mixed messages ot be printed ot the console
const messages = {
    jokes : ["What did the Triangle say to the Circle? You're so pointless! ;)", "Why does a moon rock taste better than an earth rock? Because its meteor! ;)","Why can't a nose be 12 inches? Because then it would be a foot! ;)"],
    advice : ["Don't let your efforts be for nothing","Knowledge is nothing without action", "Don't forget to give yourself a break"]

}

//Reference list for the shows
const referencesList = {
    Spongebob : ["I\'m ugly and I\'m proud","The best time to wear a striped sweater is all the time","Hi, how are ya?"],
    Avatar : ["Fire is life, not just destruciton", "Destiny is a funny thing","That\'s rough buddy"],
    AdventureTime : ["Bad biscuits make the baker broke","You gotta focus on what is real", "Responsibility demands sacrifice"]

}

//Generates the Mixed message based off of random values
const getMessage = () => {
    let randomReference = rand();
    switch (randomReference){
        case 0:
            randomReference = "Spongebob";
            break;
        case 1:
            randomReference = "Avatar";
            break;
        case 2:
            randomReference = "AdventureTime";
            break;
    }

    console.log(randomReference + " quote: " + referencesList[randomReference][rand()]);
    console.log("Joke: " + messages["jokes"][rand()]);
    console.log("Advice: " + messages["advice"][rand()]);
}

getMessage();

