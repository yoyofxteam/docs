## 视图配置
```golang
//...
.Configure(func(app *yoyogo.WebApplicationBuilder) {
        app.UseMvc(func(builder *mvc.ControllerBuilder) {
                 builder.AddViews(mvc.ViewOption{Pattern: "Static/templates/**"})
        }
}
```

## hello.tmpl 
```
<h1>{[{.name}]}</h1>
```

## 控制器
```golang
func (controller UserController) GetHtmlHello() actionresult.IActionResult {
	return controller.View("hello.tmpl", map[string]interface{}{
		"name": "hello world!",
	})
}
```