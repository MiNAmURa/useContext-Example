import { useEffect } from 'react'
import '@/styles/globals.scss'

// 引入在context資料夾中建立的ValueProvider
// 這裡的操作其實就跟引入Component的概念類似
import { ValueProvider } from '../context/ValueProvider'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])

  // const getLayout =
  //   Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return (
    // 將上面引入的ValueProvider用jsx標籤的形式包住app.js的全站渲染入口 這樣即可讓全站引用我們在ValueProvider建立的狀態變數及 狀態更新函式
    <>
      <div className={'container'}>
        <ValueProvider>{<Component {...pageProps} />}</ValueProvider>
      </div>
    </>
  )
}
