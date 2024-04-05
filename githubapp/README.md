
# Github Dashboard challenge

##  User Profile Page:

    ○ Fetch the user's profile information, such as their name, username, avatar,
    location, and bio, from the Github API. The API endpoint is
    https://api.github.com/users/{username} 
  
    ○ Display the user's profile information.
   
    ○ Show the number of public repositories and followers that the user has.

##  Repositories Page:

    ○ Fetch a list of the user's public repositories from the Github API. The API
    endpoint is https://api.github.com/users/{username}/repos
    
    ○ Display a list of the user's public repositories, including their name,
    description, and number of stars.
    
    ○ Allow the user to sort the list of repositories by stars in ascending or
    descending order.

##  Followers Page:

    ○ Fetch a list of the user's followers from the Github API. The API endpoint is
    https://api.github.com/users/{username}/followers
   
    ○ Display a list of the user's followers, including their name, username, and
    avatar.
    
    ○ Show the total number of followers that the user has.

##  Search for a username:

    ○ Github Profile/Repositories/Followers pages must be fetched dynamically,
    do not use static value for the username.
    
    ○ Add a search input field and replace the api {username} parameter with
    value from the search input field
    
    ○ Add a submit button and do not hit the api on every keystroke.

    ○ Display a message if the username does not exist.
    
    ○ Handle api error in all pages

## You can find the project here

 url: https://githubdashboard-frynelli.netlify.app/
 GitHub: https://github.com/Frynelli/GitHub-Dashboard

### Difficulties

- I can't find a solution to the 403 forbitten error the github api is giving me 