import { useColorScheme } from '@mui/joy/styles';
import Button from '@mui/joy/Button';

export default function ModeButton() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      variant="outlined"
      color="neutral"
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
    >
      {mode === 'dark' ? 'light' : 'dark'}
    </Button>
  );
}
