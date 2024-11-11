# movie-magic-sept-2024

JS Back-End Course Workshop @SoftUni

## Start project

`npm run dev` - for developing

## Developing Steps - Workshop 1

1. Initial Project Architecture
2. Setup express
3. Setup handlebars
4. Add resources
5. Setup static route
6. Render home page
7. Add routes and controllers
8. Extract partial template
9. Add service and data layers
10. Add Create page
11. Add Details page
12. Add Search page

## Developing Steps - Workshop 2

1. Extract init files
2. Setup mongoose
3. Add Movie model
4. Convert file based storage to db storage
5. Add Cast model
6. Add create cast page
7. Add attach cast page
8. Show cast in details page

Bonus:

- [x] Rating helper
- [x] Fix filtering for movies
- [x] Filter cast based on added ones
- [x] Add character name
- [x] Atlas
- [x] env variable file

## Developing steps - Workshop 3 Authentication:

- [x] Add register page
    - [x] Add user model
    - [x] Add Auth controller
    - [x] Add Auth service
    - [x] Hash password before save
- [x] Add login page
    - [x] Validate hashed passwords `npm i bcrypt`
    - [x] Create token `npm i jsonwebtoken`
    - [x] Add token to cookie `npm i cookie-parser`
- [x] Add Authorization
- [x] Add owner relation to movie
- [x] Add owner control buttons in details page
- [x] Show buttons if user is owner
- [x] Delete movie
- [x] Edit movie
- [x] Add dynamic navigation
- [x] Logout
- [x] Add route guard
- [x] Show email when user is logged in 

## BONUS:

- [x] Automatic login for registered users
- [x] Make jwt library asynchronous
- [] Select dropdown with prepopulated value

## Next Time

- [] Add model validations
- [] Validate repeated password
