document.getElementById('shake-button').addEventListener('click', function () {
    const magicBall = document.querySelector('.magic-8-ball');
    const answerElement = document.getElementById('answer');
  
    // Debug: Check if the elements exist
    console.log("Magic Ball Element:", magicBall); // Check if the Magic Ball is found
    console.log("Answer Element:", answerElement); // Check if the Answer Element is found
    console.log("Random Answer:", randomAnswer);   // Ensure a random answer is being generated
    
  
    // Add the shaking animation class
    magicBall.classList.add('shaking');
  
    // Remove the class after the animation ends
    setTimeout(() => {
      magicBall.classList.remove('shaking');
    }, 500); // Match the duration of the animation (0.5s)
  
    // Generate a random answer
    const answers = {
      affirmative: [
        "It is certain", "Yes, definitely", "You may rely on it",
        "Most likely", "Outlook good", "Signs point to yes", "Yes"
      ],
      negative: [
        "My reply is no", "My sources say no", "Outlook not so good",
        "Very doubtful"
      ],
      neutral: [
        "Reply hazy, try again", "Ask again later", "Better not tell you now",
        "Cannot predict now", "Concentrate and ask again", "Don't count on it"
      ]
    };
  
    const categories = Object.keys(answers);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const randomAnswer = answers[randomCategory][Math.floor(Math.random() * answers[randomCategory].length)];
  
    // Debug: Log the random answer
    console.log("Generated Answer:", randomAnswer);
  
    // Update the answer text and make it visible inside the triangle
    if (answerElement) {
      answerElement.textContent = randomAnswer;
    } else {
      console.error("Answer element not found!");
    }
  });
  