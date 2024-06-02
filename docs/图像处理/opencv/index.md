# opencv
## Basics

<!--@include: ./readme.md-->

## ce'shi

[1.安装](./1.安装){target="_blank" rel="noreferrer"}   

[2.读取一张图片](./2.读取一张图片){target="download" download}


::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::



[[toc]]


```python:line-numbers{1}
import cv2
import numpy as np
cap = cv2.VideoCapture(0)                # [!code focus]
while True:
    ret, frame = cap.read()              # [!code focus]        
    cv2.imshow('frame', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break   
```

```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```


<<< ./code/2.读取一张图片.py{1 python}




::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::
