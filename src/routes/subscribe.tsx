import {
  Typography,
  Slider,
  Stack,
  Grid,
} from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { useRecoilState } from 'recoil'
import { deviceCountState, selectedPlanIndexState } from '../store/subscribeState'
import AnimatedButton from '../components/AnimatedButton/AnimatedButton'
import prices from '../prices.json'

export const Route = createFileRoute('/subscribe')({
  component: RouteComponent,
})

function RouteComponent() {
  const { t } = useTranslation()
  const [deviceCount, setDeviceCount] = useRecoilState(deviceCountState)
  const [selectedPlanIndex, setSelectedPlanIndex] = useRecoilState(selectedPlanIndexState)


  // ⚙️ метки для слайдера
  const marks = Array.from({ length: 5 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}`,
  }))

  // 📦 обработчик изменения количества устройств
  const handleDeviceChange = (_: any, value: number | number[]) => {
    const newDeviceCount = value as number
    setDeviceCount(newDeviceCount)

    // ⚠️ Проверяем, существует ли тариф с таким количеством устройств
    if (!prices[selectedPlanIndex]?.devices[newDeviceCount - 1]) {
      // ❌ Если нет — не сбрасываем, просто ничего не делаем
      // Но можно предусмотреть запасной вариант:
      // setSelectedPlanIndex(0)
    }
  }

  const handlePlanClick = (index: number) => {
    setSelectedPlanIndex(index)
  }

  const selectedCost =
    prices[selectedPlanIndex]?.devices[deviceCount - 1]?.cost ?? 0

  return (
    <Stack spacing={2}>
      <Typography variant="h5">{t('subscribe.text.title')}</Typography>
      <Typography>{t('subscribe.text.description')}</Typography>
      <Typography>{t('subscribe.text.devices')} {deviceCount}</Typography>

      <Slider
        value={deviceCount}
        onChange={handleDeviceChange}
        step={1}
        marks={marks}
        min={1}
        max={5}
        valueLabelDisplay="auto"
        sx={{ maxWidth: '100%' }}
      />

      <Grid container rowSpacing={1.5} columnSpacing={0} sx={{ justifyContent: 'space-around' }}>
        {prices.map((plan, index) => {
          const cost = plan.devices[deviceCount - 1]?.cost
          const months = [1, 3, 6, 12][index]
          const perMonth = Math.round(cost / months)

          return (
            <AnimatedButton
              fullWidth
              key={index}
              onClick={() => handlePlanClick(index)}
              sx={{
                width: '47%',
                height: 140,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 0.5,
                padding: 2,
                borderRadius: 2,
                border: '2px solid',
                borderColor: selectedPlanIndex === index ? 'primary.main' : 'rgba(255,255,255,0.2)',
                backgroundColor: 'rgba(255,255,255,0.03)',
                textAlign: 'center',
                position: 'relative',
                boxSizing: 'border-box',
              }}
            >
             <Typography fontWeight="bold" whiteSpace="nowrap">
              {t(`subscribe.prices.${plan.text}`)}
            </Typography>

              <Typography variant="h6" whiteSpace="nowrap">
                {cost} ₽
              </Typography>
              {months > 1 && (
                <Typography variant="body2" color="text.secondary" whiteSpace="nowrap">
                  {perMonth} ₽ В МЕСЯЦ
                </Typography>
              )}
              {/* {months === 6 && (
                <Chip
                  label="ПОПУЛЯРНЫЙ"
                  size="small"
                  color="error"
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    fontWeight: 'bold',
                  }}
                />
              )} */}
            </AnimatedButton>
          )
        })}
      </Grid>

      <AnimatedButton
        variant="contained"
        size="large"
        disabled={selectedPlanIndex === null}
        sx={{ mt: 2 }}
      >
        Оплатить {selectedCost} ₽
      </AnimatedButton>
    </Stack>
  )
}
