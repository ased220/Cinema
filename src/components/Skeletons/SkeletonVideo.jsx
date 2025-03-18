// import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonVideo = (props) => (
  <ContentLoader 
    speed={1}
    width={780}
    height={700}
    viewBox="0 0 780 700"
    backgroundColor="#1c1c1c"
    foregroundColor="#454545"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="780" height="700" />
  </ContentLoader>
)


export default SkeletonVideo

