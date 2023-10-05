import BoltIcon from '@mui/icons-material/Bolt';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import FilterListIcon from '@mui/icons-material/FilterList';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

import { BOX_WRAPPER } from '~/utils/constant';

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  borderRadius: '4px',
  px: '5px',
  '.MuiSvgIcon-root': {
    color: 'white',
  },
  '&:hover': {
    bgcolor: 'primary.50',
  },
};

function BoardBar() {
  return (
    <Box
      borderBottom="1px solid #00bfa5"
      height={(theme) => theme.trello.boardBarHeight}
      justifyContent="space-between"
      width="100%"
      px={2}
      sx={{
        ...BOX_WRAPPER,
        overflowX: 'auto',
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
      }}
    >
      <Box display="flex" alignItems="center" gap={2}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="Dashboard"
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add to Drive"
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          onClick={() => {}}
        />
      </Box>
      <Box sx={BOX_WRAPPER}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': {
              borderColor: 'white',
            },
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={7}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': {
                bgColor: '#a4b0be',
              },
            },
          }}
        >
          <Tooltip title="Alex">
            <Avatar alt="Alex" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="Travis">
            <Avatar alt="Travis" src="/static/images/avatar/2.jpg" />
          </Tooltip>
          <Tooltip title="Cindy">
            <Avatar alt="Cindy" src="/static/images/avatar/3.jpg" />
          </Tooltip>
          <Tooltip title="Agnes">
            <Avatar alt="Agnes" src="/static/images/avatar/4.jpg" />
          </Tooltip>
          <Tooltip title="Trevor">
            <Avatar alt="Trevor" src="/static/images/avatar/5.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
