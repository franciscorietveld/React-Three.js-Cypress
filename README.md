# DimensionaLab Frontend Engineering Challenge

Welcome Candidate and thank you for taking the time to complete the DimensionLab take-home challenge for our senior frontend engineer position.

You will have 2 days to complete the assignment. Once you have completed your solution, please reply with a link to a github repository and instructions on how to install / run the application.

The goal of this challenge is to build out an interactive flowchart-based UI for manipulating 3D objects. Inspiration can be something like this (**you'll be using React Flow, a library in which this was made**): 

![React Flow inspiration](src/reactflow-banner.gif?raw=true "React Flow inspiration")

Please clone this repository and submit it once you are finished.

Here are the rules of this challenge.. you must:

- Build an application that uses [React Flow](https://github.com/wbkd/react-flow) and [react-three-fiber](https://github.com/pmndrs/react-three-fiber) to displays an animated view of multiple instances of a particular 3D object. Please use this app template as a starting point and use `npm start` to start the application.
- Implement a custom node that will be connected to the main node and will let user to change the shape of the 3D object. You should be able to pick from minimum of 3 shapes.
- Implement a node in which you can use a number input to specify the number of instances of a 3D object. Minimum should be 1, maximum 100.
- Implement a node with color picker to change the color of a currently selected 3D object.
- Add a node that will provide a slider by which you can change the current zoom level of a node displaying the 3D object.

## Requirements:
 1) All interaction should happen in the same page
 2) Demonstrate use of React hooks
 3) Demonstrate knowledge of component modularization
 4) Utilize CSS to create the layout of the nodes. Add hover styles to the items the user is interacting with.
 5) Create components as you feel is best suited for your solution

![App starter template](src/app-template.png?raw=true "App starter template")

## Bonuses
2) Make it pretty
3) Make it accessible
4) Add unit tests

  Good luck and if you have questions, please reach out to us at DimensionLab.hello@dimensionlab.org

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
