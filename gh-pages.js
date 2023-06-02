var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/msmirnyagin/watg.git', // Update to point to your repository  
        user: {
            name: 'msmirnyagin', // update to use your name
            email: 'msmirnyagin@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)