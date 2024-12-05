#!/bin/bash

# 停止并清理容器
echo "停止并清理容器..."
docker stop node1 node2 node3
docker rm -f node1 node2 node3
docker network rm test_mynet-hadoop


# 如果有test_mynet-hadoop网络就删除，如果没有就不删除
if docker network ls | grep test_mynet-hadoop &> /dev/null  # 如果test_mynet-hadoop网络存在
then
    echo "删除test_mynet-hadoop网络..."
    docker network rm test_mynet-hadoop
    echo "test_mynet-hadoop网络已删除。"
fi



# 启动 Docker Compose,如果docker-compose命令不存在，就用docker compose命令
if command -v docker compose &> /dev/null
then
    echo "使用docker compose命令启动容器..."
    docker compose up -d
else
    echo "使用docker-compose命令启动容器..."
    docker-compose up -d
fi



# 启动node1, node2, node3容器
echo "启动node1, node2, node3容器..."
docker start node1 node2 node3
echo "容器启动完成。"

# 使用docker exec命令进入容器然后执行启动ssh服务
echo "启动node1的SSH服务..."
docker exec node1 sudo /usr/sbin/sshd -D &
sleep 1  # 等待1秒
echo "node1的SSH服务已启动。"

echo "启动node2的SSH服务..."
docker exec node2 sudo /usr/sbin/sshd -D &
sleep 1  # 等待1秒
echo "node2的SSH服务已启动。"

echo "启动node3的SSH服务..."
docker exec node3 sudo /usr/sbin/sshd -D &
sleep 1  # 等待1秒
echo "node3的SSH服务已启动。"


echo "格式化HDFS文件系统..."
docker exec node1 /opt/hadoop/bin/hadoop namenode -format
echo "HDFS文件系统格式化完成。"


#启动hadoop程序，在node1容器中
echo "启动Hadoop程序..."
docker exec node1 /opt/hadoop/sbin/start-dfs.sh
echo "Hadoop程序已启动。"

# 提醒用户访问Web界面地址：http://192.168.0.2:9870
echo ""-----------------------------------------""
echo "所有容器的SSH服务已启动。"
echo "
 ____________________________________________
< 请访问Web界面地址：http://192.168.0.2:9870 >
 --------------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
"