import { create } from "zustand";
import { persist } from "zustand/middleware";

// Auth Store with persistence
export const useAuthStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      userData: null,
      token: null,
      login: (user, token) =>
        set(() => ({
          isLoggedIn: true,
          userData: user,
          token: token,
        })),
      logout: () =>
        set(() => ({
          isLoggedIn: false,
          userData: null,
          token: null,
        })),
    }),
    {
      name: "auth-storage", // localStorage key
    }
  )
);

// UI Store
export const useUIStore = create(
  persist(
    (set) => ({
    theme: "light",
    setTheme: (theme) => set({ theme }),
    ThemeList: [
      "light",
      "dark",
      "lemonade",
      "dracula",
      "silk",
      "cupcake",
      "retro",
      "coffee",
      "customdark",
    ],
    isSideBarOpen: true,
    toggleSidebar: () =>
      set((state) => ({
        isSideBarOpen: !state.isSideBarOpen,
      })),

    //Modal Registry
    openModals: [], //["dashBoardModal", "settingsModal"]
    openModal: (modalId) =>
      set((state) => {
        // Adds modalId to openModals array if it's not already present
        if (state.openModals.includes(modalId))
          return { openModals: state.openModals };
        return { openModals: [...state.openModals, modalId] };
      }),
    closeModal: (modalId) =>
      set((state) => ({
        // Removes modalId from openModals array
        openModals: state.openModals.filter((m) => m !== modalId),
      })),

    //fontSize
    fontSize: 15,
    setFontSize: (size) => set(() => ({ fontSize: size })),
    }),
    {
      name: "ui-storage", // localStorage key
    }
  )
);

export const useDraftStore = create(
  persist(
    (set, get) => ({
    drafts: {}, //{ postId: { title, content, lastSaved } }
    saveDraft: (postId, content) =>
      set((state) => ({
        drafts: {
          ...state.drafts,
          [postId]: { ...content, lastSaved: Date.now() },
        },
      })),
    deleteDraft: (postId) =>
      set((state) => {
        const { [postId]: _, ...rest } = state.drafts;
        return { drafts: rest };
      }),
    getDraft: (postId) => {
      return get().drafts[postId] || null;
    },
  }),
    {
      name: "draft-storage", // localStorage key
  })
);

export const useNotificationStore = create(
  persist((set) => ({
    notifications: [], //[{id, type, message, timestamp}]
    addNotification: (notification) =>
      set((state) => {
        // Generate a unique id using Date.now and a random number to avoid collisions
        const id = `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
        return {
          notifications: [
            ...state.notifications,
            { id, ...notification, timestamp: Date.now() },
          ],
        };
      }),
    removeNotification: (id) =>
      set((state) => ({
        notifications: state.notifications.filter((notif) => notif.id !== id),
      })),
    clearAll: () =>
      set(() => ({
        notifications: [],
      })),
  }),
    {
      name: "notification-storage", // localStorage key
  })
);

export const useBookmarkStore = create(
  persist((set) => ({
    bookmarks: {}, //{ itemId: { title, url } }
    addBookmark: (item) =>
      set((state) => {
        const itemId = `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
        return {
          bookmarks: { ...state.bookmarks, [itemId]: item },
        };
      }),
    removeBookmark: (itemId) =>
      set((state) => {
        const { [itemId]: _, ...rest } = state.bookmarks;
        return { bookmarks: rest };
      }),
  }), {
    name: "bookmark-storage", // localStorage key
  })
);