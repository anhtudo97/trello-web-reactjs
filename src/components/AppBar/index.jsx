import Box from '@mui/material/Box';
import ModeSelect from '~/components/ModeSelect';
import AppsIcon from '@mui/icons-material/Apps';
import TextField from '@mui/material/TextField';
import SvgIcon from '@mui/material/SvgIcon';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg';
import Workspaces from './Menus/Workspaces';
import Recent from './Menus/Recent';
import Starred from './Menus/Starred';
import Templates from './Menus/Templates';
import Profile from './Menus/Profile';

function AppBar() {
  return (
    <Box
      px={2}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      height={(theme) => theme.trello.appBarHeight}
      gap={2}
      sx={{overflowX: 'auto'}}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <AppsIcon sx={{ color: 'primary.mian' }} />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
          }}
        >
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            fontSize="small"
            sx={{ color: 'primary.mian' }}
          />
          <Typography
            variant="span"
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'primary.mian',
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
          <Button variant="outlined">Create</Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          id="filled-search"
          label="Search..."
          type="search"
          size="small"
          variant="outlined"
          sx={{ minWidth: 120 }}
        />
        <ModeSelect />
        <Tooltip title="Notifications">
          <Badge color="primary" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon color="primary" />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: 'pointer' }} color="primary" />
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  );
}

export default AppBar;
