# circle-process-bar
circle-process-bar是一款基于jquery的一款生成自定义圆形进度条的轻量级Js库。

## 演示地址

https://ruichengping.github.io/circle-process-bar/site/

## 依赖

- jquery

**注意事项：**
circle-process-bar没有集成jquery,需要自己引入jquery

## 使用方法
调用circleProcessBar方法会返回一个生成好的圆形进度条的HTML字符串。


### 用法
#### 快速上手
**HTML**
```
//引入css
 <link rel="stylesheet" href="**/circleProcessBar.min.css">
//引入js
 <script src="**/circleProcessBar.min.js"></script>
```
**JS**
```
circleProcessBar({
            percent: 0.7
            ...
        });
```

#### NPM

```
npm i circle-process-bar --save
```
**JS**
```
import CircleProcessBar from 'circle-process-bar';
CircleProcessBar({
            percent: 0.7
            ...
       });
```
### 参数说明

参数 | 是否必填 |类型|默认值 |说明
---|---|---|---|---
percent | 是 | Number| 0 |当前进度条的进度，取值范围0~1
width | 否|Number|100|圆形进度条直径，单位：px
strokeWidth|否|Number|6|线条宽度，单位：px
strokeColor|否|String|#52c41a|进度条颜色
bgColor|否|String|#f8f8f8|进度条背景色
fontColor|否|String|#999|文本颜色
fontSize|否|String|14px|文本字号
format|否|Function|内置函数|自定义文本函数
footer|否|Function|内置函数|底部内容拓展函数

## License
[MIT License](https://en.wikipedia.org/wiki/MIT_License)
