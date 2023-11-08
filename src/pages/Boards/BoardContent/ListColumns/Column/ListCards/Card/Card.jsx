import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MuiCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Attachment from '@mui/icons-material/Attachment';
import Group from '@mui/icons-material/Group';
import ModeComment from '@mui/icons-material/ModeComment';
import { useMemo } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function Card({ card }) {
  const shouldShowCardActions = useMemo(() => {
    return (
      card?.memberIds?.length ||
      card?.comment?.length ||
      card?.attachments?.length
    );
  }, []);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: card?._id, data: { ...card } });

  const dndKitCardStyles = {
    // touchAction: 'none', // Dành cho các sensor dạng PointerSensor
    /*
      Issue happened when using Transform
      https://github.com/clauderic/dnd-kit/issues/117
    */

    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
  };

  return (
    <MuiCard
      ref={setNodeRef}
      style={dndKitCardStyles}
      {...attributes}
      {...listeners}
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
        overflow: 'unset',
      }}
    >
      {card?.cover ? (
        <CardMedia sx={{ height: 140 }} image={card.cover} title={card.title} />
      ) : null}
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>{card?.title}</Typography>
      </CardContent>
      {shouldShowCardActions ? (
        <CardActions sx={{ p: '0 4px 8px 4px' }}>
          {card?.memberIds?.length ? (
            <Button size="small" startIcon={<Group />}>
              {card?.memberIds?.length}
            </Button>
          ) : null}
          {card?.comment?.length ? (
            <Button size="small" startIcon={<ModeComment />}>
              {card?.comment?.length}
            </Button>
          ) : null}
          {card?.attachments?.length ? (
            <Button size="small" startIcon={<Attachment />}>
              {card?.attachments?.length}
            </Button>
          ) : null}
        </CardActions>
      ) : null}
    </MuiCard>
  );
}

export default Card;
