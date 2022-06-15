export default {
  widgets: [
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
                  buildHookId: '62aa3968b9b07a7a59b7ee83',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-1-studio-buu5gzdv',
                  apiId: '24bcb597-1cf2-4d27-b259-c13e8b4a22c7'
                },
                {
                  buildHookId: '62aa3969b4f70e7eeb817538',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-1-web-bmdb6m9q',
                  apiId: '7e6e4bff-0fc5-40d0-b1fa-aecc08280d4e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/HappyChapChap/sanity-kitchen-sink1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-1-web-bmdb6m9q.netlify.app', category: 'apps'}
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
