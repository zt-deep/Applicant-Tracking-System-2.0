import React, { useMemo } from 'react';
import Grid from '@mui//material/Grid';
import Container from '@mui/material/Container';
import Header from '../partials/Header';

function AuthLayout({ component: Component, children }) {
  const memoizedChildren = useMemo(
    () => (children?.length ? [...children] : []),
    [children],
  );
  const MemoizedComponent = useMemo(() => Component, [Component]);
  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="flex-start"
      className="wh-vw-vh overflow-hidden mp-0"
    >
      <Header className="auth-header" children={memoizedChildren} />
      <Container className="container mp-0 overflow-hidden" disableGutters>
        <MemoizedComponent children={memoizedChildren} />
      </Container>
    </Grid>
  );
}
export default React.memo(AuthLayout);
