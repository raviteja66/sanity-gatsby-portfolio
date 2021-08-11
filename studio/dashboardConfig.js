export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61145c32faac1946c9354bc2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-c8jc4sem',
                  apiId: '73235fd0-870b-4c99-a2c2-0118030c02f8'
                },
                {
                  buildHookId: '61145c321bedc43fe8efdca4',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ykcj1pzr',
                  apiId: 'b5da2aa9-7864-47b8-988c-ed0d17059281'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/raviteja66/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ykcj1pzr.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
