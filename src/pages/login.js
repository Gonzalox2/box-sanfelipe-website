import Head from 'next/head';
import NextLink from 'next/link';
import Router from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Facebook as FacebookIcon } from '../icons/facebook';
import { Google as GoogleIcon } from '../icons/google';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: 'correo@ejemplo.com',
      password: 'Contraseña123'
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Debe ser un Correo Electrónico valido.')
        .max(255)
        .required('Correo Electrónico es requerido.'),
      password: Yup
        .string()
        .max(255)
        .required('Contraseña es requerida.')
    }),
    onSubmit: () => {
      Router
        .push('/')
        .catch(console.error);
    }
  });

  return (
    <>
      <Head>
        <title>Login | BOX San Felipe</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%',
          backgroundImage: `url(${"https://raw.githubusercontent.com/Gonzalox2/boxsanfelipe-website/ceb2a996b6e78cbfb5a4cd87e6988a58f33aec4a/app/images/Box_Background.jpg"})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#CED4DA',
          opacity: 1          
        }}
      >  
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%',          
          backgroundColor: 'rgba(0,0,0,0.6)',
          opacity: 1
        }}
      >  
        <Container maxWidth="sm">          
          <NextLink
            href="/"
            passHref
          >
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Dashboard
            </Button>
          </NextLink>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Iniciar Sesión
              </Typography>
              <Typography
                color="textPrimary"
                gutterBottom
                variant="body2"
              >
                Iniciar Sesión en la plataforma de BOX San Felipe
              </Typography>
            </Box>
            {/* <Grid
              container
              spacing={3}
            >
              <Grid
                item
                xs={12}
                md={6}
              >
                <Button
                  color="info"
                  fullWidth
                  startIcon={<FacebookIcon />}
                  onClick={() => formik.handleSubmit()}
                  size="large"
                  variant="contained"
                >
                  Login with Facebook
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
              >
                <Button
                  color="error"
                  fullWidth
                  onClick={() => formik.handleSubmit()}
                  size="large"
                  startIcon={<GoogleIcon />}
                  variant="contained"
                >
                  Login with Google
                </Button>
              </Grid>
            </Grid>
            <Box
              sx={{
                pb: 1,
                pt: 3
              }}
            >
              <Typography
                align="center"
                color="textSecondary"
                variant="body1"
              >
                or login with email address
              </Typography>
            </Box> */}
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Correo Electrónico"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Contraseña"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Iniciar Sesión
              </Button>
            </Box>
            <Typography
              color="textPrimary"
              variant="body2"
            >
              ¿No tienes una cuenta?
              {' '}
              <NextLink
                href="/register"
              >
                <Link
                  to="/register"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: 'pointer'
                  }}
                >
                  Registrarse
                </Link>
              </NextLink>
            </Typography>
          </form>
        </Container>
        </Box>
      </Box>
    </>
  );
};

export default Login;
