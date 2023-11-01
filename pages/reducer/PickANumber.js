import { useEffect, useReducer, useState } from 'react'

export default function PickANumber() {
  const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [picked, setPicked] = useState(0)

  // const PickNum = (pickedNum, num) => {
  //   let pickNumber = oneToTen.map((v) => {
  //     if (num == v) {
  //       console.log(v)
  //       return v
  //     }
  //   })
  //   return pickNumber
  // }

  const PickNum = (pickedNum, num) => {
    let pickNumber
    oneToTen.forEach((v) => {
      if (num == v) {
        // console.log(v)
        pickNumber = v
      }
    })
    return pickNumber
  }

  const [pickedNum, num] = useReducer(PickNum, 0)
  // useEffect(() => {
  //   console.log(pickedNum)
  // }, [pickedNum])
  return (
    <>
      <h1>PickANumber</h1>
      <h2>{pickedNum}</h2>
      {oneToTen.map((v) => (
        <button
          key={v}
          className={`btn ${
            picked == v ? 'btn-light border border-primary' : 'btn-primary'
          }`}
          onClick={() => {
            num(v)
            setPicked(v)
          }}
        >
          {v}
        </button>
      ))}
    </>
  )
}
