import { XStack } from 'tamagui'
import { MyButton } from './Button'

export default {
  title: 'Components/Forms/Button',
}

export const Sizes = () => {
  return (
    <XStack space={'$4'}>
      <MyButton size={'$2'}>Size 2</MyButton>
      <MyButton size={'$3'}>Size 3</MyButton>
      <MyButton size={'$4'}>Size 4</MyButton>
      <MyButton size={'$5'}>Size 5</MyButton>
      <MyButton size={'$6'}>Size 6</MyButton>
      <MyButton size={'$7'}>Size 7</MyButton>
      <MyButton size={'$8'}>Size 8</MyButton>
    </XStack>
  )
}
