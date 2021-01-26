## 服务发现
```golang
    app.NewWebHostBuilder().
	UseConfiguration(configuration).
	ConfigureServices(func(serviceCollection *dependencyinjection.ServiceCollection) {
                // 依赖注入 Consul 服务发现组件
		Consul.UseServiceDiscovery(serviceCollection)
        }).Build().Run()
```
### consul配置：
```yaml
application:
  name: demo_dev
  metadata: "develop"
server_discovery:
  type: "consul"
  metadata:
     address: "localhost:8500"
     health_check: "/actuator/health"
     tags: [""]
```

### 获取服务实例
新建一个Controller，并在GetSD函数中获取demo_dev服务的所有实例
```golang
type UserController struct {
	mvc.ApiController
	discoveryClient serverdiscovery.IServerDiscovery
}

func NewUserController(sd serverdiscovery.IServerDiscovery) *UserController {
	return &UserController{ discoveryClient: sd}
}

func (controller UserController) GetSD() Mvc.ApiResult {
	serviceList := controller.discoveryClient.GetAllInstances("demo_dev")
	return controller.OK(serviceList)
}
```