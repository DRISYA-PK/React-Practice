import React, { lazy, Suspense } from 'react'


const LazyLoadComponent=lazy(()=>import('./Hello'))

const LazyLoading = () => {
  return (
  <>
    <div>LazyLoading</div>
    <Suspense fallback={<><div>loading</div></>}>
   <LazyLoadComponent/>
    </Suspense>

    </>
  )
}

export default LazyLoading