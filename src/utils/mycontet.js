import { createContext } from "react";

export const { Provider, Consumer } = createContext({
  name: "李逵",
});
// 顶层组件provider没有的时候就可以在createContext里面赋值
