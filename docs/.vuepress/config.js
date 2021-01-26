module.exports = {
    title: 'YoyoGo',
    description: '简单、轻量、快速、基于依赖注入的微服务框架',
    base : '/docs/',
    theme: 'default-prefers-color-scheme',
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
     head: [
      ['meta', {description:'简单、轻量、快速、基于依赖注入的微服务框架'}],
      ['link', { rel: 'icon', href: 'https://mnur-prod-public.oss-cn-beijing.aliyuncs.com/0/tech/yoyogo.png' }],
      ['script', {}, `
              var _hmt = _hmt || [];
              `
      ]
    ],
    themeConfig : {
      logo: 'https://mnur-prod-public.oss-cn-beijing.aliyuncs.com/0/tech/yoyogo.png',
      smoothScroll: true,
      repo: 'https://github.com/yoyofx/',
      repoLabel: 'GitHub',
      overrideTheme: 'dark',
      sidebar: [
        ['/quickstart/begin.md','快速预览'],
        ['/quickstart/YoyoGo微服务框架入门系列-基础入门--基本概念.md','基本概念'],
        ['/quickstart/Advanced-Example.md','代码展示'],
       
        {
            title: '服务配置',
            collapsable: true,
            children: [
                { title: '配置文件', path:'/configs/配置文件.md'},
                { title: '启动参数', path:'/configs/启动参数与环境变量.md'},
            ]
        },
        {
          title: 'Web框架',
          collapsable: false,
          children: [
              { title: '服务路由', path:'/web/Server-path.md'},
              { title: '静态资源绑定', path:'/web/静态资源绑定.md'},

              { title: 'JWT', path:'/web/JWT-Endpoint.md'},
              { title: '静态资源绑定', path:'/web/健康检查.md'},
              { 
                title: 'MVC模式',
                collapsable: true,
                children: [
                  { title: 'MVC控制器', path:'/mvc/Mvc-Controller.md'},
                  { title: 'MVC视图', path:'/mvc/View视图.md'},
                  { title: 'MVC过滤器', path:'/mvc/ActionFilter.md'},
                ]
              },
              { 
                title: '可观察性',
                collapsable: true,
                children: [
                  { title: '可观察性-健康检查', path:'/web/健康检查.md'},
                  { title: '可观察性-依赖检查', path:'/web/依赖检查.md'},
                  { title: '可观察性-pprof', path:'/web/pprof.md'},
                  { title: '可观察性-Prometheus', path:'/web/Prometheus集成.md'},
                ]
              },
              { 
                title: '中间件',
                collapsable: true,
                children: [
                  { title: '自定义中间件', path:'/middlewares/自定义中间件.md'},
                  { title: '跨域中间件', path:'/middlewares/跨域中间件.md'},
                  { title: 'JWT验证中间件', path:'/middlewares/JWT验证中间件.md'},
                  { title: 'RequestID中间件', path:'/middlewares/RequestID中间件.md'},
                ]
              },
             
          ]
        },
        {
          title: '微服务',
          collapsable: true,
          children: [
              { title: 'Nacos', path:'/microservices/ms-service-discovery.md'},
              { title: 'Consul', path:'/microservices/naming_consul.md'},
              { title: 'Eureka', path:'/microservices/naming_eureka.md'},
          ]
        },
        ['/logs/日志.md','服务日志'],
        {
          title: '工具库',
          collapsable: true,
          children: [
              { title: '邮件', path:'/tools/email.md'},
          ]
        },
      ],
      nav : [
          { text: '首页', link: '/' },
          { text: '文档', link: '/quickstart/begin.html' },
          { text: '源码', link: 'https://github.com/yoyofx/yoyogo' }
      ],
      
    }
  }
  