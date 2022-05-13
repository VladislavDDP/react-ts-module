import React, { FC } from 'react';
import { Formik } from 'formik';
import { TextField, Button, Box } from '@mui/material';

interface Props {
  increaseAviariesQuantity: () => void;
  addChameleonAviary: (values: {
    airTemperature: number;
    landWidth: number;
    landLength: number;
    lakeTemperature: number;
    lakeWidth: number;
    lakeLength: number;
  }) => void;
}

export const ChameleonAviaryForm: FC<Props> = ({
  increaseAviariesQuantity,
  addChameleonAviary,
}) => {
  return (
    <Formik
      initialValues={{
        lakeTemperature: 20,
        lakeWidth: 1,
        lakeLength: 15,
        airTemperature: 35,
        landWidth: 3.9,
        landLength: 4.9,
      }}
      onSubmit={addChameleonAviary}
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
          <Box style={{ display: 'flex', flexDirection: 'row' }}>
            <Box>
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
            </Box>
            <Box>
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
            </Box>
          </Box>
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
