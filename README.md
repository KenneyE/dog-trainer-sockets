# dog-trainer-sockets
A socket.io project used to remotely play recordings to my dogs on my computer at home while I am at work.

## Usage
Replace the mp3 recording in the `media` directory with your own recordings. For each recording, make a corresponding `\<audio>\` tag in `index.html` as well as a corresponding button, which targets that audio tag with the `makeSound` function when clicked.
	
Once this application is running on a server, simply go to the URL of the application on one computer at home as well as on your work computer. Pressing one of the audio buttons will cause the audio to be played on all browsers with a socket connection open. I use a Google Hangout as a web cam to watch to dogs, and have my computer connected to speakers in the house. When needed, I select the best audio to play to calm/distract the dogs.
	
## Deploying to Heroku
A `Procfile` is included to let Heroku know that this is a Node application. Simply follow the Node application set up steps from [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up).