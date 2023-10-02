import { useColorScheme } from '@mui/material/styles';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import Box from '@mui/material/Box';

function ModeSelect() {
  const { mode, setMode } = useColorScheme();

  const handleChange = (event) => {
    const mode = event.target.value;
    setMode(mode);
  };

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel
        id="label-select-dark-light-mode"
        sx={{ color: 'white', '&.Mui-focused': { color: 'white' } }}
      >
        Mode
      </InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        sx={{
          color: 'white',
          '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
          '.MuiSvgIcon-root': {
            color: 'white',
          },
        }}
        onChange={handleChange}
      >
        <MenuItem value="light">
          <Box display="flex" alignItems={'center'} gap={1}>
            <LightModeIcon fontSize="small" />
            Light
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box display="flex" alignItems={'center'} gap={1}>
            <DarkModeIcon fontSize="small" />
            System
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box display="flex" alignItems={'center'} gap={1}>
            <SettingsBrightnessIcon fontSize="small" />
            Dark
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default ModeSelect;
