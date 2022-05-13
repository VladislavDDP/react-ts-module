import React, { FC } from 'react';
import { Formik } from 'formik';
import { TextField, Button } from '@mui/material';

interface Props {
  increaseAviariesQuantity: () => void;
  addTurtleAviary: (values: {
    lakeTemperature: number;
    lakeWidth: number;
    lakeLength: number;
  }) => void;
}

export const TurtleAviaryForm: FC<Props> = ({
  increaseAviariesQuantity,
  addTurtleAviary,
}) => {
  return (
    <Formik
      initialValues={{
        lakeTemperature: 25,
        lakeWidth: 5,
        lakeLength: 6,
      }}
      onSubmit={addTurtleAviary}
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
            name="lakeTemperature"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lakeTemperature}
            className="customInput"
            label="Lake temperature"
            variant="outlined"
            type="number"
          />
          <TextField
            name="lakeWidth"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lakeWidth}
            className="customInput"
            label="Lake width"
            variant="outlined"
            type="number"
          />
          <TextField
            name="lakeLength"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lakeLength}
            className="customInput"
            label="Lake length"
            variant="outlined"
            type="number"
          />
          <Button
            type="submit"
            style={{ marginTop: '25px' }}
            onClick={increaseAviariesQuantity}
            variant="contained"
          >
            Add new aviary
          </Button>
        </form>
      )}
    </Formik>
  );
};
