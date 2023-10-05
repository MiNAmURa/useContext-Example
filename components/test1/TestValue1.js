import React, { useState } from 'react'

// 如何提取context的資料在頁面呢？

// 1.在要抽取資料的頁面 import 我們剛剛自製的hooks
// 就像import useState一樣
import { useValueFormContext } from '../../context/ValueProvider'

export default function TestValue1() {
  // 2.使用自製的hooks 提取Context中設定的資料
  // 也就是我們設定的全域 狀態變數 及 狀態更新函式
  // 寫起來跟useState類似 但使用大括號包住它們
  const { valueFormContext, setValueFormContext } = useValueFormContext()

  // 接下來就可以在頁面渲染這個狀態變數 以及使用狀態更新函式 改變它的狀態
  // 而其他頁面如果也有使用這個狀態變數 都會同步進行更新
  // 上面的操作在其他要抽資料的頁面都同理

  return (
    <>
      {/* <div>{TestValue1}</div> */}
      <h4>這是1號渲染出來的</h4>
      <h2>valueFormContext = {valueFormContext}</h2>
      <button
        className={'btn btn-info me-5'}
        onClick={() => {
          setValueFormContext(valueFormContext + 1000)
        }}
      >
        從1號改變valueFormContext值 加1000
      </button>
      <button
        className={'btn btn-info me-5'}
        onClick={() => {
          setValueFormContext(valueFormContext - 1000)
        }}
      >
        從1號改變valueFormContext值 減1000
      </button>
    </>
  )
}
