'use client';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Global } from '@emotion/react';
import { globalStyles } from '@/shared/styles/global';
import styled from '@emotion/styled';
import Timer from '@/shared/components/course/timer';
//import ClientComponent from './ClientComponent';
import prev from '@/shared/assets/icons/prev.svg';
import Timeline from '@/shared/components/course/timeline';
import TrainingHeader from '@/shared/components/header/trainingHeader';

interface RecommendationDetailPageProps {
  params: { id: string };
}

export default function RecommendationDetailPage({ params }: RecommendationDetailPageProps) {
  const queryClient = new QueryClient();
  //const { id } = params;

  const timelineItems = [
    { text: '빠르게 걷기 | 8분 | 속도6' },
    { text: '전력 질주 | 1분 | 속도 11' },
    { text: '빠르게 걷기 | 2분 | 속도6' },
    { text: '전력 질주 | 1분 | 속도 11' },
    { text: '빠르게 걷기 | 2분 | 속도6' },
    { text: '전력 질주 | 1분 | 속도 11' },
    { text: '천천히 걷기 | 5분 | 속도4' },
  ];

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Global styles={globalStyles} />
      <TrainingHeader icon={prev.src} iconSize={25}>
        30일 만에 -10kg 코스
      </TrainingHeader>
      <Section>
        <Timer duration={10} radius={75} thinStrokeWidth={1} thickStrokeWidth={5} color='#87A7F8' backgroundColor='#D9D9D9' />
        <Timeline items={timelineItems} />
        {/* <ClientComponent id={id} /> */}
      </Section>
    </HydrationBoundary>
  );
}

const Section = styled.section`
 margin: 20px 0px;
  height: 100%;
`;
