export default defineAppConfig({
  alpine: {
    title: 'NYT92',
    description: 'NYT92 official blog',
    image: {
      src: '/nyt92-bh.svg',
      alt: 'bg',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/nyt92-logo-light.svg', // path of the logo
        pathDark: '/nyt92-logo.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'nyt92-logo' // alt of the logo
      }
    },
    footer: {
      credits: {
        // possible value are : true | false
        enabled: false,

        // our github repository
        repository: 'https://www.github.com/nuxt-themes/alpine',

        text: ''
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Find me at' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: 'nyt92',
      instagram: '',

      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/nuxtlabs'
      },

      github: 'nyt92',
      youtube: 'nyt92official'
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})