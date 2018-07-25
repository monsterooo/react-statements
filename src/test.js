import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Case from './Case';
import Default from './Default';
import If from './If';

configure({ adapter: new Adapter() });

describe('If render', () => {
  it('If when value is true', () => {
    const name = 'react-statement';
    const p = <p>{name}</p>;
    const renderIf = shallow(<If when={name}>{p}</If>);
    expect(renderIf.equals(p)).toEqual(true);
  });
  it('If when value is false', () => {
    const name = '';
    const p = <p>{name}</p>;
    const renderIf = shallow(<If when={name}>{p}</If>);
    expect(renderIf.children().length).toEqual(0);
  });
  it('If when value is Default', () => {
    const name = '';
    const p = <p>{name}</p>;
    const RenderDefault = <div>render else</div>
    const renderIf = shallow(
      <If when={name}>
        {p}
        <Default children={RenderDefault} />
      </If>
    );
    expect(renderIf.children().equals(RenderDefault)).toEqual(true);
  });
})
describe('Case render', () => {
  it('render empty component', () => {
    const cc = shallow(<Case></Case>);
    expect(cc.type()).toEqual(null);
  });
  it('render non-null component', () => {
    const SubComponent = <div>Case render</div>;
    const cc = shallow(<Case>{SubComponent}</Case>);
    expect(cc.type()).toEqual('div');
  });
});
describe('Default render', () => {
  it('render empty component', () => {
    const cc = shallow(<Default></Default>);
    expect(cc.type()).toEqual(null);
  });
  it('render non-null component', () => {
    const SubComponent = <div>Default render</div>;
    const cc = shallow(<Default>{SubComponent}</Default>);
    expect(cc.type()).toEqual('div');
  });
});


function log() {
  console.log.apply(this, arguments);
}
