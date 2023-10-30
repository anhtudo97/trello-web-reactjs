import Box from '@mui/material/Box';
import ListColumns from './ListColumns/ListColumns';
import { mapOrder } from '~/utils/sorts';
import { useEffect, useState } from 'react';
import {
  DndContext,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';

function BoardContent({ board }) {
  // Điều kiện kích hoạt event drag and drop là pointer của chuột phải di chuyển ít nhất 10px
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  // Nhấn giữ 250ms và dung sai của cảm ứng (Pointer lệch khỏi vị trí ban đầu 5px) mới kích hoạt event DnD
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 500,
    },
  });

  const sensors = useSensors(pointerSensor);
  // const sensors = useSensors(mouseSensor, touchSensor);

  const [orderedColumns, setOrderedColumns] = useState([]);

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'));
  }, [board]);

  const handleDragEnd = (event) => {
    console.log(`Handle drag end ${event}`);
    const { active, over } = event;

    // Nếu không có điểm drop sẽ huỷ lệnh drag
    if (!over) return;

    if (active.id !== over.id) {
      const oldIndex = orderedColumns.findIndex(
        (item) => item._id === active.id,
      );
      const newIndex = orderedColumns.findIndex((item) => item._id === over.id);

      // Swap element in array with arrayMove
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex);
      // const dndOrderedColumnsIds = dndOrderedColumns.map((item) => item._id);

      // console.log(`dndOrderedColumns: ${dndOrderedColumns}`);
      // console.log(`dndOrderedColumnsIds: ${dndOrderedColumnsIds}`);

      setOrderedColumns(dndOrderedColumns);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
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
    </DndContext>
  );
}

export default BoardContent;
