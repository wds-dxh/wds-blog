import os
import re
import requests
from urllib.parse import urlparse

# 创建 assets 目录
os.makedirs('assets', exist_ok=True)

file_name = './docker基础.md'
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
    
    # 下载图片
    response = requests.get(url)
    if response.status_code == 200:
        with open(f'assets/{filename}', 'wb') as img_file:
            img_file.write(response.content)
        print(f'Downloaded {filename}')
        
        # 替换 Markdown 中的图片路径
        content = content.replace(url, f'./assets/{filename}')
    else:
        print(f'Failed to download {url}')

# 保存修改后的 Markdown 文件
with open(file_name, 'w', encoding='utf-8') as file:
    file.write(content)

print('All images have been downloaded and paths updated.')