'use client';

import { useRouter } from 'next/navigation';
import { Center } from '@/components/layout/Center';
import { ContentBlock } from '@/components/layout/ContentBlock';
import { Paragraph } from '@/components/layout/Paragraph';
import { GameStatic } from '@/components/game/GameStatic';
import { MenuButton } from '@/components/navigation/MenuButton';
import { MenuWrapper } from '@/components/navigation/MenuWrapper';
import { LearnIcon } from '@/components/icons/LearnIcon';

export default function IndexPage() {
  const router = useRouter();

  return (
    <>
      <Center>
        <GameStatic
          levelData={`
            111
            1M1
            111
          `}
        />
      </Center>
      <ContentBlock>
        <Paragraph>
          Play the classic minesweeper game in your browser.
        </Paragraph>
        <MenuWrapper>
          <MenuButton text="Easy" onClick={() => router.push('/game/easy')} />
          <MenuButton text="Hard" onClick={() => router.push('/game/easy')} />
          <MenuButton
            text="Expert"
            onClick={() => router.push('/game/expert')}
          />
        </MenuWrapper>
      </ContentBlock>
      <ContentBlock>
        <Center>
          <LearnIcon fill="white" className="size-8" />
        </Center>
        <Paragraph>Or learn how to play via interactive tutorials.</Paragraph>
        <MenuWrapper>
          <MenuButton
            text="Minesweeper Rules"
            onClick={() => router.push('/tutorial/intro/001')}
          />
        </MenuWrapper>
      </ContentBlock>
    </>
  );
}
