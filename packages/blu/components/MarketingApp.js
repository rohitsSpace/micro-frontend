import { mount } from 'marketing/MarketingApp';
import { useRouter } from 'next/router';
import React, { useRef, useEffect } from 'react';
export default () => {
  const ref = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: router.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = router;
        if (pathname !== nextPathname) {
          router.push(nextPathname);
        }
      },
    });
    router.events.on('routeChangeStart', onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
