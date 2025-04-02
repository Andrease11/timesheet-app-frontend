import { create } from 'zustand'
import { persist, devtools, createJSONStorage } from 'zustand/middleware'

const name = 'auth'

export interface SettingsInternalState {
  token: string;
  email: string;
  username: string;
}

export interface SettingsActions {

  setToken: (token: string) => void;
  setEmail: (email: string) => void;

}

export const useAuthStore = create<SettingsInternalState & SettingsActions>()(
  devtools(
    persist(
      (set, get) => ({
        token: '',
        email: '',
        username: '',
        setToken: (token: string) => set({ token }),
        setEmail: (email: string) => set({ email }),
        setUsername: (username: string) => set({ username }),
      }),
      {
        name: name,
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default useAuthStore;
