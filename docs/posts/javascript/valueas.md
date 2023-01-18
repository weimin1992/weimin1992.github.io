---
title: JavaScript转换input数据类型的推荐方法
---

> 在使用`input` 元素且 `type` 属性值不是默认的`text`的时候（`number`、`date`）, 获取输入数据的参数`e.target.value`为`string`类型，在业务逻辑中往往需要将`string`转换为`number`、`date`，常规的转换方式为`parseFloat`、`parseInt`、`Date.parse`等方法转换，现在更推荐的方式是使用`valueAsNumber`、`valueAsDate`方法。

-------------

## `number`类型 `<input />`

<CodeGroup>
  <CodeGroupItem title="不推荐">

``` html
  <!-- rest html content -->
  <input type="number" id="common-input" />
  <script>
    const inputStr = document.querySelector('input.common-input')
    const numberValue = parseInt(inputStr)
    // ...rest javascript code
  </script>
```

  </CodeGroupItem>

  <CodeGroupItem title="推荐" active>

``` html
  <!-- rest html content -->
  <input type="number" id="recommand-input" />
  <script>
    const inputStr = document.querySelector('input.recommand-input')
    const numberValue = inputStr.valueAsNumber
    if (!isNaN(numberValue)){
      // ...rest javascript code
    }
  </script>
```
  </CodeGroupItem>

</CodeGroup>


## `date`类型 `<input />`

<CodeGroup>
  <CodeGroupItem title="不推荐">

``` html
  <!-- rest html content -->
  <input type="date" id="common-input" />
  <script>
    const inputStr = document.querySelector('input.common-input')
    const dateValue = new Date(Date.parse(inputStr))
    // ...rest javascript code
  </script>
```

  </CodeGroupItem>

  <CodeGroupItem title="推荐" active>

``` html
  <!-- rest html content -->
  <input type="date" id="recommand-input" />
  <script>
    const inputStr = document.querySelector('input.recommand-input')
    const dateValue = inputStr.valueAsDate
    if (inputStr){
      // ...rest javascript code
    }
  </script>
```
  </CodeGroupItem>

</CodeGroup>

::: warning 说明
`valueAsNumber`、`valueAsDate`是`HTMLInputElement`提供的属性，因此在原生`Javascript`、`React`、`Vue`中都可以使用！
:::

-------------
## 参考
1. [Steve (Builder.io)](https://www.builder.io/blog/numbers-and-dates)
2. [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLInputElement)
