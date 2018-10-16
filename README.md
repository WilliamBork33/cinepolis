# cinepolis

Automation Test Program for `http://www.cinepolis.com/`


## Expected Behavior
- Test will select city, theatre, display available movies, capture movie details in arrays, enter each individual movie page, and finally compare that the individual movie pages display the same time data as the theatre page.


- To run tests type:
    - `yarn test:web` (to run all tests together)
    - `yarn test:web -t @home` (to run just home page test)
    - `yarn test:web -t @theatre` (to run just the theatre page test)


### Known Issues

- Click and enter individual page method just clicks and enters the same movie, not the others.
- Must finish capturing and comparing the times from the individual movies page.


#### Self-Reminder For Starting This Project
- yarn init
- yarn --dev add babel-core babel-preset-env chimp
