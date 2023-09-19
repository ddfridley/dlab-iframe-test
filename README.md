# DemocracyLab Iframe Test 

This repo is a simple node server and html page that can be pushed to heroku and used to test the iframes features of [DemocracyLab's server](https://github.com/DemocracyLab/CivicTechExchange).
Thanks to [static_html_heroku_node_example](https://github.com/onoriofelipe/static_html_heroku_node_example) for helping us get started.

## setup and deploy
```
git clone <this repo>
cd <the new directory>
heroku create new-app-name
git push heroku
```
then you have to get the full server path name from the heroku message, and you can browse to that path.

Then you can see the public/misc_html.html page pulling in iframes from DemocracyLab.

Note that this will be blocked by Content Security Policies until your new domain name has been configured into DemocracyLab

