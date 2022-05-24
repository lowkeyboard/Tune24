const jsonServer = require("json-server");
const queryString = require("query-string");

const server = jsonServer.create();
const router = jsonServer.router("youtube_db.json");
const port = process.env.PORT || 8080;
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get("/youtubedb", (req, res) => {
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
    rHDG6lKlkS4: {
      view_count: "290899",
      channelId: "UCcgVECVN4OKV6DH1jLkqmcA",
      description:
        "I'm coming to TAMPA on Dec. 18t!. Watch me fight Vs Tommy Fury live on Showtime PPV.PPV Live-December 18th live on pay-per-view #PaulWoodley II Leave No Doubt\ud83c\uddfa\ud83c\uddf8 SHOWTIME + cable and sat\ud83c\uddec\ud83c\udde7 FITE.tv\ud83c\udde8\ud83c\udde6 FITE.tv +local cable and sat\ud83c\udde6\ud83c\uddfa FITE.tv + MainEvent / Foxtel\ud83c\uddf3\ud83c\uddff FITE.tvEurope FITE.tvAsia FITE.tvAfrica FITE.tv Middle East FITE.tvTICKETS ON SALE NOW \u27a4  https://bit.ly/PAULTAMPAINSTAGRAM \u27a4 https://www.instagram.com/jakepaul/THE PROBLEM BOT \u27a4 https://www.instagram.com/theproblembot/TWITTER \u27a4  http://twitter.com/JakePaul#SHOSports #ShowtimePPV #JakePaul #TyronWoodley\ud83d\udd34SUBSCRIBE \u27a4 http://bit.ly/SUB2JAKEPAUL \u21aa watch sum mo stuff\u27a4  LINK HEREINSTAGRAM \u27a4  https://www.instagram.com/JakePaul TWITTER \u27a4  http://twitter.com/JakePaul \u26a0 WARNING \u26a0Please be warned (and we cannot possibly stress this enough); under no circumstances should any challenges, stunts, or pranks be attempted by any of our viewers. All challenges, stunts, and pranks are performed by trained professionals in a controlled environment and are for entertainment purposes only. Again, do not try anything you see in this content at home and always consult a parent or adult with any questions or concerns.",
      title: "All Access- Paul vs. Woodley 2 - Part 3",
      comments_disabled: "False",
      video_id: "rHDG6lKlkS4",
      dislikes: "0",
      comment_count: "571",
      publishedAt: "2021-12-15T22:11:38Z",
      ratings_disabled: "False",
      thumbnail_link: "https://i.ytimg.com/vi/rHDG6lKlkS4/default.jpg",
      trending_date: "2021-12-19T00:00:00Z",
      channelTitle: "Jake Paul",
      categoryId: "22",
      tags: "jake paul",
      likes: "12729",
    },
    "1QD0FeZyDtQ": {
      view_count: "16673347",
      channelId: "UCijULR2sXLutCRBtW3_WEfA",
      description:
        "Dreamcatcher(\ub4dc\ub9bc\uce90\uccd0) 'Odd Eye' MV \u25b6 Dreamcatcher(\ub4dc\ub9bc\uce90\uccd0) More Information- Dreamcatcher YouTube : https://www.youtube.com/dreamcatcherofficial- Dreamcatcher Twitter : https://twitter.com/hf_dreamcatcher - Dreamcatcher Facebook : https://www.facebook.com/happyfacedreamcatcher- Dreamcatcher V Live : https://channels.vlive.tv/E8D2CB/- Dreamcatcher Weibo : http://weibo.com/dreamcatcher7 - Dreamcatcher Instagram : http://instagram.com/hf_dreamcatcher- Dreamcatcher G.Nstagram : https://instagram.com/goodnight_dreamcatcher- Dreamcatcher Fan Cafe : http://cafe.daum.net/Dreamcatcher7- Dreamcatcher TikTok :  https://vt.tiktok.com/ZS4QAJYa/- Dreamcatcher Weverse : https://weverse.onelink.me/qt3S/599e73f0 #\ub4dc\ub9bc\uce90\uccd0 #Dreamcatcher #Odd_Eye",
      title: "Dreamcatcher(\ub4dc\ub9bc\uce90\uccd0) 'Odd Eye' MV",
      comments_disabled: "False",
      video_id: "1QD0FeZyDtQ",
      dislikes: "3327",
      comment_count: "90956",
      publishedAt: "2021-01-26T09:00:01Z",
      ratings_disabled: "False",
      thumbnail_link: "https://i.ytimg.com/vi/1QD0FeZyDtQ/default.jpg",
      trending_date: "2021-02-02T00:00:00Z",
      channelTitle: "Dreamcatcher official",
      categoryId: "10",
      tags: "Dremacatcher|\ub4dc\ub9bc\uce90\uccd0|MV|Music Video|\ubba4\uc9c1\ube44\ub514\uc624|KPOP|IDOL|KPOP IDOL|\uc544\uc774\ub3cc|\uc5ec\uc790\uc544\uc774\ub3cc|\uac78\uadf8\ub8f9|COME BACK|\ucef4\ubc31|Odd Eye|\uc624\ub4dc\uc544\uc774|\ub4dc\ub9bc\uce90\uccd0 \uc624\ub4dc\uc544\uc774|\ub4dc\uce90 \uc624\ub4dc\uc544\uc774|\ub4dc\ub9bc\uce90\uccd0 Odd Eye|\ub4dc\uce90 Odd Eye|Dreamcatcher Odd Eye|\uc9c0\uc720|\uc218\uc544|\uc2dc\uc5f0|\ud55c\ub3d9|\uc720\ud604|\ub2e4\ubbf8|\uac00\ud604|JI U|SU A|SIYEON|HANDONG|YOOHYEON|DAMI|GAHYEON|\ub4dc\uce90 \ucef4\ubc31|\ub4dc\ub9bc\uce90\uccd0 \ucef4\ubc31|Dreamcatcher comeback|Dreamcatcher MV|\ub4dc\ub9bc\uce90\uccd0 \ubba4\ube44|\ub4dc\uce90 \ubba4\ube44|\uc0ac\uc774\ubc84\ud391\ud06c|Cyberpunk|odd eye",
      likes: "405959",
    },
    "jr9lqsHUS-o": {
      view_count: "4672096",
      channelId: "UCDhM2k2Cua-JdobAh5moMFg",
      description:
        "ITZY LOCO Dance Practice (5K)ITZY The 1st Album CRAZY IN LOVEhttps://orcd.co/crazyinlove Find ITZY LOCO onMelOn https://orcd.co/crazyinloveApple Music https://apple.co/3APw0gkSpotify Spotify https://spoti.fi/2XMtUzT[ITZY Official] https://www.youtube.com/c/ITZYhttps://www.instagram.com/itzy.all.in.ushttp://www.twitter.com/ITZYOfficialhttp://www.facebook.com/OfficialITZYhttps://www.vlive.tv/channel/BAE889http://ITZY.jype.comhttp://fans.jype.com/ITZYhttps://www.tiktok.com/@itzyofficialhttps://www.weibo.com/u/7462077750?is...#ITZY #CRAZYINLOVE #LOCOCopyrights 2021 \u24d2 JYP Entertainment. All Rights Reserved",
      title: "ITZY LOCO Dance Practice (5K)",
      comments_disabled: "False",
      video_id: "jr9lqsHUS-o",
      dislikes: "3429",
      comment_count: "9719",
      publishedAt: "2021-09-27T15:00:33Z",
      ratings_disabled: "False",
      thumbnail_link: "https://i.ytimg.com/vi/jr9lqsHUS-o/default.jpg",
      trending_date: "2021-10-02T00:00:00Z",
      channelTitle: "ITZY",
      categoryId: "24",
      tags: "JYP Entertainment|JYP|ITZY|\uc788\uc9c0|ITZY Video|ITZY Yeji|ITZY Lia|ITZY Ryujin|ITZY Chaeryeong|ITZY Yuna|\uc788\uc9c0 \uc608\uc9c0|\uc788\uc9c0 \ub9ac\uc544|\uc788\uc9c0 \ub958\uc9c4|\uc788\uc9c0 \ucc44\ub839|\uc788\uc9c0 \uc720\ub098|\uc608\uc9c0|\ub9ac\uc544|\ub958\uc9c4|\ucc44\ub839|\uc720\ub098|Yeji|Lia|Ryujin|Chaeryeong|Yuna|ITZY BEHIND|ITZY VIDEOS|ITZY DEBUT|\uc788\uc9c0 \ub370\ubdd4|ITZY GUESS WHO|ITZY TEASER|\uc788\uc9c0 \ud2f0\uc800|GUESS WHO \ud2f0\uc800|\uc788\uc9c0 \ubba4\ube44 \ud2f0\uc800|ITZY MV TEASER|ITZY MV|M/V|TEASER|\uc788\uc9c0 \ucef4\ubc31|ITZY COMEBACK|CRAZYINLOVE|LOCO|ITZY LOCO",
      likes: "413572",
    },
    L5ByY30tfvM: {
      view_count: "3714685",
      channelId: "UCtylTUUVIGY_i5afsQYeBZA",
      description:
        "Lyrical Lemonade Presents:Cochise - Tell Em ft. $NOT (Official Music Video)https://cochise.lnk.to/tellem Cochise Socials:http://instagram.com/cochisehttp://twitter/com/cochise$NOT Socials:http://instagram.com/snothttp://twitter.com/snotDirected & Edited: Cole Bennett Song Produced by: JootsuDP: Brett Arndt 1st AC: Dima Shorin 2nd AC: Luciana Salinas Steadicam: Luke Rihl JIB Operator: Mark ZurawiecSFX Makeup: Michelle Mink Makeup Asst: Adelyn FahrlanderSet Dresser: Jaden Lowe Headphones: Brittany BennettGaffer: Chad McClellan Key Grip : Lamar Bloodworth BBE: Trent MioscernyBBG: Andrew SkalakVehicle Coordinator: Sebastian RodriguezTruck Provided By: Smooth Performance OffroadExecutive Producer: Sal Tarantino Producer: Susan Bennett Production Manager: Toni Sudimac Associate Producer: Jake Millan--Official Channel of Lyrical Lemonade Subscribe for updates on music videos, interviews, performance videos, etc.Lyrical Lemonade's Hot 25 Spotify Playlist:https://open.spotify.com/user/gh3vdz775oy18ah1wp9ucxsj5/playlist/5UuPeWDR2I8a8pORvW9vmrLyrical Lemonade Socials:http://www.twitter.com/lyricalemonadehttp://www.instagram.com/lyricalemonadehttp://www.facebook.com/lyricalemonadehttp://www.lyricallemonade.comCole Bennett Socials:http://www.twitter.com/_colebennett_http://www.instagram.com/_colebennett_LENNY ~ a hidden character representing happiness & good energyhttp://instagram.com/lenny",
      title: "Cochise - Tell Em ft. $NOT (Directed by Cole Bennett)",
      comments_disabled: "False",
      video_id: "L5ByY30tfvM",
      dislikes: "5784",
      comment_count: "21225",
      publishedAt: "2021-05-28T18:00:10Z",
      ratings_disabled: "False",
      thumbnail_link: "https://i.ytimg.com/vi/L5ByY30tfvM/default.jpg",
      trending_date: "2021-06-05T00:00:00Z",
      channelTitle: "Lyrical Lemonade",
      categoryId: "24",
      tags: "Cochise|Tell Em|Whatsup|Wassup|Tell Em It's On|SNOT|$NOT|Lyrical Lemonade|Cole Bennett|Plano IL|Chicago|Farm|Cornfield|Tractor|Hip Hop|Rap|Feel It In My System|Hatchback|Proteine Creatine",
      likes: "297034",
    },
    "2oZQvTEnPGo": {
      view_count: "2449524",
      channelId: "UCiWLfSweyRNmLpgEHekhoAg",
      description:
        "Stephen A. Smith, Max Kellerman and Jay Williams weigh in on whether Michael Jordan and the Charlotte Hornets made the right choice by drafting LaMelo Ball with the No. 3 overall pick in the 2020 NBA Draft.#FirstTake #NBA\u2714\ufe0f Subscribe to ESPN+https://plus.espn.com/\u2714\ufe0f Get the ESPN App: http://www.espn.com/espn/apps/espn\u2714\ufe0f Subscribe to ESPN on YouTube: http://es.pn/SUBSCRIBEtoYOUTUBE\u2714\ufe0f Subscribe to NBA on ESPN on YouTube: http://bit.ly/SUBSCRIBEtoNBAonESPN\u2714\ufe0f Watch ESPN on YouTube TV: http://es.pn/YouTubeTVESPN on Social Media:\u25ba Follow on Twitter: http://www.twitter.com/espn\u25ba Like on Facebook: http://www.facebook.com/espn\u25ba Follow on Instagram: http://www.instagram.com/espnVisit ESPN on YouTube to get up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, NHL, MLB, NBA, College Football, NCAA Basketball, soccer and more. More on ESPN.com: https://www.espn.com",
      title:
        "Did Michael Jordan make the right choice by drafting LaMelo Ball to the Hornets? | First Take",
      comments_disabled: "False",
      video_id: "2oZQvTEnPGo",
      dislikes: "1086",
      comment_count: "3615",
      publishedAt: "2020-11-19T17:17:01Z",
      ratings_disabled: "False",
      thumbnail_link: "https://i.ytimg.com/vi/2oZQvTEnPGo/default.jpg",
      trending_date: "2020-11-27T00:00:00Z",
      channelTitle: "ESPN",
      categoryId: "17",
      tags: "first take|lamelo ball|michael jordan|stephen a smith|nba|nab on espn|espn nba draft|2020 nba draft|stephen a. smith|stephen a.|stephen a|mj|basketball|espn michael jordan|jordan|espn|espn nba|first take espn|first take today|stephen a smith first take|first take stephen a smith|espn first take|#espn|nba espn|first take nba|nba on espn|max kellerman|#firsttake|lamelo ball nba draft|lamelo ball nba",
      likes: "31448",
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

    console.log(result.data);

    return res.jsonp(result);
  }

  //Otherwise, keep default behavior
  res.jsonp(res.locals.data);
};

server.use(router);

server.listen(port, () => console.log("app is listening at." + port));
