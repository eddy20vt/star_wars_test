In the project directory, you can run:

with yarn:

### `yarn install`
### `yarn start`

or with npm

### `npm i`
### `npm start`


Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

The only basic requirement that I've not implemented is the 3 cards in the mobile view.

To be honest, I noticed that too late. I'm used to show more or less the same info for desktops and mobile but in responsive design. It was an assumption by my side.

I used some modules to complete the task.

1 - react-bootstrap: I used this front-end framework to provide a basic structure to the proyect and organice the components in rows and columns.

2 - react-router-dom: This module is used to provide a basic routing to the proyect. It allows to work inside an SPA and jump to diferent routes without any load from the server.
In my case to jump from the main container to the details one.

3 - react-redux: This tool allows to control a predictable state container and keep a gobal store (status) for the SPA.

4 - axios: It is a promise-based HTTP Client to make the API calls. 

My UX improvements are to provide with Redux a kind of cache. 

My implementation only calls to the API when we are retreiving new data. 

Once I get the data from the server, I save it in the store state and I can jump to the next or previous pages without call again to the server if the data already exists in the store. 

Navigation is quite fast so.

Also with Redux, I share the details with the details page. I don't need to call again to the server to get the data for the selected character, just to store the character Id and I can access to the whole saved character data.

The load of the films is asynchronous as well, to let us to show the rest of data meanwhile the films info is retrieved.


We talk soon!
Happy coding!

Edu.
