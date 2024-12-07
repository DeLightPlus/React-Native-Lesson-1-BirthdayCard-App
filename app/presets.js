// Presets for different greeting card configurations

const cover1 = "https://img.freepik.com/free-photo/happy-birthday-soccer-themed_23-2149695991.jpg?t=st=1732789631~exp=1732793231~hmac=162534b793a82cdda110a15efcd03bb131207c914e5d3d34849560eaccbd2ec3&w=1380";
const cover2 = "https://img.freepik.com/free-psd/birthday-sales-blank-banner-background_23-2150810566.jpg?t=st=1732790081~exp=1732793681~hmac=bc9a6db2d65524f433137992472a57e36f309ce9d6433c030aa0dcf1887f2b03&w=1380";
export const presets = [
    {
      key: '1',
      value: 'Happy Birthday',
      cover: cover1, //require('./assets/cover1.jpg'), // Example path to image
      title: 'Happy Birthday',
      message: 'Wishing you a fantastic birthday!',
      birthday: '20/01/97',
      celebrant: 'John Doe',
      titlePosition: { top: 10, left: 20 },
      messagePosition: { top: 100, left: 20 },
      celebrantPosition: { top: 150, left: 20 },
      titleFontFamily: 'Arial',
      titleFontSize: 30,
      msgFontFamily: 'Georgia',
      msgFontSize: 20,
      celebrantFontFamily: 'Verdana',
      celebrantFontSize: 18,
      titleFontColor: '#FF5733',
      msgFontColor: '#4C4C4C',
      celebrantFontColor: '#00BFFF',
      titleFontStyle: 'bold',
      msgFontStyle: 'italic',
      celebrantFontStyle: 'normal',
      type: 'single',
      layout: 'landscape',
    },
    {
      key: '2',
      value: 'Happy Anniversary',
      cover: cover2, //require('./assets/cover2.jpg'), // Example path to image
      title: 'Happy Anniversary',
      message: 'Here’s to many more years of love!',
      birthday: '15/06/98',
      celebrant: 'Jane and Jack',
      titlePosition: { top: 15, left: 25 },
      messagePosition: { top: 120, left: 25 },
      celebrantPosition: { top: 170, left: 25 },
      titleFontFamily: 'Times New Roman',
      titleFontSize: 32,
      msgFontFamily: 'Roboto',
      msgFontSize: 22,
      celebrantFontFamily: 'serif',
      celebrantFontSize: 20,
      titleFontColor: '#9932CC',
      msgFontColor: '#2F4F4F',
      celebrantFontColor: '#FFD700',
      titleFontStyle: 'italic',
      msgFontStyle: 'normal',
      celebrantFontStyle: 'bold',
      type: 'double',
      layout: 'portrait',
    },
    // Add more presets as needed
  ];
  