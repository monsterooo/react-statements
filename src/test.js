import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Case from './Case';
import Default from './Default';

configure({ adapter: new Adapter() });

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
