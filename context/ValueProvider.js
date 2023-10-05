// 1.要使用useContext要import  createContext, useContext, 這兩個東西
import React, { createContext, useContext, useState } from 'react'

// 2.建立一個Context 取名叫 exampleContext
const exampleContext = createContext()

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// 3.輸出第一個function
// 這個function的名字建議加上Provider準備用於_app.js或是其他較上層的元件
// 這裡的{children} 是一個自訂的prop變數名稱 不可省略 這是為了在app.js或其他上層元件能夠包住所有會用到的子元件的一個結構描述
export function ValueProvider({ children }) {
  // 3-1 使用useState建立一個狀態變數valueFromContext 與狀態更新函式setValueFromContext
  //並在等號的右邊 useState 設置初始值
  // 因為這個範例要做數字計算 所以初始值設為0
  // 但這個初始值可以是任何資料型態
  const [valueFromContext, setValueFromContext] = useState(0)

  // 3-2 return 一段jsx 標籤名字為 第5行 使用createContext()建立的exampleContext
  // 再加上.Provider 是為了符合React的規範 他就規定要這樣寫
  // 在這個標籤加上value屬性 裡面要放入一個物件 內容是在上面建立的 狀態變數 及 狀態更新函式
  // 如果有複數個狀態變數就一起放入
  return (
    <exampleContext.Provider value={{ valueFromContext, setValueFromContext }}>
      {children}
    </exampleContext.Provider>
  )
}
// 3-3這時後先到_app.js 將ValueProvider包在會使用到這裡的資料的頁面的最上層
// 而因為app.js是一個全域的入口頁面所以包在app.js就是全站都能吃到
// 上面設置好的狀態變數valueFromContext 與狀態更新函式setValueFromContext 就會變成全域可使用的

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// 4.建立第二個function 這個function在React的結構中算是一種Hooks 取名use開頭 模仿useState這種原生Hooks的取名方式，
// 這裡因為我是要取用valueFromContext這個狀態變數 所以我將Hooks取名為usevalueFromContext
// 這個自己取名的Hooks是要使用於要取出 狀態變數 及 狀態更新函式 的頁面

export const useValueFromContext = () => {
  // 這裡放入useContext這個原生Hooks 括號內放入我們在第2.步驟建立的Context
  return useContext(exampleContext)
}

//5.接下來請移駕到component/test1/TestValue1.js
