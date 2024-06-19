import { useState } from 'react';
import { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import { recoilInitializer } from 'atoms';
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';

import '../styles/reset.css';
import { global } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <>
            <Global styles={global} />
            <RecoilRoot
                /**
                 * ssr 사용시 받아온 데이터를 initializeState에 바로 넣어주어도 됩니다.
                 */
                initializeState={recoilInitializer}
            >
                <QueryClientProvider client={queryClient}>
                    <Hydrate state={pageProps.dehydratedState}>
                        <Component {...pageProps} />
                    </Hydrate>
                </QueryClientProvider>
            </RecoilRoot>
        </>
    );
}

export default MyApp;
