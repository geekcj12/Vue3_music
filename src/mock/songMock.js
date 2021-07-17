import Mock from 'mockjs';

const { Random } = Mock;

export const getSongs = () => {
  let list = [
    {
      author: 'Aimer',
      title: 'カタオモイ',
      pic: 'https://api.i-meto.com/meting/api?server=netease&type=pic&id=18851126858262469&auth=fd20b12a1f90700909b116d37f6791ed3da5ba08',
      url: 'https://api.i-meto.com/meting/api?server=netease&type=url&id=431259256&auth=ffbb5e787e383900da037b70e445c652c7626c13'
    },
    {
      author: 'Aimer',
      title: 'Ref:rain',
      pic: 'https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951163153329445&auth=62e14fa906374fff94252af46b66dbbb9b8abd8d',
      url: 'https://api.i-meto.com/meting/api?server=netease&type=url&id=536623501&auth=e03f30af4c9b28591c40a956baa3a6bc7ff814e5'
    },
    {
      pic: Random.image('90x90'),
      title: 'Ever After',
      url: 'http://nanyang-admin.guigutech.net/upload/2021/0426/20210426223441_951.mp3',
      author: 'Aimer'
    },
    {
      author: "Aimer",
      lrc: "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1357775528&auth=eb278a705806477726730bff5367c50bdd62bc41",
      pic: "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951164138467290&auth=82738a53d070114862a7cef3c0a0b4a39f96fb4d",
      title: "コイワズライ",
      url: "https://api.i-meto.com/meting/api?server=netease&type=url&id=1357775528&auth=f89cfe7bad523d78479b00064fe8440b183699ed"
    },
    {
      author: "Aimer",
      lrc: "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=431259253&auth=748238e806e98c8da3ba2ec7b0df2b70bec5852b",
      pic: "https://api.i-meto.com/meting/api?server=netease&type=pic&id=18851126858262469&auth=fd20b12a1f90700909b116d37f6791ed3da5ba08",
      title: "蝶々結び",
      url: "https://api.i-meto.com/meting/api?server=netease&type=url&id=431259253&auth=a79b1195c044a8a502d6798ef1bc3186705da007"
    },
    {
      pic: Random.image('90x90'),
      title: 'Torches',
      url: 'http://nanyang-admin.guigutech.net/upload/2020/0919/20200919042213_865.mp3',
      author: 'Aimer'
    },
    {
      author: "Kiku",
      lrc: "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1382467850&auth=5b3d1b7026f2da08b4aead760db61a28c6a45bef",
      pic: "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951164270287253&auth=5ef2fb7464cfb88a55eff09ab35a8d89ba2d7373",
      title: "コイワズライ/相思病 piano.ver（翻自 Aimer）",
      url: "https://api.i-meto.com/meting/api?server=netease&type=url&id=1382467850&auth=27c6a62e30b761c67e05cf5997c25a62f05d4621"
    }
  ];
  
  return {
    code: 200,
    message: 'Success',
    data: list
  }
};
