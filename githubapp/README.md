
# Github Dashboard challenge

##  User Profile Page:

DONE
    ○ Fetch the user's profile information, such as their name, username, avatar,
    location, and bio, from the Github API. The API endpoint is
    https://api.github.com/users/{username} 
DONE   
    ○ Display the user's profile information.
DONE    
    ○ Show the number of public repositories and followers that the user has.

##  Repositories Page:

DONE
    ○ Fetch a list of the user's public repositories from the Github API. The API
    endpoint is https://api.github.com/users/{username}/repos
DONE    
    ○ Display a list of the user's public repositories, including their name,
    description, and number of stars.
DONE    
    ○ Allow the user to sort the list of repositories by stars in ascending or
    descending order.

##  Followers Page:

DONE    
    ○ Fetch a list of the user's followers from the Github API. The API endpoint is
    https://api.github.com/users/{username}/followers
DONE   
    ○ Display a list of the user's followers, including their name, username, and
    avatar.
DONE    
    ○ Show the total number of followers that the user has.

##  Search for a username:

DONE
    ○ Github Profile/Repositories/Followers pages must be fetched dynamically,
    do not use static value for the username.
DONE    
    ○ Add a search input field and replace the api {username} parameter with
    value from the search input field
DONE?    
    ○ Add a submit button and do not hit the api on every keystroke.
DONE?
    ○ Display a message if the username does not exist.
DONE?    
    ○ Handle api error in all pages

## Upload in Netlify
DONE?
 url:

### Difficulties

- Moving repo lists when pressing the buttons.
- I can't find a solution to the 403 forbitten error the github api is giving me 