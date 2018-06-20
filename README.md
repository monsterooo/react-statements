# react-statements

react-statements是一个很小的React语句控制组件，更漂亮的条件渲染方法↔️

## 安装

```shell
npm i --save react-statements
yarn add react-statements
```

## 栗子

```jsx
import { If } from 'react-statements'

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {logic: true};
  }
  render() {
    return (
      <div>
        <If when={this.state.logic}>
          <p>↔️我是一些组件内容</p>
        </If>
      </div>
    );
  }
}
```

## 文档说明

### If 组件

`If`组件可以使用一个`when`属性来控制组件是否渲染

```jsx
<If when={condition}>
  <p>when在转为bool为true的条件下显示这个组件</p>
</If>

<If when={condition} children={<p>使用方法同上，单标签方法中使用</p>} />
```

### Switch 组件

`Switch`组件可以根据指定的值渲染不同的组件

`Switch`组件内部使用`Case`组件对不同的值进行判断

`Switch`组件内部同时可以使用`Default`来设置一个默认显示组件

```jsx
<Switch value={value}>
  <Case when={condition}>
    <p>condition 1</p>
  </Case>
  <Case when={condition}>
    <p>condition 2</p>
  </Case>
  <Case when='c' children={<p>condition 3</p>}/>
  <Default children={<p>默认组件</p>}/>
</Switch>
```

### For

`For`组件可以对`Array`、`Object`遍历生成一组组件

`For`组件内部也可以使用`Default`来显示默认组件

```jsx
<For of={['a', 'b', 'c']}>
  {(item, index) => (<p key={index}>{index}：{item}</p>)}
  <Default>默认组件</Default>
</For>
```

## 问题

如果在使用过程中有任何问题或建议可以在issues提出

## License

react-statements使用[MIT licensed](./LICENSE).
