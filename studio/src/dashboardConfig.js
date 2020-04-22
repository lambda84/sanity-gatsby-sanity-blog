export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ea0a2606b6b85024f419dc6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-sanity-blog-studio',
                  apiId: '5d61a0f7-9306-4111-bb49-2cb424093eb0'
                },
                {
                  buildHookId: '5ea0a260e8e85a01908e2265',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-sanity-blog',
                  apiId: '9a4bbde9-cf2a-4e46-9e57-9a909e37baa1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lambda84/sanity-gatsby-sanity-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-sanity-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
