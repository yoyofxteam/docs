# Controller定义
```go
type UserController struct {
	mvc.ApiController
	userAction models.IUserAction
}

func NewUserController(userAction models.IUserAction) *UserController {
	return &UserController{userAction: userAction}
}

// GET URL http://localhost:8080/v1
func (controller UserController) GetInfo() mvc.ApiResult {
	return controller.OK(controller.userAction.Login("zhang"))
}

```
# Main.go
```go
package main
import (
	yoyogo "github.com/yoyofx/yoyogo/web"
        ......
)

func main() {
    configuration := abstractions.NewConfigurationBuilder().
		AddEnvironment().
		AddYamlFile("config").Build()
		
    yoyogo.NewWebHostBuilder().
           UseConfiguration(configuration).
           Configure(func(app *yoyogo.WebApplicationBuilder) {
               app.UseMvc(func(builder *mvc.ControllerBuilder) {
                   builder.AddController(contollers.NewUserController)
               })
          }).Build().Run()
}
```