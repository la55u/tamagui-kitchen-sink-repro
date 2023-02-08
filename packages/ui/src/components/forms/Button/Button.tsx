import { getSize, stepTokenUpOrDown } from '@tamagui/get-size'
import { Button, styled } from 'tamagui'

const radius = {
  none: { borderRadius: 0 },
  xs: { borderRadius: 4 },
  sm: { borderRadius: 6 },
  md: { borderRadius: 8 },
  lg: { borderRadius: 20 },
}

export const MyButton = styled(Button, {
  name: 'Button',
  fontWeight: '600',
  borderWidth: 1,
  fontSize: '$3',
  paddingHorizontal: '$4',

  variants: {
    radius: radius,
    size: {
      '...size': (val, { tokens }) => {
        if (typeof val === 'number') {
          return {
            paddingHorizontal: val * 0.5,
            height: val,
          }
        }
        const ySize = getSize(val, 0)
        const xSize = stepTokenUpOrDown('space', val)

        return {
          paddingHorizontal: xSize,
          height: ySize,
        }
      },
    },
  },

  defaultVariants: {
    size: '$5',
    radius: 'md',
  },
})
