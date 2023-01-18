import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { UserListResults } from '../components/users/user-list-results';
import { UserListToolbar } from '../components/users/user-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { users } from '../__mocks__/users';

const Page = () => (
  <>
    <Head>
      <title>
        Usuarios | BOX San Felipe
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
        backgroundImage: `url(${"https://raw.githubusercontent.com/Gonzalox2/boxsanfelipe-website/ceb2a996b6e78cbfb5a4cd87e6988a58f33aec4a/app/images/Box_Background.jpg"})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#CED4DA',
        opacity: 1
      }}
    >
      <Container maxWidth={false}>
        <UserListToolbar />
        <Box sx={{ mt: 3 }}>
          <UserListResults users={users} />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
