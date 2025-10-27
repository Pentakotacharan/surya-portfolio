module.exports = {
  siteMetadata: {
    title: 'Loka Surya Prakash',
    description: 'Product Manager & Full Stack Developer with expertise in AI-MERN stack integration',
    siteUrl: 'https://yourdomain.com',
    image: '/og-image.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Surya Prakash Portfolio',
        short_name: 'SP Portfolio',
        start_url: '/',
        background_color: '#0a192f',
        theme_color: '#64ffda',
        display: 'minimal-ui',
        icon: 'src/images/profile.jpeg',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};