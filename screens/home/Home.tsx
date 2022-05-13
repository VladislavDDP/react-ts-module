import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import { TabPanel } from '../../components/TabPanel';
import { Aviary } from '../../models/Aviary';
import { SnakeAviary } from '../../models/SnakeAviary';
import { TurtleAviary } from '../../models/TurtleAviary';
import { ChameleonAviary } from '../../models/ChameleonAviary';
import { SnakeAviaryForm } from './SnakeAviaryForm';
import { TurtleAviaryForm } from './TurtleAviaryForm';
import { ChameleonAviaryForm } from './ChameleonAviaryForm';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  height: '60%',
  overflowY: 'auto',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const Home = () => {
  const [aviaryCount, setAviaryCount] = useState(0);
  const [value, setValue] = useState(0);
  const [aviaries, setAviaries] = useState<Array<Aviary>>([]);
  const [totalVolume, setTotalVolume] = useState<string | number>(0);
  const [totalSquare, setTotalSquare] = useState<string | number>(0);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setTotalVolume(
      aviaries
        .reduce((acc, instance) => acc + instance.printVolume(), 0)
        .toFixed(2)
    );

    setTotalSquare(
      aviaries
        .reduce((acc, instance) => acc + instance.printSquare(), 0)
        .toFixed(2)
    );
  }, [aviaries]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const increaseAviariesQuantity = () => {
    setAviaryCount((prev) => prev + 1);
  };

  const addSnakeAviary = (values: {
    airTemperature: number;
    landWidth: number;
    landLength: number;
  }) => {
    setAviaries((prev) => [
      ...prev,
      new SnakeAviary(
        values.airTemperature,
        values.landWidth,
        values.landLength
      ),
    ]);
  };

  const addTurtleAviary = (values: {
    lakeTemperature: number;
    lakeWidth: number;
    lakeLength: number;
  }) => {
    setAviaries((prev) => [
      ...prev,
      new TurtleAviary(
        values.lakeTemperature,
        values.lakeWidth,
        values.lakeLength
      ),
    ]);
  };

  const addChameleonAviary = (values: {
    airTemperature: number;
    landWidth: number;
    landLength: number;
    lakeTemperature: number;
    lakeWidth: number;
    lakeLength: number;
  }) => {
    setAviaries((prev) => [
      ...prev,
      new ChameleonAviary(
        values.lakeTemperature,
        values.lakeWidth,
        values.lakeLength,
        values.airTemperature,
        values.landWidth,
        values.landLength
      ),
    ]);
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Details about each aviary
          </Typography>
          {!aviaries.length ? (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              There are no aviaries
            </Typography>
          ) : (
            aviaries.map((aviary, index) => (
              <Typography
                key={index}
                id="modal-modal-description"
                sx={{ mt: 2 }}
              >
                Aviary {aviary.name}. Square: {aviary.printSquare()}, Volume:{' '}
                {aviary.printVolume()}
              </Typography>
            ))
          )}
        </Box>
      </Modal>
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
        <Typography variant="h6">There are {aviaryCount} aviaries</Typography>
        <Typography>Total volume: {totalVolume}</Typography>
        <Typography>Total square: {totalSquare}</Typography>

        <Button variant="outlined" onClick={handleOpen}>
          Check all
        </Button>
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
        <Alert severity="warning">
          Default height for snake aviary is 0.75m
        </Alert>
        <SnakeAviaryForm
          addSnakeAviary={addSnakeAviary}
          increaseAviariesQuantity={increaseAviariesQuantity}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Alert severity="warning">Default height for turtle aviary is 2m</Alert>
        <TurtleAviaryForm
          addTurtleAviary={addTurtleAviary}
          increaseAviariesQuantity={increaseAviariesQuantity}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Alert severity="warning">
          Default height for chameleon aviary is 0.5m
        </Alert>
        <ChameleonAviaryForm
          addChameleonAviary={addChameleonAviary}
          increaseAviariesQuantity={increaseAviariesQuantity}
        />
      </TabPanel>
    </Box>
  );
};
