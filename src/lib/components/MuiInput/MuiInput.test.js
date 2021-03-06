/* eslint-disable no-console */
import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { MuiInput, customPropName } from './MuiInput';
import Form from '../Form/Form';

const FormTest = props => (
  <Form onSubmit={() => true}>
    <MuiInput {...props} />
  </Form>
);

function setup(name = undefined) {
  const props = {
    name,
  };
  const comp = mount(<FormTest {...props} />);
  return { comp, props };
}

describe('<MuiInput />', () => {
  it('renders MuiInput', () => {
    const { comp } = setup('cool');
    expect(comp).toBeDefined();
  });

  it('calls onChange in text input', () => {
    const { comp } = setup('cool');
    let input = comp.find('input').first();
    input.simulate('change', { target: { value: 'poop' } });
    input = comp.find('input').first();
    expect(input.props().value).toEqual('poop');
  });

  it('should return an error if no fields prop and no names prop is passed down', () => {
    const errorProp = customPropName({ fields: undefined }, 'apples', 'MuiInput');
    expect(errorProp.toString()).toEqual(
      'Error: MuiInput: apples requires to have name value if fields are not passed down. Please wrap this in RFFField Array or add a name prop.',
    );
  });

  test('snapshot', () => {
    const { props } = setup('cool');
    const tree = renderer.create(<FormTest {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
