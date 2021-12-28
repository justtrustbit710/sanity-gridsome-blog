export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '61cb4ecfd5e945a29cf74e85',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-jbu7dfg8',
                  apiId: 'b27fb4e8-20e4-487c-8a51-dd1dffdbcfac'
                },
                {
                  buildHookId: '61cb4ecf87cc537c0eec2b08',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-gdxbpfyk',
                  apiId: '412422b3-cc6c-4785-8dd0-a617d77cf5cc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/justtrustbit710/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-gdxbpfyk.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
