#!/bin/bash

# 设置变量
DEPLOY_PATH="/opt/homebrew/var/www/html/docs"
SOURCE_PATH="/Users/jinlei/code/MollyCam/docs"
DIST_PATH="$SOURCE_PATH/.vitepress/dist"

# 输出当前执行的步骤
echo "开始部署 VitePress 文档..."

# 确保在正确的目录下
cd "$SOURCE_PATH"

# 安装依赖
echo "正在安装依赖..."
npm install

# 构建文档
echo "正在构建文档..."
npm run docs:build

# 检查构建是否成功
if [ ! -d "$DIST_PATH" ]; then
    echo "构建失败：dist 目录不存在"
    exit 1
fi

# 确保目标目录存在
if [ ! -d "$DEPLOY_PATH" ]; then
    echo "创建部署目录..."
    sudo mkdir -p "$DEPLOY_PATH"
fi

# 删除旧目录
echo "清理旧目录..."
sudo rm -rf "$DEPLOY_PATH"

# 复制并重命名新目录
echo "部署新文件..."
sudo cp -r "$DIST_PATH/." "$DEPLOY_PATH"

# 设置权限
echo "设置文件权限..."
sudo chown -R jinlei:staff "$DEPLOY_PATH"
sudo chmod -R 755 "$DEPLOY_PATH"

echo "部署完成！"