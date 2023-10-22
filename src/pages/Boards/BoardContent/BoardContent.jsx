import Box from '@mui/material/Box';
import ListColumns from './ListColumns/ListColumns';
import { mapOrder } from '~/utils/sorts';
import { useMemo } from 'react';

function BoardContent({ board }) {
  const orderedColumns = useMemo(
    () => mapOrder(board?.columns, board?.columnOrderIds, '_id'),
    [],
  );
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,

        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
        p: '10px 0',
      }}
    >
      <ListColumns columns={orderedColumns} />
    </Box>
  );
}

export default BoardContent;