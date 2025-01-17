---
title: View
sidebar_label: View
---

视图容器

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="字节跳动小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/view.html)

## 类型

```tsx
ComponentType<ViewProps>
```

## 示例代码

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs
  defaultValue="React"
  values={[
  {
    "label": "React",
    "value": "React"
  },
  {
    "label": "Vue",
    "value": "Vue"
  }
]}>
<TabItem value="React">

```tsx
export default class PageView extends Component {
  constructor() {
    super(...arguments)
  }

  render() {
    return (
      <View className='components-page'>
        <Text>flex-direction: row 横向布局</Text>
        <View className='flex-wrp' style='flex-direction:row;'>
          <View className='flex-item demo-text-1'/>
          <View className='flex-item demo-text-2'/>
          <View className='flex-item demo-text-3'/>
        </View>
        <Text>flex-direction: column 纵向布局</Text>
        <View className='flex-wrp' style='flex-direction:column;'>
          <View className='flex-item flex-item-V demo-text-1'/>
          <View className='flex-item flex-item-V demo-text-2'/>
          <View className='flex-item flex-item-V demo-text-3'/>
        </View>
      </View>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <view class="components-page">
    <text>flex-direction: row 横向布局</text>
    <view class="flex-wrp flex-wrp-row" hover-class="hover" >
      <view class="flex-item demo-text-1" :hover-stop-propagation="true" />
      <view class="flex-item demo-text-2" hover-start-time="1000" hover-class="hover" />
      <view class="flex-item demo-text-3" hover-stayTime="1000" hover-class="hover" />
    </view>
    <text>flex-direction: column 纵向布局</text>
    <view class="flex-wrp flex-wrp-column">
      <view class="flex-item flex-item-V demo-text-1" />
      <view class="flex-item flex-item-V demo-text-2" />
      <view class="flex-item flex-item-V demo-text-3" />
    </view>
  </view>
</template>

<style>
.flex-wrp { display: flex; }
.flex-wrp-column{ flex-direction: column; }
.flex-wrp-row { flex-direction:row; padding: 20px; background: #f1f1f1; }
.flex-item { width: 180px; height: 90px; }
.demo-text-1 { background: #ccc; }
.demo-text-2 { background: #999; }
.demo-text-3 { background: #666; }
.hover {
  background: #000;
}
</style>
```
</TabItem>
</Tabs>

## ViewProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| hoverClass | `string` | `none` | 否 | 指定按下去的样式类。当 `hover-class="none"` 时，没有点击态效果 |
| hoverStyle | `StyleProp<ViewStyle>` | `none` | 否 | 由于 RN 不支持 Class，故 RN 端的 View 组件实现了 `hoverStyle`属性，写法和 style 类似，只不过 `hoverStyle` 的样式是指定按下去的样式。 |
| hoverStopPropagation | `boolean` | `false` | 否 | 指定是否阻止本节点的祖先节点出现点击态 |
| hoverStartTime | `number` | `50` | 否 | 按住后多久出现点击态，单位毫秒 |
| hoverStayTime | `number` | `400` | 否 | 手指松开后点击态保留时间，单位毫秒 |
| catchMove | `boolean` |  | 否 | 是否以 catch 的形式绑定 touchmove 事件 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| ViewProps.hoverClass | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | (由于 RN 不支持 Class，故 RN 端的 View 组件实现了 `hoverStyle`属性，写法和 style 类似，只不过 `hoverStyle` 的样式是指定按下去的样式。) |  |
| ViewProps.hoverStyle |  |  |  |  |  | ✔️ |  |
| ViewProps.hoverStopPropagation | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| ViewProps.hoverStartTime | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |
| ViewProps.hoverStayTime | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |
