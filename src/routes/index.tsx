// index.tsx
import { createFileRoute } from '@tanstack/react-router'
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';
import AnimatedButton from '../components/AnimatedButton/AnimatedButton';
function Home() {
  return <>
  <AnimatedButton
        fullWidth
        // loading
        loadingPosition="start"
        // startIcon={<SaveIcon />}
        variant="outlined"
      >
        Full width
      </AnimatedButton>
      <AnimatedButton
        fullWidth
        // loading
        loadingPosition="start"
        // startIcon={<SaveIcon />}
        variant="outlined"
      >
        Full width
      </AnimatedButton>

       <Stack direction="row" spacing={1} useFlexGap sx={{
    justifyContent: "space-between",
    alignItems: "center",
  }}>
        <AnimatedButton fullWidth  variant="outlined" loadingPosition="start">
          Submit
        </AnimatedButton>
        <AnimatedButton fullWidth  variant="outlined" loadingPosition="end">
          Submit
        </AnimatedButton>
      </Stack>
      </>
}

export const Route = createFileRoute('/')({ component: Home })
