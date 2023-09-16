import Container from '@mui/material/Container';

import AppBar from '~/components/AppBar';
import BoardBar from './BoardBar';
import BoardContent from './BoardContent';

function Board() {
  return (
    <Container sx={{ height: '100vh' }} maxWidth={false} disableGutters>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  );
}

export default Board;
