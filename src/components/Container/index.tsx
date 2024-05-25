import Box from 'components/Box'
import React from 'react'
import { StyledContainer } from './container.styled'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ActivityIndicator } from 'react-native'

type Props = {
  children: React.ReactNode | React.ReactNode[];
  scrollable?: boolean
  noinsets?: boolean
  isLoading?: boolean
  bottominsectOnly?: boolean
}

export default function Container({ isLoading, bottominsectOnly, children, scrollable, noinsets }: Props) {
  const insets = useSafeAreaInsets()
  return (
    <Box backgroundColor={'background'} style={noinsets ? {} : bottominsectOnly ? { paddingBottom: insets.bottom } : { paddingTop: insets.top }} flex={1}>
      {
        isLoading ? <Box flex={1} justifyContent={'center'} alignItems={'center'}><ActivityIndicator /></Box> :
          scrollable ? <StyledContainer >
            {children}
          </StyledContainer> : children
      }

    </Box>
  )
}