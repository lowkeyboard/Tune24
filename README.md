# Tune24

This repo contains a react native application with nodejs server as backend. The server has constructed its database from (https://www.kaggle.com/datasets/rsrishav/youtube-trending-video-dataset?resource=download&select=US_youtube_trending_data.csv).

Tune24 application where you can sign up and watch videos!

## How to run

cd front-end
yarn start && npx react-native run-ios

# NodeJs - Express

API Get Requests are sent to:

- https://my-youtube-24.herokuapp.com/youtubedata?page=1&limit=10
  source code is under back-end folder.

## Roadmap

- [x] Login, Register Pages (Firebase Auth)
- [x] Deploy NodeJS app to Heroku
- [ ] Retrive videos from backend.
- [ ] react native network api manager.
- [ ] extra library configurations for android.
