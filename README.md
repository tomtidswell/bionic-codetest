# bionic-chat-codetest

Thanks for checking my submission for the Bionic code test. I have implemented the requirements, in addition to those, I have made considerations of the following:
- The messages object within the `Page.vue` component are extendable. To meet the requirements, there are three entires, but it could easily be increased to have the chatbot ask additional quesitons. See the commented out additional collection items held in the `messages` data item
  - The entries can be specified as `incoming`/`outgoing`
  - The entries can `autoAdvance` to the next message
  - The entries can `reiterate` the users response to a previous message
  - The entries can show user `options` which will render a set of selections (there can be any number of these options)
  
- End to end tests which cover the functional and non-functional requirents (including timing)

Future tasks not yet completed:
- More detailed testing, including specific unit tests of the individual components
- The styling may need additional tweaks, I limited this to stay within a reasonable timeframe for the task

## Project setup
Download the required dependencies:
```
yarn
```

## To view the app
To view a local version of the app, run the following, and check the advised url
```
yarn serve
```

## Run end-to-end tests
To run the testing scenarios I have designed, run the following:
```
yarn test:e2e
```
