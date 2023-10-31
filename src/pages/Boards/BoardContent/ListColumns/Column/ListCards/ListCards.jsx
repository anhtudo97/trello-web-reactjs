import Box from '@mui/material/Box';
import Card from './Card/Card';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

function ListCards({ cards }) {
  if (!cards) return null;
  return (
    <SortableContext
      items={cards?.map((item) => item._id)}
      strategy={verticalListSortingStrategy}
    >
      <Box
        sx={{
          p: '0 5px',
          m: '0 5px',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          overflowX: 'hidden',
          overflowY: 'auto',
          maxHeight: (theme) =>
            `calc(
                  ${theme.trello.boardContentHeight} - 
                  ${theme.spacing(5)} - 
                  ${theme.trello.columnHeaderHeight} - 
                  ${theme.trello.columnFooterHeight} 
              )`,
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ced0da',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#bfc2cf',
          },
        }}
      >
        {cards.map((card) => (
          <Card key={card._id} card={card} />
        ))}

        <Card temporaryHideMedia={true} />
      </Box>
    </SortableContext>
    /* Box column body */
  );
}

export default ListCards;
