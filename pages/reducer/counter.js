import { useReducer } from 'react'

export default function Counter() {
  // 在下面的範例中counterReducer這個函式的兩個變數分別是帶入19行中設定的state跟dispatch
  const counterReducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 }
      case 'decrement':
        return { count: state.count - 1 }
      default:
        return state
    }
  }

  const initCount = { count: 0 }
  //中括號第一個參數state,對應到的是 useReducer 括號內的initCount 所以下面第27行可以直接渲染出state.count這個屬性值
  //中括號第二個參數dispatch是改變狀態用的但不是改變state的狀態，而是本身的狀態
  // 也就是說在建立一個useReducer時會用到的參數分別有
  // 1.要渲染的狀態變數(state)、2.要判斷狀態用的變數(dispatch)、3.自定義的函式(counterReducer)、4.第1.項目(state)的初始值(initCount)
  // 在下面這個範例中也就表示每次按了btn都會執行counterReducer(state,dispatch)，而state初始值為一個物件{ count: 0 } (在第16行被定義)，dispatch的值則在按下btn的瞬間被定義，依照對應的值不同進行 +1 或 -1 的運算，這個運算需要回傳一個完整的資料而不是單純改變屬性值，而這個return出來的資料就會改變state的值
  // 舉例來說：在counterReducer裡面我們回傳的值都是一個完整的物件 { count: state.count + 1 } 而不是單純計算state.count + 1，如果只有計算state.count + 1，那就會將state的值變成一個數字1(0+1=1)，雖然可以回傳這個值，將state的狀態做更新，但後續的運算就會出錯，譬如當state = 1 再按下btn，counterReducer的函式中放入的state變數並不是一個物件，沒有count這個屬性，所以就造成了錯誤
  const [state, dispatch] = useReducer(counterReducer, initCount)
  return (
    <div className="container">
      <h1>Counter</h1>
      <h2>{state.count}</h2>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch({ type: 'increment' })
        }}
      >
        +1
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch({ type: 'decrement' })
        }}
      >
        -1
      </button>
    </div>
  )
}
