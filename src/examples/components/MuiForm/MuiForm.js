import React from 'react';
import Card from '@material-ui/core/Card';
import {
  Form,
  MuiInput,
  MuiSelect,
  MuiCheckbox,
  MuiRadio,
  MuiSubmit,
} from '../../../lib/index';

const cars = [{
  make: 'Honda',
  model: 'rsx',
  trim: 'type s',
  year: 2002,
}, {
  make: 'Subaru',
  model: 'impreza',
  trim: 'sti',
  year: 2007,
}, {
  make: 'Nissan',
  model: '240SX',
  trim: 'LE',
  year: 1998,
}, {
  make: 'Toyota',
  model: 'Supra',
  trim: 'turbo',
  year: 1998,
}];

const MuiForm = () => {
  const onSubmitMuiForm = async (values) => {
    console.log('onSubmitMuiForm values', values);
  };

  return (
    <Card>
      <Form
        onSubmit={onSubmitMuiForm}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <MuiInput name="name" label="name" />
          <MuiCheckbox name="hasInsurance" label="Has Insurance" />
          <MuiSelect
            name="car"
            label="pick a car"
            options={cars}
            displayKey="make"
            initialValue={{
              make: 'Nissan',
              model: '240SX',
              trim: 'LE',
              year: 1998,
            }}
          />

          <MuiSelect
            size="small"
            name="laps"
            label="laps"
            options={[1, 2, 3]}
            initialValue={3}
          />

          <MuiInput name="time" label="time in seconds" type="number" />

          <MuiRadio
            name="class"
            value="A"
            label="class A"
          />
          <MuiRadio
            name="class"
            value="B"
            label="class B"
          />
          <MuiRadio
            name="class"
            value="C"
            label="class C"
          />
        </div>
        <MuiSubmit />
      </Form>
    </Card>
  );
};

export default MuiForm;
