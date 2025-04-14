'''
Author: wds-mac wdsnpshy@163.com
Date: 2024-12-13 12:09:39
Description: 
Copyright (c) 2024 by ${wds-mac}, All Rights Reserved. 
'''
import os
import re
import requests #  pip install requests -i https://pypi.tuna.tsinghua.edu.cn/simple
from urllib.parse import urlparse
import argparse

# 设置命令行参数解析
parser = argparse.ArgumentParser(description='Download images from a Markdown file and update the image paths.')
parser.add_argument('file_path', type=str, help='Path to the Markdown file')
args = parser.parse_args()

file_name = args.file_path  # 使用命令行参数作为文件路径
# 获取文件所在目录
base_dir = os.path.dirname(file_name)

# 确保 assets 目录存在（在Markdown文件的同级目录下）
assets_dir = os.path.join(base_dir, 'assets')
os.makedirs(assets_dir, exist_ok=True)

# 读取 Markdown 文件
with open(file_name, 'r', encoding='utf-8') as file:
    content = file.read()

# 查找所有图片链接
image_urls = re.findall(r'!\[.*?\]\((https?://.*?)\)', content)
print(image_urls)

# 下载图片并替换路径
for url in image_urls:
    # 解析 URL 获取文件名
    parsed_url = urlparse(url)
    filename = os.path.basename(parsed_url.path)
    
    # 构建保存图片的完整路径
    img_save_path = os.path.join(assets_dir, filename)
    
    # 下载图片
    response = requests.get(url)
    if response.status_code == 200:
        with open(img_save_path, 'wb') as img_file:
            img_file.write(response.content)
        print(f'Downloaded {filename}')
        
        # 替换 Markdown 中的图片路径为相对路径
        relative_img_path = os.path.relpath(img_save_path, start=os.path.dirname(file_name))
        content = content.replace(url, f'./{relative_img_path}')
    else:
        print(f'Failed to download {url}')

# 保存修改后的 Markdown 文件
with open(file_name, 'w', encoding='utf-8') as file:
    file.write(content)

print('All images have been downloaded and paths updated.')

