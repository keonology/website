document.addEventListener("DOMContentLoaded", function () {
    const options = {
        strings: [
            "Your premier destination for stylish phone covers.",
            "Where protection meets elegance.",
            "Customizable to fit your style.",
            "We Thank You For Choosing Our Covers ❤️"  // Added heart emoji
        ],
        typeSpeed: 50,     // Speed of typing
        backSpeed: 30,     // Speed of backspacing
        backDelay: 1500,   // Delay before backspacing
        loop: true,
        loopCount: Infinity // Infinite loop
    };

    const typed = new Typed(".typed-text", options);
});
