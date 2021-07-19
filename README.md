## Getting started
Run the following command on the terminal
1. docker-compose up

-note before running the commands below make sure that host in knexfile.js is in comment since we are  not running this from our container terminal

2. npm run migrate 
3. npm run seed

-note after running the commands above make sure to remove the comment on the knexfile.js we did before for application to work on database.

If the docker-compose up fails to start some server make sure that there is no docker-data while cloning the repo.
If docker-data exists make sure to delete it before running the above command.