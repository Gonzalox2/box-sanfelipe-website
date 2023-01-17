import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { listNews } from '../__mocks__/news';
import { NewsListToolbar } from '../components/news/news-list-toolbar';
import { NewsCard } from '../components/news/news-card';
import { DashboardLayout } from '../components/dashboard-layout';

const Page = () => (
  <>
    <Head>
      <title>
        Informacion | BOX San Felipe
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
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {listNews.map((news) => (
              <Grid
                item
                key={news.id}
                lg={4}
                md={6}
                xs={12}
              >
                <NewsCard news={news} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
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
