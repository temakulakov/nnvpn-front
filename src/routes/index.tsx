// index.tsx

import Stack from '@mui/material/Stack';
import { useTranslation } from 'react-i18next'
import { createFileRoute, useNavigate } from '@tanstack/react-router'

import AnimatedButton from '../components/AnimatedButton/AnimatedButton';
function Home() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  return <>
  <AnimatedButton
        fullWidth
        // loading
        loadingPosition="start"
        // startIcon={<SaveIcon />}
        variant="outlined"
        onClick={() => navigate({ to: '/subscribe' })}
      >
        {t('index.buttons.subscribe')}
      </AnimatedButton>
      <AnimatedButton
        fullWidth
        // loading
        loadingPosition="start"
        // startIcon={<SaveIcon />}
        variant="outlined"
        onClick={() => navigate({ to: '/account' })}
      >
        {t('index.buttons.account')}
      </AnimatedButton>

       <Stack direction="row" spacing={1} useFlexGap sx={{
    justifyContent: "space-between",
    alignItems: "center",
  }}>
        <AnimatedButton fullWidth  variant="outlined" loadingPosition="start" onClick={() => navigate({ to: '/help' })}>
          {t('index.buttons.help')}
        </AnimatedButton>
        <AnimatedButton fullWidth  variant="outlined" loadingPosition="end" onClick={() => navigate({ to: '/lang' })}>
          {t('index.buttons.language')}
        </AnimatedButton>
      </Stack>
      </>
}

export const Route = createFileRoute('/')({ component: Home })
