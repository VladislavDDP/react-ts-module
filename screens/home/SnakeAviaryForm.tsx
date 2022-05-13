import React, { FC } from 'react';
import { Formik } from 'formik';
import { TextField, Button } from '@mui/material';

interface Props {
  addSnakeAviary: (values: any) => void;
}

export const SnakeAviaryForm: FC<Props> = ({ addSnakeAviary }) => {
  return (
    <Formik
      initialValues={{
        airTemperature: 30,
        landWidth: 2,
        landLength: 2,
      }}
      onSubmit={addSnakeAviary}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            name="airTemperature"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.airTemperature}
            className="customInput"
            label="Air temperature"
            variant="outlined"
            type="number"
          />
          <TextField
            name="landWidth"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.landWidth}
            className="customInput"
            label="Land width"
            variant="outlined"
            type="number"
          />
          <TextField
            name="landLength"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.landLength}
            className="customInput"
            label="Land length"
            variant="outlined"
            type="number"
          />
          <Button
            type="submit"
            style={{ marginTop: '25px' }}
            onClick={addAviary}
            variant="contained"
          >
            Add new aviary
          </Button>
        </form>
      )}
    </Formik>
  );
};
