import * as React from 'react';
import { TextField, Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TabPanel } from '../components/TabPanel';
import { Formik } from 'formik';

export const Home = () => {
  const [aviaryCount, setAviaryCount] = React.useState(0);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const addAviary = () => {
    setAviaryCount((prev) => prev + 1);
  };

  const addSnakeAviary = (values: {
    airTemperature: number;
    landWidth: number;
    landLength: number;
  }) => {
    console.log(values);
  };

  const addTurtleAviary = (values: {
    lakeTemperature: number;
    lakeWidth: number;
    lakeLength: number;
  }) => {
    console.log(values);
  };

  const addChameleonAviary = (values: {
    airTemperature: number;
    landWidth: number;
    landLength: number;
    lakeTemperature: number;
    lakeWidth: number;
    lakeLength: number;
  }) => {
    console.log(values);
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Box
        sx={{
          bgcolor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '100%',
          marginBottom: '30px',
        }}
      >
        <Typography>There are {aviaryCount} aviaries</Typography>
        <Typography>Total Volume: {0}</Typography>
        <Typography>Total effective square: {0}</Typography>
      </Box>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Snake Aviary" />
          <Tab label="Turtle Aviary" />
          <Tab label="Chameleon Aviary" />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Formik
          initialValues={{
            airTemperature: 0,
            landWidth: 0,
            landLength: 0,
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
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Formik
          initialValues={{
            lakeTemperature: 0,
            lakeWidth: 0,
            lakeLength: 0,
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
                onClick={addAviary}
                variant="contained"
              >
                Add new aviary
              </Button>
            </form>
          )}
        </Formik>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Formik
          initialValues={{
            lakeTemperature: 0,
            lakeWidth: 0,
            lakeLength: 0,
            airTemperature: 0,
            landWidth: 0,
            landLength: 0,
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
                onClick={addAviary}
                variant="contained"
              >
                Add new aviary
              </Button>
            </form>
          )}
        </Formik>
      </TabPanel>
    </Box>
  );
};
