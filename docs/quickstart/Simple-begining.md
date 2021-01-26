## 框架安装
```bash
go get github.com/yoyofx/yoyogo
```
## 简单的开始
```golang 
package main
import (
    WebApplication "github.com/yoyofx/yoyogo/web"
    ......
)

func main() {
    webHost := WebApplication.CreateDefaultBuilder(func(rb router.IRouterBuilder) {
        rb.GET("/info",func (ctx *context.HttpContext) {
            ctx.JSON(200, context.M{"info": "ok"})
        })
    }).Build().Run()       //default port :8080
}
```
