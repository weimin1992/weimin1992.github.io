---
title: 浏览器滚动条默认样式修改
# prev:
#   text: 
#   link: /posts/...
# next:
#   text: 
#   link: /posts/...
---

## 浏览器滚动条选择器集合

### 图示

> 浏览器滚动条css选择器集合的位置对应如图所示：

![图示](https://cdn.porridge.fun/blog/css/scrollbar.png)

### 选择器代码

1. 滚动条整体部分

``` css:no-line-numbers
::-webkit-scrollbar {/* css content */}
```

2. 滚动条两端按钮

``` css:no-line-numbers
::-webkit-scrollbar-button {/* css content */}
```

3. 外层轨道

``` css:no-line-numbers
::-webkit-scrollbar-track {/* css content */}
```

4. 内层轨道

``` css:no-line-numbers
::-webkit-scrollbar-track-piece {/* css content */}
```

5. 可拖动的部分

``` css:no-line-numbers
::-webkit-scrollbar-thumb {/* css content */}
```

6. 边角

``` css:no-line-numbers
::-webkit-scrollbar-corner {/* css content */}
```

7. 右下角拖动块

``` css:no-line-numbers
::-webkit-resizer {/* css content */}
```

### 示例

* 代码

``` css:no-line-numbers
/*定义滚动条高宽及背景高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
    width: 6px;
    height: 16px;
    background-color: #d9d9d9;
}
/*定义滚动条轨道内阴影+圆角*/
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    border-radius: 10px;
    background-color: #f5f5f5;
}
/*定义滑块内阴影+圆角*/
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: #2163da;
}
```

* 效果

> 以上代码运行效果如下所示：

![示例效果](https://cdn.porridge.fun/blog/css/scrollbars-sample.png$fix.water)

<CommentService />
