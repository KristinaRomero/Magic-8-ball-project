document.getElementById('shake-button').addEventListener('click', function () {
    const magicBall = document.querySelector('.magic-8-ball');
    const answerElement = document.getElementById('answer');
  
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
  
    // Update the answer text and make it visible
    answerElement.textContent = randomAnswer;
    answerElement.classList.add('show');
  
    // Remove visibility after 1 second (optional)
    setTimeout(() => {
      answerElement.classList.remove('show');
    }, 1000);
  });
  