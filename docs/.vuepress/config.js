module.exports = {
  title: 'ISKO',
  description: 'Just playing around',
  head: [
    ["link", {rel: "icon", href:"/img/isko.png"}]
  ],
  themeConfig: {
    logo: '/img/isko.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About us', link: '/aboutus/' },
      { text: 'bookshelf', link: '/bookshelf/' },
      {
        text: 'Others',
        ariaLabel: 'link to others',
        items: [
          { text: 'Brazil', link: 'http://isko.org.br' },
          { text: 'Canada + United States', link: 'http://iskocus.org' },
          { text: 'France', link: 'http://www.isko-france.asso.fr/' }
        ]
      }
    ],
    sidebar:{
      "/aboutus/":[""],
      "/":["","ISKO_chapters"]
    }
  }
}