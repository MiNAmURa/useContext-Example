import React from 'react'
import TestValue1 from '../../components/contextTest/TestValue1'
import TestValue2 from '../../components/contextTest/TestValue2'
import Link from 'next/link'

export default function Test1() {
  return (
    <>
      <h1>TestValue1號</h1>
      <TestValue1 />
      <hr></hr>
      <h1>TestValue2號</h1>
      <TestValue2 />
      <hr></hr>
      <Link href={'./context/sum'} className={'btn btn-info'}>
        前往總和
      </Link>
    </>
  )
}
