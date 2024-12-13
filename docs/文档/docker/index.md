# 1 docker概述 

## 1.1 什么是Docker容器？

Docker容器是一种轻量级的虚拟化技术，它允许开发者将应用及其依赖文件封装在Docker镜像文件中，然后在不同的物理设备上运行这些镜像，从而实现应用的快速部署和资源的高效利用。

## 1.2 Docker容器和VM的区别

### 启动速度

+ Docker：启动速度非常快，通常在秒级别。这是因为Docker容器直接运行在宿主操作系统上，不需要额外的启动步骤。
+ 虚拟机：启动速度相对较慢，通常需要几分钟。虚拟机需要启动一个完整的操作系统，这包括加载内核、初始化各种服务等。

### 性能损耗

+ Docker：由于Docker容器共享宿主操作系统的内核，因此性能损耗较小。Docker的资源开销（CPU、内存等）比虚拟机低。
+ 虚拟机：虚拟机需要运行一个完整的操作系统，因此性能损耗较大。虚拟机的资源开销较高，因为每个虚拟机都需要自己的操作系统和内核。

### 隔离性

+ Docker：Docker的隔离性较弱，它属于进程级别的隔离。Docker容器共享宿主操作系统的内核，因此可能存在一定的安全隐患。
+ 虚拟机：虚拟机的隔离性较强， 它属于系统级别的隔离。每个虚拟机都有自己的操作系统和内核，因此安全性更高。

### 架构和实现

+ Docker：Docker利用Linux内核的容器化特性（如Namespaces和Cgroups）来实现资源和环境的隔离。Docker引擎可以看作是对这些内核特性的封装。
+ 虚拟机：虚拟机通过Hypervisor（虚拟机管理系统）来实现资源和环境的隔离。Hypervisor虚拟化CPU、内存、I/O设备等，为每个虚拟机提供一个独立的操作系统环境。

### 使用场景

+ Docker：适用于需要快速交付和部署应用的场景。Docker通过镜像和容器实现了应用的快速打包、分发和运行。
+ 虚拟机：适用于需要高隔离性和稳定性的场景。虚拟机提供了完整的操作系统环境，适合运行复杂的应用和服务。

### 分发和部署

+ Docker：Docker通过Dockerfile记录容器的构建过程，可以在集群中实现快速分发和部署。Docker镜像的分发更加体系化。
+ 虚拟机：虚拟机通过镜像实现环境交付的一致性，但镜像的分发无法体系化，相对较为繁琐。

##  1.2 docker优势

 更快速的应用交付和部署： 

传统的应用开发完成后，需要提供一堆安装程序和配置说明文档，安装部署后需根据配置文档进行繁杂 的配置才能正常运行。Docker化之后只需要交付少量容器镜像文件，在正式生产环境加载镜像并运行即 可，应用安装配置在镜像里已经内置好，大大节省部署配置和测试验证时间。 

更便捷的升级和扩缩容： 随着微服务架构和Docker的发展，大量的应用会通过微服务方式架构，应用的开发构建将变成搭乐高积 木一样，每个Docker容器将变成一块“积木”，应用的升级将变得非常容易。当现有的容器不足以支撑业 务处理时，可通过镜像运行新的容器进行快速扩容，使应用系统的扩容从原先的天级变成分钟级甚至秒 级。 

更简单的系统运维： 应用容器化运行后，生产环境运行的应用可与开发、测试环境的应用高度一致，容器会将应用程序相关 的环境和状态完全封装起来，不会因为底层基础架构和操作系统的不一致性给应用带来影响，产生新的 BUG。当出现程序异常时，也可以通过测试环境的相同容器进行快速定位和修复。

 更高效的计算资源利用： Docker是内核级虚拟化，其不像传统的虚拟化技术一样需要额外的Hypervisor [管理程序] 支持，所以在 一台物理机上可以运行很多个容器实例，可大大提升物理服务器的CPU和内存的利用率。  

# 2 docker安装

## 2.1 docker的基本组成

### 镜像

