import { Button, LmButton, LmLinkButton, Sheet, YStack } from 'tamagui-extras'
import { useAppState } from 'app/src/state/appState'
import React, { useState } from 'react'
import { XStack } from 'tamagui'
import { useOnRouteChange } from 'app/src/navigation/useOnRouteChange'
import { changeLanguage } from 'app/src/i18n/i18n'
import { useTranslation } from 'react-i18next'

export function LmAppDrawer() {
  const { t } = useTranslation()
  const { isMainDrawerOpen, setMainDrawer } = useAppState()
  const [position, setPosition] = useState(0)
  useOnRouteChange(() => setMainDrawer(false))

  return (
    <>
      <Sheet
        modal
        open={isMainDrawerOpen}
        onOpenChange={setMainDrawer}
        snapPoints={[85, 50, 25]}
        dismissOnSnapToBottom
        position={position}
        onPositionChange={setPosition}
      >
        <Sheet.Overlay />
        <Sheet.Handle />

        <Sheet.Frame alignItems="center" justifyContent="center">
          <Sheet.ScrollView>
            <YStack padding="$4" justifyContent="center" alignItems="center">
              <XStack space>
                <LmLinkButton link={{ href: '/' }}>{t('home')}</LmLinkButton>
                <LmLinkButton link={{ href: '/icons' }}>{t('icons')}</LmLinkButton>
                <LmLinkButton link={{ href: '/playground' }}>{t('playground')}</LmLinkButton>
                <LmLinkButton link={{ href: '/overview' }}>
                  {t('overviewScreen.headline')}
                </LmLinkButton>
              </XStack>
              <XStack space my={'$4'}>
                <LmButton onPress={() => changeLanguage('de')}>DE</LmButton>
                <LmButton onPress={() => changeLanguage('en')}>EN</LmButton>
              </XStack>
              <Button onPress={() => setMainDrawer(false)}>{t('close')}</Button>
            </YStack>
          </Sheet.ScrollView>
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
