# 添加自动推送脚本
#输入参数：$1 提交信息

#输入参数
if [ ! -n "$1" ]; then
    echo "请输入提交信息"
    exit
fi
git pull
git add .
git commit -m "$1"
git push 