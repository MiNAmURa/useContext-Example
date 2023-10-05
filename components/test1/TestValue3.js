import React, { useState } from 'react'

// 1.在要抽取資料的頁面 import 自製的hooks
import { useValueFormContext } from '../../context/ValueProvider'
import Link from 'next/link'

export default function TestValue3() {
  // 2.使用自製的hooks 提取Context中設定的資料
  const { valueFormContext, setValueFormContext } = useValueFormContext()

  return (
    <>
      <h4>這是3號渲染出來的,會顯示出1號跟2號的總和</h4>
      <h2>{valueFormContext}</h2>
      <Link href={'./'} className={'btn btn-info'}>
        上一步
      </Link>
    </>
  )
}
