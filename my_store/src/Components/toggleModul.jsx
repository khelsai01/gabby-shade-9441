import React from 'react'
import { MoonIcon,SunIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'

const toggleMode = () => {
    const {colorMode, toggleColorMode} = useColorMode()
  return (
    <IconButton icon={colorMode==="dark<"?<SunIcon />:<MoonIcon />} onClick={toggleColorMode}/>
  )
}

export default toggleModul