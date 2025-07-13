import { createContext, useState, useContext } from 'react';

const GlobalHeaderContext = createContext();

export function GlobalHeaderProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <GlobalHeaderContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </GlobalHeaderContext.Provider>
  );
}

// 3. Tạo hook gọn cho tiện
export const useGlobalHeaderContext = () => useContext(GlobalHeaderContext);