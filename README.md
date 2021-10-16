# Kumpagram

![](https://i.imgur.com/c0mcQng.png)

A Social Media Dashboard App made with React, Redux, Chakra UI based on the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/).

## Approach

This project uses the [Airbnb Style Guide](https://github.com/airbnb/javascript) to reinforce Javascript best practices.

And since this project uses Chakra UI and will have _relatively_ many props, there's also ESLint rule of `sort-props` to consistently have the same props order in every components.

The first thing I've worked on is the functionality of the app, so I finished the State Management, API Calls, and unit testing to make sure everything works correctly before creating any UI Components.

## User Stories

- User can view list of users
- User can view list of posts of each user
- User can view list of albums of each user
- User can view the detail of each post and its comment
- User can view list of photos from an album
- User can view the detail of photo
- User can add, edit and delete post
- User can add, edit and delete comment

There's a complete unit tests for the Redux Stores and API Calls according to those stories.

![](https://i.imgur.com/aT8Wfp1.png)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
