import { atom } from 'recoil'

export const deviceCountState = atom<number>({
  key: 'deviceCountState',
  default: 1,
  effects: [
    ({ setSelf, onSet }) => {
      const saved = localStorage.getItem('deviceCount')
      if (saved != null) setSelf(Number(saved))

      onSet((val) => {
        localStorage.setItem('deviceCount', String(val))
      })
    },
  ],
})

export const selectedPlanIndexState = atom<number | null>({
  key: 'selectedPlanIndexState',
  default: 2, // по умолчанию третий элемент
  effects: [
    ({ setSelf, onSet }) => {
      const saved = localStorage.getItem('selectedPlanIndex')
      if (saved != null) setSelf(Number(saved))

      onSet((val) => {
        if (val === null) {
          localStorage.removeItem('selectedPlanIndex')
        } else {
          localStorage.setItem('selectedPlanIndex', String(val))
        }
      })
    },
  ],
})
