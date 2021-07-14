## xxl-job hosting

```go
import (
	"github.com/yoyofx/yoyogo/abstractions/configuration"
	"github.com/yoyofx/yoyogo/pkg/scheduler"
	"github.com/yoyofxteam/dependencyinjection"
)

func main() {
	// -f ./conf/test_conf.yml 指定配置文件 , 默认读取 config_{profile}.yml , -profile [dev,test,prod]
	config := configuration.YAML("config")

	scheduler.NewXxlJobBuilder(config).
		ConfigureServices(func(collection *dependencyinjection.ServiceCollection){
			scheduler.AddJobs(collection, NewDemoJob)
		}).
		Build().Run()
}


```

### Job 
```go
type DemoJob struct {
}

func NewDemoJob() *DemoJob {
	return &DemoJob{}
}

func (*DemoJob) Execute(cxt *scheduler.JobContext) (msg string) {
	cxt.Report("Job %d is beginning...", cxt.LogID)

	for i := 1; i <= 100; i++ {
		cxt.Report("Job Progress: %d Percent.", i)
		time.Sleep(time.Second)
	}

	return cxt.Done("666")
}

//GetJobName 自定义任务的名字
func (*DemoJob) GetJobName() string {
	return "job1"
}
```

### config.yml
```yaml
yoyogo:
  application:
    name: console-xxl-job
    metadata: "dev"
    server:
      type: "console"    # 宿主类型是 console
    xxl:
      serverAddr: http://127.0.0.1:8080/xxl-job-admin/
      port: 9999
```