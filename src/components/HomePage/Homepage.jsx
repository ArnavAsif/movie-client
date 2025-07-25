import React, { lazy, Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// Lazy-loaded components
const Headers = lazy(() => import('./Headers'));
const UpcommingMovies = lazy(() => import('./UpcommingMovies'));
const DownloadSection = lazy(() => import('./DownloadSection'));
const TopRatedMovies = lazy(() => import('./TopRatedMovies'));
const Promotions = lazy(() => import('./Promotions'));
const WorldBestSeries = lazy(() => import('./WorldBestSeries'));

// Skeleton loaders for each section
const HeaderSkeleton = () => <Skeleton height={80} />;
const MovieSectionSkeleton = () => (
  <div style={{ padding: '1rem 0' }}>
    <Skeleton height={40} width={200} />
    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
      {[...Array(4)].map((_, i) => (
        <Skeleton key={i} height={300} width={200} />
      ))}
    </div>
  </div>
);

const Homepage = () => {
  return (
    <div>
      <Suspense fallback={<HeaderSkeleton />}>
        <Headers />
      </Suspense>

      <Suspense fallback={<MovieSectionSkeleton />}>
        <UpcommingMovies />
      </Suspense>

      <Suspense fallback={<MovieSectionSkeleton />}>
        <DownloadSection />
      </Suspense>

      <Suspense fallback={<MovieSectionSkeleton />}>
        <TopRatedMovies />
      </Suspense>

      <Suspense fallback={<MovieSectionSkeleton />}>
        <Promotions />
      </Suspense>

      <Suspense fallback={<MovieSectionSkeleton />}>
        <WorldBestSeries />
      </Suspense>
    </div>
  );
};

export default Homepage;
