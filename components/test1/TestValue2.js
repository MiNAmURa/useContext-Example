import React from 'react'

// 1.在要抽取資料的頁面 import 自製的hooks

import { useValueFormContext } from '../../context/ValueProvider'

export default function TestValue2() {
  // 2.使用自製的hooks 提取Context中設定的資料
  const { valueFormContext, setValueFormContext } = useValueFormContext()
  return (
    <>
      <h4>這是2號渲染出來的 </h4>
      <h2>valueFormContext = {valueFormContext}</h2>
      <button
        className={'btn btn-info me-5'}
        onClick={() => {
          setValueFormContext(valueFormContext + 2000)
        }}
      >
        從2號改變valueFormContext值 加2000
      </button>
      <button
        className={'btn btn-info me-5'}
        onClick={() => {
          setValueFormContext(valueFormContext - 2000)
        }}
      >
        從2號改變valueFormContext值 減2000
      </button>
    </>
  )
}
