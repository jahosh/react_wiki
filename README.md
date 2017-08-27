## How To Build

1. Make sure you have atleast Node v.7.7.4, Npm 5.3.0, Python 3.6.2 (the serve script assumes you'll have the `python3` bash env var)

2. Install dependencies using npm ```npm install```

3. For development, I used webpack-dev-sever, which can be started by running ```npm run dev```

4. For final build, execute the ```npm run build``` command, afterwards ```npm run serve``` which will start the flask server on 3000

5. Test can be run using ```npm test``` - snapshot test done via Jest
