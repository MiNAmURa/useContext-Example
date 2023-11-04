import React from 'react'

// 1.在要抽取資料的頁面 import 自製的hooks

import { useValueFromContext } from '../../context/ValueProvider'

export default function TestValue2() {
  // 2.使用自製的hooks 提取Context中設定的資料
  const { valueFromContext, setValueFromContext } = useValueFromContext()
  return (
    <>
      <h4>這是2號渲染出來的 </h4>
      <h2>valueFromContext = {valueFromContext}</h2>
      <button
        className={'btn btn-info me-5'}
        onClick={() => {
          setValueFromContext(valueFromContext + 2000)
        }}
      >
        從2號改變valueFromContext值 加2000
      </button>
      <button
        className={'btn btn-info me-5'}
        onClick={() => {
          setValueFromContext(valueFromContext - 2000)
        }}
      >
        從2號改變valueFromContext值 減2000
      </button>
    </>
  )
}
