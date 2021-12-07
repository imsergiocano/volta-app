import * as React from 'react';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import AppBar from '../../components/AppBar';
import Toolbar from '../../components/Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h4"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24, color: 'primary.main' }}
          >
            {'volta'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="Login/"
              sx={rightLink}
            >
              {'Sign In'}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="Signup/"
              sx={{ ...rightLink, color: 'text.main' }}
            >
              {'Sign Up'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;