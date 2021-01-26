<img src="https://mnur-prod-public.oss-cn-beijing.aliyuncs.com/0/tech/yoyogo.png" width = "380px" height = "120px" alt="" align=center />[中文](https://github.com/yoyofx/yoyogo/blob/master/README.md)  / [English](https://github.com/yoyofx/yoyogo/blob/master/README_En.md)

YoyoGo 简单、轻量、快速、基于依赖注入的微服务框架

* 文档： https://github.com/yoyofx/yoyogo/wiki

![Release](https://img.shields.io/github/v/tag/yoyofx/yoyogo.svg?color=24B898&label=release&logo=github&sort=semver)
![Go](https://github.com/yoyofx/yoyogo/workflows/Go/badge.svg)
![GoVersion](https://img.shields.io/github/go-mod/go-version/yoyofx/yoyogo)
[![Report](https://goreportcard.com/badge/github.com/yoyofx/yoyogo)](https://goreportcard.com/report/github.com/yoyofx/yoyogo)
[![Documentation](https://img.shields.io/badge/godoc-reference-blue.svg?color=24B898&logo=go&logoColor=ffffff)](https://godoc.org/github.com/yoyofx/yoyogo)
![Contributors](https://img.shields.io/github/contributors/yoyofx/yoyogo.svg)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

# 特色
- 漂亮又快速的路由器
- 中间件支持 (handler func & custom middleware)
- 微服务框架抽象了分层，在一个框架体系兼容各种server实现，如 rest,grpc等
- 受到许多出色的 Go Web 框架的启发，server可替换，目前实现了 **fasthttp** 和 **net.http**

QQ交流群： [780385870](https://qm.qq.com/cgi-bin/qm/qr?k=xP5ZSGZaLLgJIjK0P89gen8V-p5b1cHg&jump_from=webapi) (Go浪文学院) , 在这里感谢**贾国锦**帮忙设计的logo很漂亮。

也可以加入我的公众号，通过公众号入群菜单进入微信群

<a href="https://sourcerer.io/yoyofx"><img src="https://mnur-prod-public.oss-cn-beijing.aliyuncs.com/0/tech/20201209184239.png" width = "240px" height = "240px" alt="" align=center /></a>

感兴趣的朋友

## 框架安装
```go
go get github.com/yoyofx/yoyogo
```
###  go version < 1.13
```bash
window 下在 cmd 中执行：
set GO111MODULE=on
set GOPROXY=https://goproxy.io,direct,https://mirrors.aliyun.com/goproxy/,https://goproxy.cn,https://athens.azurefd.net,https://gonexus.dev 
linux  下执行：
export GO111MODULE=on
export GOPROXY=https://goproxy.cn
```
###  go version >= 1.13
```bash
go env -w GOPROXY=https://goproxy.io,direct,https://mirrors.aliyun.com/goproxy/,https://goproxy.cn,https://athens.azurefd.net,https://gonexus.dev
```
### vendor
```bash
go mod vendor       // 将依赖包拷贝到项目目录中去
```
### 简单的例子
```go
package main
import ...

func main() {
	WebApplication.CreateDefaultBuilder(func(rb router.IRouterBuilder) {
        rb.GET("/info",func (ctx *context.HttpContext) {    // 支持Group方式
            ctx.JSON(200, context.H{"info": "ok"})
        })
    }).Build().Run()       //默认端口号 :8080
}
```
![](https://mnur-prod-public.oss-cn-beijing.aliyuncs.com/0/tech/20201209182340.png)

# 实现进度
## 标准功能
* [X] 打印Logo和日志（YoyoGo）
* [X] 统一程序输入参数和环境变量 (YoyoGo)
* [X] 简单路由器绑定句柄功能
* [X] HttpContext 上下文封装(请求，响应)
* [X] 静态文件端点（静态文件服务器）
* [X] JSON 序列化结构（Context.H）
* [X] 获取请求文件并保存
* [X] 获取请求数据（form-data，x-www-form-urlencoded，Json ，XML，Protobuf 等）
* [X] Http 请求的绑定模型（Url, From，JSON，XML，Protobuf）
### 响应渲染功能
* [X] Render Interface
* [X] JSON Render
* [X] JSONP Render
* [X] Indented Json Render
* [X] Secure Json Render
* [X] Ascii Json Render
* [X] Pure Json Render
* [X] Binary Data Render
* [X] TEXT
* [X] Protobuf
* [X] MessagePack
* [X] XML
* [X] YAML
* [X] File
* [X] Image
* [X] Template
* [X] Auto formater Render

## 中间件
* [X] Logger
* [X] StaticFile
* [X] Router Middleware
* [X] CORS	
* [X] Binding
* [X] JWT
* [X] RequestId And Tracker for SkyWorking

## 路由
* [x] GET，POST，HEAD，PUT，DELETE 方法支持
* [x] 路由解析树与表达式支持
* [x] RouteData路由数据 (/api/:version/) 与 Binding的集成 
* [x] 路由组功能
* [x] MVC默认模板功能
* [x] 路由过滤器 Filter

## MVC
* [x] 路由请求触发Controller&Action
* [x] Action方法参数绑定
* [x] 内部对象的DI化
* [x] 关键对象的参数传递

## Dependency injection
* [X] 抽象集成第三方DI框架
* [X] MVC模式集成
* [X] 框架级的DI支持功能

## 扩展
* [X] 配置
* [X] WebSocket
* [X] JWT 
* [ ] swagger
* [ ] GRpc	 
* [X] Prometheus 