是一个用于创建容器的只读模版。可以看做操作系统的一个快照，所以一个镜像可以创建多个容器。

具有层级结构，所以会看到镜像是一层一层的拉取。

### 容器

 Docker 利用容器（Container）独立运行的一个或一组应用。

容器是用镜像创建的运行实例。 它可以被启动、开始、停止、删除。每个容器都是相互隔离的，保证安全的平台。

 可以把容器看做是一个简易版的 Linux 环境（包括root用户权限、进程空间、用户空间和网络空间等） 和运行在其中的应用程序。。

 容器的定义和镜像几乎一模一样，也是一堆层的统一视角，唯一区别在于容器的最上面那一层是可读可写 的。  

### 仓库

 仓库（Repository）是集中存放镜像文件的场所。 

仓库(Repository)和仓库注册服务器（Registry）是有区别的。仓库注册服务器上往往存放着多个仓 库，每个仓库中又包含了多个镜像，每个镜像有不同的标签（tag）。 

仓库分为公开仓库（Public）和私有仓库（Private）两种形式。

 最大的公开仓库是 Docker Hub(https://hub.docker.com/)，存放了数量庞大的镜像供用户下载。 国内的公开仓库包括阿里云 、网易云 等  

## 2.2 安装docker

+ 直接参考官网-----[地址](https://docs.docker.com/engine/install/centos/)

```shell
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update


# 安装
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# 测试
sudo docker run hello-world
```



## 2.3 阿里云加速

+ 直接参考官网------[地址](https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors)

* 1panel加速：

```shell
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://docker.1panel.live"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```



## 2.4 底层原理

![](/Users/dsw/workspace/now/web/wds-blog/docs/文档/docker/assets/1732906158411-36392b9f-a108-48b1-929c-6ce72ad0c337-4063917.png)

### 客户端

docker客户端是和docker交互的主要方式，可以通过命令行来实现交互，比如docker run。。。。。。

### 守护进程  Docker daemon

Docker 守护进程（通常称为 Docker daemon）是 Docker 架构中的核心组件之一，负责管理和运行 Docker 容器。它是一个后台服务进程，运行在宿主机上，能够监听来自客户端的请求，并执行相应的操作，如创建、启动、停止和删除容器等。

通常适合系统的启动而启动，可以使用如下命令

```shell
sudo systemctl start docker
sudo systemctl stop docker
sudo systemctl restart docker
```

# 3 docker常用命令

## 3.1 帮助命令

```shell
docker version # 显示 Docker 版本信息。
docker info # 显示 Docker 系统信息，包括镜像和容器数。。
docker --help # 帮助
```

## 3.2 镜像命令

###  docker images  

+ 列出本地镜像

```shell
docker images  
```

可选项 -a： 列出本地所有镜像 -q： 只显示镜像id --digests： 显示镜像的摘要信息

结果：

REPOSITORY 镜像的仓库源 TAG 镜像的标签 IMAGE ID 镜像的ID CREATED 镜像创建时间 SIZE 镜像大小

![](/Users/dsw/workspace/now/web/wds-blog/docs/文档/docker/assets/1732765280397-bfb4851b-b22d-4bb5-be35-543d831ec17e-4063917.png)

### docker search 

+ 搜索镜像

```shell
docker search ubuntu
```

可追加的参数：--filter=stars=50 ： 列出收藏数不小于指定值的镜像。

### docker pull

+ 拉取镜像

```shell
docker pull ubuntu	# 不写标签（tag）默认是拉取最新版本
```

### docker rmi

+ 删除容器

```shell
docker rmi -f 镜像id
docker rmi -f 镜像名：id 镜像名：id
docker rmi -f $(docker images -aq)	# 删除全部镜像
```

## 3.3 容器命令

+ 有了镜像才可以创建容器

### docker run 

+ 使用镜像运行容器

```shell
docker run -it --name test ubuntu /bin/bash
```

| 参数                  | 描述                                                         |
| --------------------- | ------------------------------------------------------------ |
| `-d`, `--detach`      | 在后台运行容器并打印容器ID                                   |
| `-i`, `--interactive` | 保持STDIN打开，即使没有附加                                  |
| `-t`, `--tty`         | 分配一个伪TTY（通常与`-i`一起使用）                          |
| `-p`, `--publish`     | 发布容器端口到主机，格式为 `<主机端口>:<容器端口>` 或 `udp://<主机端口>:<容器端口>` |
| `-e`, `--env`         | 设置环境变量，例如 `-e VARNAME=value`                        |
| `-v`, `--volume`      | 绑定挂载一个文件或目录，格式为 `<主机路径>:<容器路径>` 或 `<主机路径>:<容器路径>:[rw |
| `--name`              | 为容器指定一个名称                                           |
| `--network`           | 连接容器到指定的网络                                         |


### docker ps

+ 参看有哪些运行的容器

```shell
docker ps [options]
```

### 进入终端后退出容器

```shell
exit  # 会停止容器
ctrl+p+q #容器不停止退出	
```

### 启动停止容器

```shell
docker start 容器id或容器名称
docker restart 容器id或容器名称
docker stop 容器id或容器名称
docker kill 容器id或容器名称
```

### 删除容器

```shell
docker rm 
docker rm -f $(docker ps -aq) #删除所有容器
docker ps -aq | xargs docker rm #使用管道命令--可以用来启动多个容器
```

### docker commit 

+ 提交容器为镜像

类似于vm中的快照可以保存容器的状态

```shell
 docker commit 提交容器副本使之成为一个新的镜像！ 
 docker commit -m="提交的描述信息" -a="作者" 容器id 要创建的目标镜像名:[标签名]   
```

## 3.4 其他常用命令

### docker run -d

+ 后台启动容器

```shell
docker run -d 容器名：tag
```

容器内如果没有前台进程就会直接停止。

### docker logs

+ 查看日志

```shell
docker logs -tf --tail 10 容器id
```

参数

 -t 显示时间戳 

 -f 打印最新的日志 

 --tail 数字 显示多少条！

### docker top 

+ 查看容器内进程信息

![](/Users/dsw/workspace/now/web/wds-blog/docs/文档/docker/assets/1729178746814-2271ca1c-d173-4611-afdf-bf4014c6b5a8-4063917.png)

### docker inspect 

+ 查看容器的元数据

![](/Users/dsw/workspace/now/web/wds-blog/docs/文档/docker/assets/1729178778926-34aea635-fda0-4ac6-b883-5dca86e19ef5-4063917.png)

###  docker exec 和 docker attach

+ 与运行中的容器进行交互命令

```shell
docker exec -it 容器id bashShell		# 打开新的终端
docker attach 容器id								# 不会启动新的终端
```

### docker cp

+ 拷贝文件

```shell
docker cp [OPTIONS] SRC_PATH CONTAINER:DEST_PATH
docker cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH
```

+ SRC_PATH：源文件或目录的路径。
+ CONTAINER：目标容器的名称或 ID。
+ DEST_PATH：目标文件或目录的路径。
+ OPTIONS：
  - `--follow-link`, `-L`：如果源文件是符号链接，则复制链接的目标文件而不是链接本身。

## 3.5 可视化

+ 百度搜索，有很多

1. Portainer
2. docker desktop



# 4 容器的数据卷	

## 4.1 什么是数据卷

容器的数据卷（Docker Volumes）是 Docker 提供的一种持久化数据的方法。容器通常是临时的，意味着它们的文件系统在容器删除时会丢失。为了持久化存储，Docker 提供了数据卷，使容器中的数据能够跨容器和主机系统共享或保留。

数据卷 是 Docker 管理的一种特殊目录，可以让数据独立于容器的生命周期进行持久化存储。

### 数据卷的特点：

1. 持久性存储：***
   - 数据卷在容器删除后依然存在，因此可以避免容器停止或删除时丢失数据。它们存储的数据可以在容器间共享或保留。
2. 容器之间共享数据：***
   - 多个容器可以挂载同一个数据卷，从而在容器之间共享数据。这使得容器之间的数据同步变得简单和高效。
3. 独立于容器生命周期：***
   - 数据卷的生命周期独立于容器本身。当一个容器删除时，数据卷并不会被删除，除非显式删除数据卷。这确保了容器和数据分离，便于容器的重建和维护。
4. 性能优化：
   - 数据卷通常比容器内的存储（比如容器文件系统）具有更高的性能，因为它们通常与宿主机的文件系统直接挂载，且可以避免容器文件系统的写入限制。
5. 容易备份和恢复：
   - 数据卷可以通过 Docker 命令轻松备份、恢复和迁移。你可以将数据卷挂载到另一个容器，或将其内容导出为 tar 文件进行备份。
6. 支持宿主机和容器间的数据共享：
   - 数据卷可以挂载到宿主机的指定目录，也可以直接在 Docker 中创建。通过挂载宿主机目录到容器内的卷中，可以轻松在宿主机和容器之间共享数据。
7. 无需容器管理：
   - 容器创建和销毁时，Docker 会自动管理数据卷的挂载和解绑，用户不需要手动处理这些操作。

  

## 4.2 三种挂载方式

在 Docker 中，数据卷（Volume）用于持久化和共享容器的数据，通常用于在容器生命周期之外保留数据。Docker 提供了三种主要的挂载方式：**匿名挂载卷**、**命名卷**和**绑定挂载**。以下是这三种挂载方式的实际使用讲解：

### 1. 匿名挂载卷

匿名挂载卷不指定卷的名称，Docker 会自动创建一个新卷，并将它挂载到容器中。

### 示例

```bash
docker run -d -v /data busybox
```

- `-v /data` 表示将容器中的 `/data` 目录挂载到一个匿名卷。
- Docker 会自动为该匿名卷分配一个随机的卷名称，并且该卷将会在容器删除时被删除（除非被其他容器使用）。

**查看卷**

```bash
docker volume ls
```

你会看到一个由 Docker 自动创建的匿名卷。

### 2. 命名卷

命名卷是显式地给卷命名，可以通过卷名在 Docker 中识别和复用这些卷。

#### 示例

```bash
docker volume create my_volume
docker run -d -v my_volume:/data busybox
```

- `docker volume create my_volume` 命令创建了一个名为 `my_volume` 的卷。
- `-v my_volume:/data` 表示将命名卷 `my_volume` 挂载到容器的 `/data` 目录。
- 命名卷可以在多个容器之间共享。

**查看命名卷**

```bash
docker volume ls
```

会看到一个名为 `my_volume` 的卷。

### 3. 绑定挂载

绑定挂载将宿主机上的一个目录或文件挂载到容器中，这使得容器可以直接访问宿主机上的文件系统。

#### 示例

```bash
docker run -d -v /host/path:/container/path busybox
```

- `/host/path` 是宿主机上的目录路径。
- `/container/path` 是容器内的目录路径。
- 任何写入 `/container/path` 的内容都会直接影响宿主机上的 `/host/path`，且两者的数据是同步的。

**查看绑定挂载**

绑定挂载没有单独的管理命令，因为它直接映射到宿主机的文件系统中。你可以查看宿主机目录 `/host/path` 以查看绑定的内容。

### 4 总结

- **匿名挂载卷**：适用于临时数据存储，容器删除时卷也会删除。
- **命名卷**：适用于持久化存储，可以在不同容器之间共享。
- **绑定挂载**：适用于直接与宿主机文件系统交互，通常用于开发环境或需要访问宿主机文件的场景。





以下是整理后的内容：

## 4.3 常用命令

### 继承父容器的数据卷

```shell
docker run -it --name docker02 --volumes-from docker01 kuangshen/centos
```

- `--volumes-from docker01`：表示容器 `docker02` 会继承容器 `docker01` 中挂载的数据卷。
- 这种方式常用于创建多个容器之间共享数据，尤其是当多个容器需要同时使用同一份数据时。

### 改变文件权限

可以通过在 `-v` 参数后添加 `:ro` 或 `:rw` 来指定容器对挂载目录的读写权限。

- `:ro`（只读）：容器只能读取数据卷中的数据，不能修改。
- `:rw`（读写，默认值）：容器可以读取和写入数据卷中的数据。

#### 示例：

```bash
# 挂载卷，且设置为只读
docker run -d -P --name nginx02 -v nginxconfig:/etc/nginx:ro nginx

# 挂载卷，且设置为读写（这是默认的行为）
docker run -d -P --name nginx02 -v nginxconfig:/etc/nginx:rw nginx
```

- `:ro` 和 `:rw` 用来指定容器对挂载目录的权限，默认情况下是读写（`rw`）。

### 其他

- **查看数据卷：**

```bash
docker volume ls
```

- **删除数据卷：**

```bash
docker volume rm my_volume
```

- **查看数据卷的详细信息：**

```bash
docker volume inspect my_volume
```

- **挂载数据卷到容器：**

```bash
docker run -v my_volume:/path/in/container my_image
```

## 4.4 使用项目示例：nginx

### 概述

Docker Volumes 是 Docker 中用于持久化存储数据的一种机制。通过使用 Volumes，你可以确保容器中的数据在容器停止或删除后仍然存在。这对于需要持久化存储的应用程序（如数据库、配置文件等）非常有用。

### 示例程序：使用 Docker Volumes 运行 Nginx

在这个示例中，我们将使用 Docker Volumes 来持久化 Nginx 的配置文件和网站数据。

#### 1. 创建 Docker Volume

首先，我们需要创建两个 Docker Volumes，一个用于存储 Nginx 的配置文件，另一个用于存储网站数据。

```plain
docker volume create nginx_config 
docker volume create nginx_data
```

#### 2. 创建 Nginx 配置文件

在本地创建 `nginx.conf` 和 `index.html` 文件，并将它们放置在一个目录中，例如 `./nginx-files`。

创建配置文件

```plain
server {
    listen 8888;
    server_name localhost;

    location / {
        root /usr/share/nginx/html;
        index index.html;
    }
}
```

 创建网站数据

```plain
<!DOCTYPE html>
<html>
<head>
    <title>Welcome to Nginx with Docker!</title>
</head>
<body>
    <h1>Hello, Docker Volumes!</h1>
</body>
</html>
```

#### 6. 运行 Nginx 容器

现在，我们可以运行一个 Nginx 容器，并挂载之前创建的两个 Docker Volumes。

```plain
docker run -d --name my_nginx -p 8888:8888 \
  -v nginx_config:/etc/nginx \
  -v nginx_data:/usr/share/nginx/html \
  nginx
```

#### 7. 验证

打开浏览器，访问 `http://localhost:8888`，你应该会看到 `Hello, Docker Volumes!` 的页面。

### 总结

使用 Docker Volumes 可以来持久化 Nginx 的配置文件和网站数据。即使容器被删除或停止，数据仍然会保留在 Docker Volumes 中，从而确保数据的持久性。

#  DockerFile  

 流程：开发应用=>DockerFile=>打包为镜像=>上传到仓库（私有仓库，公有仓库）=> 下载镜像 => 启动 运行。 

## 什么是dockerfile

`Dockerfile` 是一个文本文件，包含了一系列指令，用来定义 Docker 镜像的构建过程。通过这些指令，可以指定镜像的基础操作系统、所需的环境、应用程序的依赖、文件复制、执行命令等，从而自动化地创建自定义的 Docker 镜像。

+ 步骤：

```shell
1、编写DockerFile文件
2、docker build 构建镜像
3、docker run
```

## 实战测试

### 编写DockerFile

基于官方的centos镜像安装vi和net-tools工具  

```shell
FROM centos
MAINTAINER kuangshen<24736743@qq.com>
ENV MYPATH /usr/local
WORKDIR $MYPATH
RUN yum -y install ncurses
RUN yum -y install net-tools
EXPOSE 80
CMD echo $MYPATH
CMD echo "----------end--------"
CMD /bin/bash
```

### 构建

+ -f dockerfile的地址
+ -t 新的镜像的名称

```shell
docker build -f dockerfile地址 -t 新镜像名字:TAG ./  # ./表示当前目录
```

### 运行

```shell
docker run -it  --name test test /bin/bash
```

## docker镜像构建的分层次机制

### 1. Docker 镜像分层的基本概念

每次构建 Docker 镜像时，`Dockerfile` 中的每个指令（如 `FROM`、`RUN`、`COPY` 等）都会创建一个新的 镜像层（Layer）。这些层是只读的，每一层都包含该指令对文件系统的修改。例如：

+ `FROM`：拉取基础镜像（第一层）
+ `RUN`：执行安装或配置操作（每个 `RUN` 都是一个新层）
+ `COPY`：将文件复制到镜像中（每个 `COPY` 都是一个新层）

这些层叠加在一起形成一个完整的 Docker 镜像。当容器运行时，Docker 会在镜像之上创建一个可写层，这个层被称为 容器层（Container Layer），它记录容器运行时的所有修改（如文件变更、创建新文件等）。

### 好处

#### 节省存储空间

由于 Docker 镜像的层是增量式的，且镜像层是共享的，这使得 Docker 能够高效地利用存储资源。不同的镜像可以共享相同的层。例如，多个容器使用相同的基础镜像（如 `FROM ubuntu`），这些基础镜像的层会被共享，避免了每个容器都重复存储相同的文件，显著减少了存储需求。

示例：

+ 如果你有多个容器，它们都基于相同的基础镜像（比如 `FROM ubuntu:20.04`），那么这些容器都会共享相同的基础层，不需要重复存储相同的文件。

#### 构建过程加速

Docker 会缓存镜像的每一层，这意味着如果你重新构建镜像时，某些层（如文件未变化的 `COPY` 指令或未修改的 `RUN` 指令）可以直接使用缓存，而不需要重新执行。这样，构建过程就会显著加快，尤其是在修改 `Dockerfile` 的一部分时，不必重新构建整个镜像。

示例：

+ 假设你修改了 `Dockerfile` 中的某个 `RUN` 指令，而该指令之前的层没有改变，Docker 就会跳过之前的步骤，只重建与该指令相关的层，从而节省时间。

#### 便于镜像和层的重用

分层机制使得 Docker 镜像在不同的容器或项目中具有较强的可重用性。如果你有多个项目需要相同的基础环境（如基础操作系统、依赖软件包等），你可以复用相同的层，而无需为每个项目重新构建或下载相同的内容。这大大减少了重复工作。

示例：

+ 比如你有多个项目都依赖于相同的 `node:14` 镜像，Docker 会复用这个基础镜像的层，避免为每个项目重复下载和存储相同的文件。

### 3. Docker 镜像层的工作原理

+ 构建过程：当你执行 `docker build` 时，Docker 会逐条执行 `Dockerfile` 中的指令，每一条指令（如 `RUN`、`COPY`、`ADD` 等）会生成一个新的镜像层。每个层都是对镜像文件系统的增量修改。
+ 合并成一个镜像：这些层会按顺序叠加，最后合并成一个完整的镜像。每个层都是不可修改的，只读的文件系统，而每次对镜像的修改都会生成新的层。
+ 容器启动时的层：当容器启动时，它会基于镜像创建一个新的容器层，这个容器层是可写的，任何在容器运行时产生的文件变更都会记录在此层中。

### 镜像变更历史

```shell
docker history 镜像id
```

![](/Users/dsw/workspace/now/web/wds-blog/docs/文档/docker/assets/1729317394093-16abe9b4-5c3f-4fde-9778-96761a1bf17b-4063917.png)



# 仓库管理

## 官方仓库

### 登录退出：

```shell
docker login
docker logout
```

### 基于容器或者file制作镜像

+ 用户名一定要正确

```shell
docker commit -m "搭建好了hadoop集群"  501ecfd0e6bf wds2dxh/hadoop:v1.0
```

### 推送

```shell
docker push wds2dxh/hadoop:v1.0
```

## 阿里云镜像

参考官网

# docker网络

## 理解docker0

### 原理

#### 每一个安装了Docker的linux主机都有一个docker0的虚拟网卡。这是个桥接网卡，使用了veth-pair 技术！  

![](/Users/dsw/workspace/now/web/wds-blog/docs/文档/docker/assets/1729328341083-9dbb4c6c-d159-49ec-bf83-a351e65e357d-4063917.png)

#### 每启动一个容器，linux主机就会多了一个虚拟网卡。  

 使用了veth-pair 技术！  

![](/Users/dsw/workspace/now/web/wds-blog/docs/文档/docker/assets/1729329124691-8d6f4253-7004-4b95-aa1c-dafccda06b18-4063917.png)

#### 容器间能够相互ping通，不过是使用的docker0作为路由器

#### 网络模型	  

![](/Users/dsw/workspace/now/web/wds-blog/docs/文档/docker/assets/1729329494016-9a49efc3-d1cb-43ab-8d9c-e93da36a4641-4063917.png)

##  --Link  

可以使用容器的名称来ping

如下面这个命令：连接test到test1

```shell
 docker run -d -P --name test --link test1 centos
```

这时候这样就可以ping通了

```shell
docker exec -it test ping test1
```

###  思考，这个原理是什么呢？我们进入test中查看下host配置文件  

被link的容器直接被写入到hosts文件中了

```shell
docker exec -it test cat /etc/hosts
```

 --link过时了，我们不推荐使用！我们可以使用自定义网络的方式  

## 自定义网络

### docker network ls

+ 查看有哪些网络

![](/Users/dsw/workspace/now/web/wds-blog/docs/文档/docker/assets/1729330904088-decd8599-bb1b-4d73-960d-45a41acee7c0-4063917.png)

### 网络模式

 bridge模 式 --net=bridge 默认值，在Docker网桥docker0上为容器创建新的网络 栈  

 none模式 --net=none 不配置网络，用户可以稍后进入容器，自行配置  

container 模式 -- net=container:name/id 容器和另外一个容器共享Network namespace。 kubernetes中的pod就是多个容器共享一个Network namespace。  

host模式 --net=host 容器和宿主机共享Network namespace  

 用户自定 义 --net=自定义网络 用户自己使用network相关命令定义网络，创建容器的 时候可以指定为自己定义的网络  

### 查看网络的具体信息

```shell
docker network inspect 网络id
```

###  创建网络

```shell
docker network create --driver bridge --subnet 192.168.0.0/16 --gateway 192.168.0.1 mynet
```

![](/Users/dsw/workspace/now/web/wds-blog/docs/文档/docker/assets/1729331333559-28900bb1-3b4e-4a6c-a535-56d01f1740c3-4063917.png)

### 使用自定义网络

```shell
docker run -d -P --name test --net mynet centos
```

### 效果

容器可以互相ping通，也可以直接ping+容器名称

### 连接一个容器到网络---一个容器两个地址	

```shell
docker network connect mynet test1
```

# docker-compose

Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，可以使用 YML 文件来配置应用程序需要的所有服务。然后，使用一个命令，就可以从 YML 文件配置中创建并启动所有服务。

Compose 使用的步骤：

+ 使用 Dockerfile 定义应用程序的环境。（可以不需要）
+ 使用 docker-compose.yml 定义构成应用程序的服务，这样它们可以在隔离环境中一起运行。
+ 最后，执行 docker-compose up 命令来启动并运行整个应用程序。

## 安装

1. 百度
2. [参考链接](https://www.runoob.com/docker/docker-compose.html)

检查是否安装成功：

```shell
docker-compose version
```

## 配置文件（docker - compose.yml ）

### 1. 版本声明

+ 配置文件开头需要声明版本，如`version: '3'`，不同版本在语法和功能上可能有差异。

### 2. 服务定义

+ 镜像（image）选择：每个服务需要指定对应的镜像。例如对于一个简单的Web服务，如果使用Python的Flask框架，可以基于`python:3.4 - alpine`镜像构建，对于Redis服务，可以直接使用`redis:alpine`镜像 [1](https://blog.csdn.net/qq_35516360/article/details/122066242)。
+ 端口映射（ports）：将容器内的端口映射到宿主机的端口，格式为`宿主机端口:容器端口`，如` - 5000:5000`，这使得外部可以访问容器内运行的服务 [1](https://blog.csdn.net/qq_35516360/article/details/122066242)。
+ 环境变量（environment）：可以设置容器内的环境变量，如数据库连接的用户名、密码等相关配置。
+ 数据卷挂载（volumes）：实现容器与宿主机或者容器之间的数据共享，例如` - /host/dir:/container/dir`。

## 常用命令

+ 构建（build）：如果有自定义的Dockerfile来构建镜像，可以使用`docker - compose build`命令。
+ 启动（up）：使用`docker - compose up`命令启动所有在配置文件中定义的服务，还可以添加` - d`参数让服务在后台运行。
+ 停止（stop）：`docker - compose stop`用于停止正在运行的服务。
+ 查看日志（logs）：`docker - compose logs`查看服务的运行日志。

## 实践-使用flask和redis结合

### 介绍

本教程将指导你如何使用Docker Compose来运行一个简单的Flask应用程序，该应用程序会记录访问次数。我们将使用两个服务：一个用于运行Flask应用程序的Web服务，另一个用于Redis数据库。

### 项目结构

首先，我们来看一下项目的目录结构：

```plain
app.py
docker-compose.yaml
Dockerfile
requirements.txt
```

#### 文件说明

+ app.py

: Flask应用程序的主文件。

+ docker-compose.yaml

: Docker Compose配置文件。

+ Dockerfile

: 构建Docker镜像的文件。

+ requirements.txt

: 列出Python项目的依赖包。

### 代码详解

#### app.py

```python
import time 
import redis 
from flask import Flask 
 
app = Flask(__name__) 
cache = redis.Redis(host='redis', port=6379) 
 
def get_hit_count(): 
    retries = 5 
    while True: 
        try: 
            return cache.incr('hits')  
        except redis.exceptions.ConnectionError as exc: 
            if retries == 0: 
                raise exc 
            retries -= 1 
            time.sleep(0.5)  
 
@app.route('/')  
def hello(): 
    count = get_hit_count() 
    return 'Hello World! I have been seen {} times.\n'.format(count) 
 
if __name__ == '__main__': 
    app.run(host='0.0.0.0', debug=True)
```

#### Dockerfile

用于构建Docker镜像的文件：

```dockerfile
FROM python:3.4-alpine
ADD . /code
WORKDIR /code
RUN pip install -r requirements.txt
CMD ["python", "app.py"]
```

Dockerfile解释

+ `FROM python:3.4-alpine`: 使用Python 3.4的Alpine镜像作为基础镜像。
+ `ADD . /code`: 将当前目录下的所有文件添加到镜像的`/code`目录。
+ `WORKDIR /code`: 设置工作目录为`/code`。
+ `RUN pip install -r requirements.txt`: 安装项目依赖。
+ `CMD ["python", "app.py"]`: 运行Flask应用。

#### docker-compose.yaml

Docker Compose配置文件：

```plain
version: '3'
services:
  web:
    build: .
    ports:
      - "5000:5000"
  redis:
    image: redis:alpine
```

docker-compose.yaml解释

+ `version: '3'`: 指定Docker Compose文件的版本。
+ `services`: 定义了两个服务：`web`和redis
+ `web`:
  - `build: .`: 使用当前目录下的Dockerfile构建镜像。
  - `ports: - "5000:5000"`: 将容器的5000端口映射到主机的5000端口。
+ redis  
  - `image: redis:alpine`: 使用官方的Redis Alpine镜像。

### 使用步骤

1. 构建并启动服务:  
   在项目根目录下运行以下命令：

```shell
docker-compose build  #因为有自定义镜像的需求
docker-compose up
```

2. 访问应用:  
   打开浏览器，访问`http://localhost:5000`，你将看到访问次数的显示。
3. 停止服务:  
   按下`Ctrl+C`停止服务，或者运行以下命令：

```shell
docker-compose down
```





