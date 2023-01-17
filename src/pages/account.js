import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { AccountProfile } from '../components/account/account-profile';
import { AccountProfileDetails } from '../components/account/account-profile-details';
import { DashboardLayout } from '../components/dashboard-layout';

const Page = () => {
  return(
  <>
    <Head>
      <title>
        Perfil | BOX San Felipe
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
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Perfil
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid            
            item
            lg={4}
            md={6}
            xs={12}
          >
            <AccountProfile />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <AccountProfileDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);
}

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
