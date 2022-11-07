import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

let exampleStore = (set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
})

const defaultMode = JSON.parse(localStorage.getItem("darkMode"));

let darkLightMode = (set) => ({
  dark: defaultMode.state.dark,
  setDarkToggle: () => set((state) => ({ dark: !state.dark }))
})

exampleStore = devtools(exampleStore, {name: "example_store", enabled: true})
darkLightMode = devtools(darkLightMode, {name: "dark_mode", enabled: true})
// persist = data akan disimpan di localStorage
darkLightMode = persist(darkLightMode, {name: "darkMode"});

export const useExampleStore = create(exampleStore);
export const uselayoutConfig = create(darkLightMode);

