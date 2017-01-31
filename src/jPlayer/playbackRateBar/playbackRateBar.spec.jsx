import React from 'react';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../../src/util/constants';
import PlaybackRateBar from './playbackRateBar';

const setup = () => {
  const props = {
    onClick: createSpy(),
    onMouseDown: createSpy(),
    setPlaybackRate: Function.prototype,
    children: (<div className="@@jPlayer-test" />),
    'data-attribute-test': 'test',
  };

  const wrapper = shallow(<PlaybackRateBar {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<PlaybackRateBar />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    ({ wrapper, props } = setup());
  });

  it('renders self and subcomponents', () => {
    wrapper.simulate('click');
    wrapper.simulate('mousedown');

    expect(props.onClick).toHaveBeenCalled();
    expect(props.onMouseDown).toHaveBeenCalled();
    expect(wrapper.children('.@@jPlayer-test').exists()).toBeTruthy();
    expect(wrapper.hasClass(classes.PLAYBACK_RATE_BAR)).toBeTruthy();
    expect(wrapper.prop('data-attribute-test')).toBe(props['data-attribute-test']);
  });
});
