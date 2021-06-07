module.exports = {
  siteTitle: 'Gabe Loera | Software Engineer',
  siteDescription:
    'Gabe Loera is a software engineer based in the Dallas/Ft. Worth area who specializes in design, development and implementation of exceptional high-quality Software Solutions.',
  siteKeywords:
    'Gabe Loera, Gabe, gloera, gabeloe, software engineer, rest engineer, developer, java, utep.',
  siteUrl: 'http://www.gabeloera.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: '225973948',
  googleVerification: '',
  name: 'Gabe Loera',
  location: 'Dallas, TX',
  email: 'gabe@loeras.net',
  github: 'https://github.com/gloera',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/gloera',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/gloera',
    },
    {
      name: 'Codesignal',
      url: 'https://app.codesignal.com/profile/gloera',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    /*    {
      name: 'Work',
      url: '/#projects',
    }, **/
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
