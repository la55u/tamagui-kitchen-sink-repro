import { YStack, H1, Paragraph, Anchor, H3, H5 } from 'tamagui-extras'

export default {
  title: 'Docs/Intro',
}

export const Intro = () => (
  <YStack space>
    <H1 textAlign={'center'}>Intro</H1>
    <Paragraph maxWidth={600} textAlign={'center'} alignSelf={'center'}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente qui asperiores illo
      impedit. Nam quam aliquam dolorem sit. A enim corporis nisi similique ut cum repellat est
      ducimus et impedit?
    </Paragraph>
  </YStack>
)
