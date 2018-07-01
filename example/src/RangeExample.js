import React from 'react';
import { Range } from 'react-statements'

class RangeExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const objectArray = `<Range type="in" value={[1,2,3]} when={1}>
  <p>在数组范围之中</p>
</Range>`;
    const objectKey = `<Range type="in" value={{a: 'test1', b: 'test2'}} when='b' whenKey>
  <Compoent />
</Range>
    `;
    const objectValue = `<Range type="in" value={{ a: 'test1', b: 'test2' }} when="test2">
  <p>value对象的值包含when的值</p>
</Range>`;
    const objectNotInArray = `<Range type="notin" value={[1,2,3]} when={4}>
  <p>不在数组范围之中</p>
</Range>
    `;
    const objectNotInValue = `<Range type="notin" value={{ a: 'test1', b: 'test2' }} when="test3">
  <p>value对象的值不包含when的值</p>
</Range>
    `;
    const objectNotInKey = `<Range type="notin" value={{a: 'test1', b: 'test2'}} when='c' whenKey>
  <Compoent />
</Range>
    `;
    return (
      <div>
        <fieldset>
          <legend>Range 语句组件</legend>
          <div>
            <Range type="in" value={[1,2,3]} when={1}>
              <p>在数组范围之中</p>
              <textarea cols={100} rows={5} defaultValue={objectArray} />
            </Range>
            <Range type="in" value={[1,2,3]} when={4}>
              <p>这个组件不会显示，when值不在value之中</p>
            </Range>
            <Range type="in" value={{ a: 'test1', b: 'test2' }} when="test2">
              <p>value对象的值包含when的值</p>
              <textarea cols={100} rows={5} defaultValue={objectValue} />
            </Range>
            <Range type="in" value={{ a: 'test1', b: 'test2' }} when='b' whenKey>
              <div>
                <p>可以判断对象的key值是在when中</p>
                <textarea cols={100} rows={5} defaultValue={objectKey} />
              </div>
            </Range>
            <Range type="notin" value={[1,2,3]} when={4}>
              <p>不在数组范围之中</p>
              <textarea cols={100} rows={5} defaultValue={objectNotInArray} />
            </Range>
            <Range type="notin" value={{ a: 'test1', b: 'test2' }} when="test3">
              <p>value对象的值不包含when的值</p>
              <textarea cols={100} rows={5} defaultValue={objectNotInValue} />
            </Range>
            <Range type="notin" value={{ a: 'test1', b: 'test2' }} when='c' whenKey>
              <div>
                <p>可以判断对象的key值不是在when中</p>
                <textarea cols={100} rows={5} defaultValue={objectNotInKey} />
              </div>
            </Range>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default RangeExample;
