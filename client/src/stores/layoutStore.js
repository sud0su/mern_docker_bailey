// persist = data akan disimpan di localStorage
import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'


// layout config store
const defaultMode = JSON.parse(localStorage.getItem("layoutMode"));
let layoutConfig = (set) => ({
    dark: defaultMode === null ? false : defaultMode.state.dark,
    setDarkToggle: () => set((state) => ({ dark: !state.dark })),
    isMobileMainMenuOpen: defaultMode === null ? false : defaultMode.state.isMobileMainMenuOpen,
    setMobileMainMenuOpen: () => set((state) => ({ isMobileMainMenuOpen: !state.isMobileMainMenuOpen })),
    isSidebarOpen: defaultMode === null ? true :  defaultMode.state.isMobileMainMenuOpen ? false : defaultMode.state.isSidebarOpen,
    setSidebarOpen: (value) => set({ isSidebarOpen: value }),
    isNotificationsPanelOpen: false,
    openNotificationsPanel: () => set((state) => ({ isNotificationsPanelOpen: !state.isNotificationsPanelOpen })),
    isSearchPanelOpen: false,
    openSearchPanel: () => set((state) => ({ isSearchPanelOpen: !state.isSearchPanelOpen })),
    isSettingPanelOpen: false,
    openSettingPanel: () => set((state) => ({ isSettingPanelOpen: !state.isSettingPanelOpen })),


    isRightPanelOpen: false,
    openRightPanel: () => set((state) => ({ isRightPanelOpen: !state.isRightPanelOpen })),
    isLeftPanelOpen: false,
    openLeftPanel: () => set((state) => ({ isLeftPanelOpen: !state.isLeftPanelOpen })),
})

layoutConfig = devtools(layoutConfig, "layoutConfig", { enabled: false })
layoutConfig = persist(layoutConfig, { name: "layoutMode", version: "1.0" });
export const uselayoutConfig = create(layoutConfig);


// loading store
let defaultLoading = (set) => ({
    loading: false,
    setLoading: () => set((state) => ({ loading: !state.loading }))
})

defaultLoading = devtools(defaultLoading, "Loading", { enabled: false })
export const useDefaultLoading = create(defaultLoading);

