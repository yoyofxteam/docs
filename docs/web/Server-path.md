## 设置HTTP服务路由
server.path of the application. 应用的上下文路径，也可以称为项目路径，是构成url地址的一部分。
```yml
yoyogo:
  application:
    name: yoyogo_demo_dev
    metadata: "develop"
    server:
      type: "fasthttp"
      address: ":8080"
      path: "app"
      max_request_size: 2096157
      mvc:
        template: "/v1/{controller}/{action}"
```
## 设置MVC路由模板
mvc.template 其中 {controller} 和 {action} 为固定参数，表示控制器和执行方法；按URL方式填写。