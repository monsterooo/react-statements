# react-statements &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/monsterooo/react-statements/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/react-statements.svg?style=flat)](https://www.npmjs.com/package/react-statements)

react-statements是一个很小的React语句控制组件，更漂亮的条件渲染方法↔️

[起源一些工作中的思考](https://juejin.im/post/5b2b99d2e51d455892718a40)

## 安装

```shell
npm i --save react-statements
yarn add react-statements
```

## 栗子

[![Edit react-statements-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/04rjj3xvnn)

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

### Range

`Range`组件可以对范围进行判断然后渲染组件

`Range`可以使用`type`属性对范围进行`in``notint`的判断

`Range`组件的`value`可以接收一个`Array`或`Object`来作范围的判断

`Range`组件的`when`可以指定范围的值，如果`value`是数组直接指定值，如果`value`是一个对象可以指定对象的键或对象的值

`Range`组件的`whenKey`是当`value`为对象是，用来指定`when`是判断的`value`的键而非值

```jsx
<Range type="in" value={[1,2,3]} when={1}>
  <p>在数组范围之中</p>
</Range>
<Range type="in" value={[1,2,3]} when={4}>
  <p>这个组件不会显示，when值不在value之中</p>
</Range>
<Range type="in" value={{ a: 'test1', b: 'test2' }} when="test2">
  <p>value对象的值包含when的值</p>
</Range>
{ /* whenKey用来指定判断的是value的键 */ }
<Range type="in" value={{ a: 'test1', b: 'test2' }} when='b' whenKey>
  <div>
    <p>可以判断对象的key值是在when中</p>
  </div>
</Range>
<Range type="notin" value={[1,2,3]} when={4}>
  <p>不在数组范围之中</p>
</Range>
<Range type="notin" value={{ a: 'test1', b: 'test2' }} when="test3">
  <p>value对象的值不包含when的值</p>
</Range>
{ /* whenKey用来指定判断的是value的键 */ }
<Range type="notin" value={{ a: 'test1', b: 'test2' }} when='c' whenKey>
  <div>
    <p>可以判断对象的key值不是在when中</p>
  </div>
</Range>
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

## 未来

正在计划扩展这个库，如果有兴趣和任何想法欢迎提issues或email: createthink.net@gmail.com

## 问题

如果在使用过程中有任何问题或建议可以在issues提出

## License

react-statements使用[MIT licensed](./LICENSE).
