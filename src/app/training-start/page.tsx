'use client';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { globalStyles } from '@/shared/styles/global';
import CourseBox from '@/shared/components/course/courseBox';
import running from '@/shared/assets/icons/running.svg';
import recommendation from '@/shared/assets/icons/recommendation.svg';
import my from '@/shared/assets/icons/my.svg';
import { useRouter } from 'next/navigation';

export default function TrainingStart() {
  const router = useRouter();
  const queryClient = new QueryClient();

  const onRecommendation = () => {
    router.push('/recommendation');
  };

  const onMyCourse = () => {
    router.push('/mycourse');
  };

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Global styles={globalStyles} />
      <Container>
        <CourseBox $width={263} $height={121} $fontSize={20} $variant='blue' icon={running.src} iconBgColor='#E1EAFF' iconSize={55}>
          인터벌트레이닝 바로 시작하기
        </CourseBox>
        <BoxWrapper>
          <CourseBox onClick={onRecommendation} $width={125} $height={148} $fontSize={20} $variant='mint' icon={recommendation.src} iconBgColor='white' iconSize={55} direction='column'>
            추천 코스
          </CourseBox>
          <CourseBox onClick={onMyCourse} $width={125} $height={148} $fontSize={20} $variant='mint' icon={my.src} iconBgColor='white' iconSize={55} direction='column'>
            내 코스
          </CourseBox>
        </BoxWrapper>
      </Container>
    </HydrationBoundary>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: center;  
  gap: 7px;
  width: 100%;
  height: 100%;
  padding: 16px;
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 7px;
  width: 100%;
`;
