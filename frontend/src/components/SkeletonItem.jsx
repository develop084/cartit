import React from 'react'
import { Skeleton, SkeletonCircle, SkeletonText , Box} from '@chakra-ui/react'
function SkeletonItem() {
  return (
   <div>
      
      <Box>
         <Skeleton borderRadius="15px" height="200px"  width="250px"/>
         <Skeleton  borderRadius="15px" height="15px" width="250px" marginTop="2"/>
         <Skeleton marginTop="2" borderRadius="15px"  height="30px" width="125px"/>
      </Box>
    </div>
  )
}

export default SkeletonItem