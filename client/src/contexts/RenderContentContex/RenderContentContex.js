import { createContext, useContext } from "react";

export const RenderContentContex = createContext();

export const useRenderContent = () => useContext(RenderContentContex);
