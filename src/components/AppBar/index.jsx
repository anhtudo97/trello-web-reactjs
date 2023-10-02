import Box from '@mui/material/Box';
import ModeSelect from '~/components/ModeSelect';
import AppsIcon from '@mui/icons-material/Apps';
import TextField from '@mui/material/TextField';
import SvgIcon from '@mui/material/SvgIcon';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import InputAdornment from '@mui/material/InputAdornment';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CloseIcon from '@mui/icons-material/Close';

import { ReactComponent as TrelloIcon } from '~/assets/trello.svg';
import Workspaces from './Menus/Workspaces';
import Recent from './Menus/Recent';
import Starred from './Menus/Starred';
import Templates from './Menus/Templates';
import Profile from './Menus/Profile';
import { BOX_WRAPPER } from '~/utils/constant';
import { useState } from 'react';

function AppBar() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Box
      px={2}
      width="100%"
      height={(theme) => theme.trello.appBarHeight}
      justifyContent="space-between"
      sx={{
        ...BOX_WRAPPER,
        overflowX: 'auto',
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0',
      }}
    >
      <Box sx={{ ...BOX_WRAPPER }}>
        <AppsIcon sx={{ color: 'white' }} />
        <Box
          sx={{
            ...BOX_WRAPPER,
            gap: 0.5,
          }}
        >
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            fontSize="small"
            sx={{ color: 'white' }}
          />
          <Typography
            variant="span"
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            Trello
          </Typography>
        </Box>
        <Box
          display={{
            xs: 'none',
            md: 'flex',
          }}
          gap={1}
        >
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button
            variant="outlined"
            startIcon={<LibraryAddIcon />}
            sx={{
              color: 'white',
              border: 'none',
              '&:hover': { border: 'none' },
            }}
          >
            Create
          </Button>
        </Box>
      </Box>
      <Box sx={{ ...BOX_WRAPPER }}>
        <TextField
          id="filled-search"
          label="Search..."
          type="text"
          size="small"
          variant="outlined"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                fontSize="small"
                sx={{
                  color: 'white',
                  cursor: 'pointer',
                  display: searchValue ? 'block' : 'none',
                }}
                onClick={() => setSearchValue('')}
              />
            ),
          }}
          sx={{
            minWidth: 120,
            maxWidth: 170,
            '& label': { color: 'white' },
            '& input': { color: 'white' },
            '& label.Mui-focused': { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
          }}
        />
        <ModeSelect />
        <Tooltip title="Notifications">
          <Badge color="warning" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon sx={{ color: 'white' }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: 'pointer', color: 'white' }} />
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  );
}

export default AppBar;
