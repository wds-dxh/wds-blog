### 基于关键点检测和深度学习的坐姿识别台灯

**项目简介：**

本项目基于MediaPipe关键点检测和ResNet深度学习模型，旨在实现坐姿识别与监控。通过对用户坐姿的实时监测，本项目能够判断坐姿是否正确，并提供错误坐姿提醒、远程监控、语音播报和远程控制等功能。

**功能描述：**

- **错误坐姿提醒：** 当检测到用户的坐姿不正确时，系统会发出提醒，帮助用户调整坐姿。
- **远程监控：** 系统支持通过远程设备（如手机、平板等）进行监控，实时查看用户的坐姿状态。
- **语音播报：** 系统集成语音播报功能，可以通过语音提示用户进行坐姿调整。
- **远程控制：** 用户可以通过远程设备对系统进行控制，调整相关参数和设置。

**技术细节：**

1. **下位机驱动及软件框架：** 使用ESP32开发板，编写体温检测、灯光控制和语音播报的驱动程序，并实现与上位机（树莓派）的通信。
2. **图像处理与关键点检测：** 利用Google的机器学习框架MediaPipe对图像进行滤波处理，提取人体关键点特征，并保存这些特征用于后续处理。
3. **深度学习模型构建：** 基于CNN的ResNet模型，结合残差学习方法，对提取的坐姿关键点进行训练和分类，以实现准确的坐姿检测。
4. **模型转换与部署：** 将训练好的模型转换为ONNX格式，并打包为exe文件，使其能够在任何Windows系统上运行，方便用户使用。

**项目链接：**

[AI for Desk Lamp](https://github.com/wds-dxh/ai-for-desk-lamp)