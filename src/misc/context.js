import { createContext } from 'react';
const globalContext = createContext();
export const { Provider } = globalContext;
export default globalContext;