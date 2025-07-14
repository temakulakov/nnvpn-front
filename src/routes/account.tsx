import { Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/account')({
  component: RouteComponent,
})

function RouteComponent() {
  const { t } = useTranslation()
  return <>
  <Typography> {t(`account.share_confs_link`)}</Typography>
  <div>Скопировать</div>
  <div>
    <Typography> {t(`account.user_list.devices_add`)}</Typography>
    <Typography> {t(`account.user_list.transactions_history`)}</Typography>
    <Typography> {t(`account.user_list.referals`)}</Typography>
    <Typography> {t(`account.user_list.using_rules`)}</Typography>
    <Typography> {t(`account.user_list.user_agre`)}</Typography>
  </div>
  </>
}
