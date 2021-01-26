## 服务发现
```go
    app.NewWebHostBuilder().
	UseConfiguration(configuration).
	ConfigureServices(func(serviceCollection *dependencyinjection.ServiceCollection) {
                // 依赖注入 Nacos 服务发现组件
		serverdiscovery.UseNacos(serviceCollection)

        }).Build().Run()
```
### Nacos配置：
```yaml
application:
  name: demo_dev
  metadata: "develop"
server_discovery:
  type: "nacos"
  metadata:
    url: "localhost"
    port: 8848
    namespace: "public"
    #group_name: ""
    #clusters: [""]
```

### 获取服务实例
新建一个Controller，并在GetSD函数中获取demo_dev服务的所有实例
```go
type UserController struct {
	mvc.ApiController
	discoveryClient serverdiscovery.IServerDiscovery
}

func NewUserController(sd serverdiscovery.IServerDiscovery) *UserController {
	return &UserController{ discoveryClient: sd}
}

func (controller UserController) GetSD() mvc.ApiResult {
	serviceList := controller.discoveryClient.GetAllInstances("demo_dev")
	return controller.OK(serviceList)
}
```