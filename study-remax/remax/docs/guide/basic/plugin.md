---
title: 小程序插件
order: 29
---

# 使用小程序插件

## 引入插件代码包

在 `app.config.js` 中声明需要使用的插件：

```javascript
module.exports = {
  plugins: {
    myPlugin: {
      version: '1.0.0',
      provider: 'wxidxxxxxxxxxxxxxxxx',
    },
  },
};
```

## 使用插件

### 自定义组件

使用插件的自定义组件不需要申明 `usingComponents`，而是使用 Remax 的 `requirePluginComponent` 方法。

```javascript
import { requirePluginComponent } from 'remax/macro';

const Hello = requirePluginComponent('plugin://myPlugin/hello-component');

export default ()  => (
  <View>
    <Hello name="Remax">
  </View>
)
```

### 页面

需要跳转到插件页面时，url 使用 `plugin://` 前缀，形如 `plugin://PLUGIN_NAME/PLUGIN_PAGE`， 如：

```javascript
<Navigator url="plugin://myPlugin/hello-page">Go to pages/hello-page!</Navigator>
```

### JavaScript 接口

```javascript
import { requirePlugin } from 'remax/macro';

const myPlugin = requirePlugin('myPlugin');

myPlugin.hello();

const world = myPlugin.world;
```
