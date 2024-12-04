#!/bin/bash
docker stop node1 node2 node3
#先停止所有容器



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

#启动hadoop程序，在node1容器中
echo "启动Hadoop程序..."
docker exec node1 /opt/hadoop/sbin/start-dfs.sh
echo "Hadoop程序已启动。"

echo "所有容器的SSH服务已启动。"