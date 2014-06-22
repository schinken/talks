var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'Spaceautomation',
    subtitle: 'making hackerspaces less complicated',
    eventInfo: {
      title: 'GPN14',
      date: '2014-06-22'
    },
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: false, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'images/backspace/icon.png',
    fonts: [
      'Open Sans:regular,semibold,italic,italicsemibold',
      'Source Code Pro'
    ],
    //theme: ['mytheme'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'schinken',
    company: 'backspace e.V.',
    twitter: '@sch1nken',
    www: 'https://hackerspace-bamberg.de',
    github: 'http://github.com/schinken'
  }]
};

