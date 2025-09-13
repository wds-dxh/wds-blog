# yolov8训练与部署
## 1. 配置cuda和cudnn环境
### 安装cuda
#### 1.查看显卡驱动最高支持的cuda版本
```plain
nvidia-smi
```



#### 2.下载
+ 官方下载链接(需要注册官网账号)
    - [cuda下载链接](https://developer.nvidia.com/cuda-toolkit-archive)
    - [cudnn下载链接](https://developer.nvidia.com/rdp/cudnn-archive)
+ 百度网盘

```plain
链接：https://pan.baidu.com/s/1PlqHeQYkbxHfygOK_tv0ZQ?pwd=5m7w 
提取码：5m7w 
--来自百度网盘超级会员V4的分享
```



#### 3.双击安装，选择安装缓存的路径
#### 4. 选安装的组件
#### 5.安装位置
#### 6.查看是否安装成功(注意是大写的V)
```plain
nvcc -V
```

### 安装cudnn
解压后三个文件夹的文件分别拷贝到CUDA安装目录对应的（bin、include、lib）文件夹中即可。



### 环境变量
bin

include

lib

libnvvp



## 2.配置conda环境
### 1.miniconda下载
```plain
链接：https://pan.baidu.com/s/131-tN39WV44blsPE3TZ3ug?pwd=iofe 
提取码：iofe 
--来自百度网盘超级会员V4的分享
```



### 2.安装

按照步骤即可

## 3.配置pytorch环境
### 1.创建虚拟环境（torch）
+ 查看是否安装完成

```plain
print("CUDA is available" if torch.cuda.is_available() else "CUDA is not available")
```



### 2.配置yolov8环境

* 直接按照官网步骤即可。（注意换源的问题！）




## 4.配置数据集训练
### 1.数据集结构
### 2.yaml文件作用



## 5.训练和预测

按照视频的即可




## 6.部署
### 1.pt格式转换为ncnn

* 安装的时候pnnx可能会下载有点问题，科学上网即可！

### 2.使用ncnn推理

* 直接基于yolo框架推理即可，已经集成！
