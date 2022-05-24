const jsonServer = require("json-server");
const queryString = require("query-string");

const server = jsonServer.create();
const router = jsonServer.router("youtube_db.json");
const port = process.env.PORT || 8080;
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get("/youtubedata", (req, res) => {
  //   res.jsonp(req.query);
  res.jsonp({
    W8heLOq4kiQ: {
      view_count: "4241939",
      channelId: "UCfgzyX8VuStff4elIxAN2Ag",
      description:
        "The Official Video For  REPLICA Ft El Alfa Out Now https://officialcj.lnk.to/replicaFollow CJ: IG: https://instagram.com/Realcj_/\u200b\u200b\u200b \u200bFacebook: https://www.facebook.com/Real-CJ-1016...Twitter: https://twitter.com/youwatchincj\u200b\u200b\u200b \u200bSoundcloud: https://soundcloud.com/cj50058\u200b#CJ #REPLICA #ELALFA #DEMBOW",
      title: "CJ - REPLICA FT EL ALFA (OFFICIAL VIDEO)",
      comments_disabled: "False",
      video_id: "W8heLOq4kiQ",
      dislikes: "3007",
      comment_count: "6632",
      publishedAt: "2021-09-17T04:00:20Z",
      ratings_disabled: "False",
      thumbnail_link: "https://i.ytimg.com/vi/W8heLOq4kiQ/default.jpg",
      trending_date: "2021-09-23T00:00:00Z",
      channelTitle: "Real CJ",
      categoryId: "10",
      tags: "cj|el alfa|replica|dembow|cjofficialvideo|dominican republic|hip hop|rap|drill|pop|pepas|4k|bad bunny|miami|new york|california|mexico|brazil|dance|tik tok|bop|whoopty|hit up|la mama|el cherry|kiko crazy|farruko|world|instagram",
      likes: "98024",
    },
    MvqTgrqosEk: {
      view_count: "2884153",
      channelId: "UCbzRzJNHx7ZLlJML9BjZQVQ",
      description:
        "Watch #highlights from the main event of #FuryWhyte featuring #tysonfury and #dillianwhyte. In the fight, Fury retained his heavyweight title with a highlight reel ko victory.Next Up for Top Rank Boxing, The junior lightweight division will crown a king on Saturday, April 30, when WBC champion Oscar Valdez (30-0, 23 KOs) takes on WBO king Shakur Stevenson (17-0, 9 KOs) from the MGM Grand Garden Arena in Las Vegas.Valdez-Stevenson, an eight-round lightweight co-feature between U.S. Olympic silver medalist Keyshawn Davis and Esteban Sanchez, and Nico Ali Walsh versus Alejandro Ibarra in a four-round middleweight special attraction will be broadcast live on ESPN, ESPN Deportes, and ESPN+ at 10 p.m. ET/7 p.m. PT.Try ESPN+ For Free: https://watch.espnplus.com/toprank/Subscribe to our YouTube channel to get notified about the latest highlights, free full fights, and fight week content as it's posted.Follow Top Rank on Twitter: http://www.twitter.com/trboxingFollow Top Rank on Instagram: http://www.instagram.com/toprankLike Top Rank on Facebook: http://www.facebook.com/trboxing",
      title:
        "Tyson Fury Knocks Out Dillian Whyte, Retains Heavyweight Championship | FIGHT HIGHLIGHTS",
      comments_disabled: "False",
      video_id: "MvqTgrqosEk",
      dislikes: "0",
      comment_count: "1919",
      publishedAt: "2022-04-23T22:45:00Z",
      ratings_disabled: "False",
      thumbnail_link: "https://i.ytimg.com/vi/MvqTgrqosEk/default.jpg",
      trending_date: "2022-05-04T00:00:00Z",
      channelTitle: "Top Rank Boxing",
      categoryId: "17",
      tags: "top rank boxing|tyson fury|tyson fury highlights|tyson fury knockouts|tyson fury motivation|tyson fury vs dillian whyte|tyson fury vs dillian whyte full fight|tyson fury vs dillian whyte highlights|tyson fury vs dillian whyte knockout|fury vs whyte highlights|fury vs whyte|dillian whyte highlights|dillian whyte vs tyson fury|dillian whyte|whyte vs fury|whyte vs fury knockout|boxing|tyson fury vs whyte|tyson fury francis ngannou|francis ngannou",
      likes: "10480",
    },
    "ja-H5ig9-xY": {
      view_count: "250817",
      channelId: "UCf7P7LZsVOvv8KWs2p1YINw",
      description:
        "This time on Five Nights at Freddy's: Security Breach but ruined by mods we go up against rainbow dash and finally achieve one of the endings.. ModdersJunior https://www.youtube.com/channel/UCTqU8UOE_JyKqy-ddozbJ0Ahttps://twitter.com/junior3DMIrastrishttps://www.nexusmods.com/users/24731574Mythical - https://github.com/Mythical-Githubhttps://steamcommunity.com/id/MythicalDataKboy he too lazy to link socials George https://www.youtube.com/channel/UCE0Y8O7OWdczmdEJC_NvSuA ________________________________________________________________________Video edited by COD www.twitter.com/xCODFATHER4xwww.youtube.com/user/xCODFATHER4xThumbnail by Drake https://www.youtube.com/channel/UC_FeS7C8xPkWjI5xYO5dV-g Outro Song - godspeed & ANH - StorginaANH https://www.youtube.com/channel/UCZ4ibN0hiQf8JqbSpcMOZhwhttps://www.instagram.com/prodbyanhGodspeedhttps://soundcloud.com/godspeeeeedhttps://www.instagram.com/mertprod________________________________________________________________________Other Channels Main Channel \u27a4  https://www.youtube.com/user/ToastedShoesVR Channel \u27a4 https://www.youtube.com/c/ToastyVRSecond Channel \u27a4 https://www.youtube.com/channel/UC5CaaQBfYqLHTGeCR1DJLSQSocials Twitter \u27a4 https://twitter.com/ToastedShoes Twitch \u27a4 https://twitch.tv/toastedshoes  Instagram \u27a4 https://instagram.com/toastedshoes Discord \u27a4 https://discord.gg/ftSZppf  Instagram \u27a4  https://instagram.com/toastedshoes Facebook \u27a4 https://www.facebook.com/ToastedShoes-102340821333238/?pageid=102340821333238&ftentidentifier=135578934676093&padding=0",
      title: "FNAF: Security Breach but ruined by mods 7 (Sad Ending)",
      comments_disabled: "False",
      video_id: "ja-H5ig9-xY",
      dislikes: "0",
      comment_count: "431",
      publishedAt: "2022-01-04T19:00:14Z",
      ratings_disabled: "False",
      thumbnail_link: "https://i.ytimg.com/vi/ja-H5ig9-xY/default.jpg",
      trending_date: "2022-01-07T00:00:00Z",
      channelTitle: "ToastedShoes",
      categoryId: "20",
      tags: "fnaf security breach|five nights at freddys security breach|security breach|fnaf|five nights at freddys|five nights at freddy's security breach|FNAF Mod|fnaf but ruined by mods|fnaf security breach mod|fnaf secruity breach mods|fnaf secruity breach but ruined by mods|five nights at freddys security breach mod|five nights at freddys security breach modded|fnaf secruirity breach but ruined by mods|five nights at freddys secruity breach but ruined by mods|toastedshoes",
      likes: "6141",
    },
    "T--BOS8oTec": {
      view_count: "1754890",
      channelId: "UC8Su5vZCXWRag13H53zWVwA",
      description:
        "BTS is TIME\u2019s 2020 Entertainer of the Year. Between releasing multiple albums and breaking every type of record in 2020, the Korean pop band ascended to the zenith of pop stardom. In an era marked by so much anguish and cynicism, BTS has stayed true to their message of kindness, connection and self-acceptance. Tune in for a special performance from BTS tonight at 10/9c on NBC.CONNECT WITH TIMEWeb: https://ti.me/36TTEspTwitter: https://ti.me/37W8Wy8Facebook: https://ti.me/36UOCvWInstagram: https://ti.me/370zRHQSubscribe to TIME \u25ba\u25ba http://bit.ly/SubscribeTIMEGet closer to the world of entertainment and celebrity news as TIME gives you access and insight on the people who make what you watch, read and share.https://ti.me/36WdUcUFind out more about the latest developments in science and technology as TIME\u2019s access brings you to the ideas and people changing our world.https://ti.me/2GVYWt4Let TIME show you everything you need to know about drones, autonomous cars, smart devices and the latest inventions which are shaping industries and our way of livinghttps://ti.me/2v6Q68RStay up to date on breaking news from around the world through TIME\u2019s trusted reporting, insight and accesshttps://ti.me/31oizTXMagazine: https://ti.me/37XvyhZNewsletter: https://ti.me/2GU4Gn0ABOUT TIMETIME brings unparalleled insight, access and authority to the news. A 24/7 news publication with nearly a century of experience, TIME\u2019s coverage shapes how we understand our world. Subscribe for daily news, interviews, science, technology, politics, health, entertainment, and business updates, as well as exclusive videos from TIME\u2019s Person of the Year, TIME 100 and more created by TIME\u2019s acclaimed writers, producers and editors.BTS | TIME Entertainer of the Yearhttps://ti.me/2GVJZHa",
      title: "BTS | TIME Entertainer of the Year",
      comments_disabled: "False",
      video_id: "T--BOS8oTec",
      dislikes: "807",
      comment_count: "10775",
      publishedAt: "2020-12-10T14:33:59Z",
      ratings_disabled: "False",
      thumbnail_link: "https://i.ytimg.com/vi/T--BOS8oTec/default.jpg",
      trending_date: "2020-12-16T00:00:00Z",
      channelTitle: "TIME",
      categoryId: "25",
      tags: "BTS|K POP|BTS ARMY|ARMY|RN|Music|Entertainer of the Year|Person of the Year|POY|Time|time magazine|magazine|time (magazine)|time.com|news today|world news|interview|science|technology|health|politics|entertainment|business|news|breaking news|live|lifestyle|video",
      likes: "322960",
    },
  });
});

// Custom output for LIST with pagination
router.render = (req, res) => {
  // Check get with pagination
  // if yes, custom output
  const headers = res.getHeaders();

  const totalCountHeader = headers["x-total-count"];
  if (req.method === "GET" && totalCountHeader) {
    const queryParams = queryString.parse(req._parsedUrl.query);

    const result = {
      data: res.locals.data,
      pagination: {
        _page: Number.parseInt(queryParams._page) || 1,
        _limit: Number.parseInt(queryParams._limit) || 2,
        _totalRows: Number.parseInt(totalCountHeader),
      },
    };

    return res.jsonp(result);
  }

  //Otherwise, keep default behavior
  res.jsonp(res.locals.data);
};

server.use(router);

server.listen(port, () => console.log("app is listening at." + port));
