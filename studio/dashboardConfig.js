export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '61ae3e1f644235005bf33089',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ot83mbqi',
                  apiId: 'f1ecb5ce-ab82-4228-bde0-4341b47b8d77'
                },
                {
                  buildHookId: '61ae3e1f5863f9005a164689',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-c6g6hxie',
                  apiId: 'd9dc1f8e-eb9d-4940-8d75-44b586f88fc4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/danielfbustos3/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-c6g6hxie.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
