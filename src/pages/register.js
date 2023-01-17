import Head from 'next/head';
import NextLink from 'next/link';
import Router from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      secondLastName: '',
      rut: '',
      phone: '',
      password: '',
      policy: false
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Debe ser un Correo Electrónico valido.')
        .max(255)
        .required(
          'Correo Electrónico es requerido.'),
      firstName: Yup
        .string()
        .max(255)
        .required('Nombre es requerido'),
      lastName: Yup
        .string()
        .max(255)
        .required('Apellido Paterno es requerido.'),
      secondLastName: Yup
        .string()
        .max(255)
        .required('Apellido Materno es requerido.'),
      rut: Yup
        .string()
        .max(255)
        .matches(/^\d{1,3}(?:\.\d{1,3}){2}-[\dkK]$/,'Formato de Rut invalido.')
        .required('Rut es requerido.'),
      phone: Yup
        .number()        
        .positive()
        .moreThan(900000000,'Telefono invalido')
        .lessThan(999999999,'Telefono invalido')
        .typeError('Telefono debe contener solo numeros.')
        .required('Telefono es requerido.'),
      password: Yup
        .string()
        .min(6,"Contraseña deber contener al menos 6 caracteres")
        .max(255)
        .required('Contraseña es requerida.'),
      policy: Yup
        .boolean()
        .oneOf(
          [true],
          'This field must be checked'
        )
    }),
    onSubmit: () => {
      // AQUI VA LA QUERY DE SUPABSE CON AUTH Y SIGNUP! (Sacar de proyecto anterior)
      Router
        .push('/')
        .catch(console.error);
    }
  });

  return (
    <>
      <Head>
        <title>
          Registro | BOX San Felipe
        </title>
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
                  Registrarse
                </Typography>
                <Typography
                  color="textPrimary"
                  gutterBottom
                  variant="body2"
                >
                  Ingresa tus datos para registrarte en BOX San Felipe
                </Typography>
              </Box>
              <TextField
                error={Boolean(formik.touched.firstName && formik.errors.firstName)}
                fullWidth
                helperText={formik.touched.firstName && formik.errors.firstName}
                label="Nombre"
                margin="normal"
                name="firstName"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.firstName}
                variant="outlined"
              />
              <TextField
                error={Boolean(formik.touched.lastName && formik.errors.lastName)}
                fullWidth
                helperText={formik.touched.lastName && formik.errors.lastName}
                label="Apellido Paterno"
                margin="normal"
                name="lastName"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.lastName}
                variant="outlined"
              />
              <TextField
                error={Boolean(formik.touched.secondLastName && formik.errors.secondLastName)}
                fullWidth
                helperText={formik.touched.secondLastName && formik.errors.secondLastName}
                label="Apellido Materno"
                margin="normal"
                name="secondLastName"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.secondLastName}
                variant="outlined"
              />
              <TextField
                error={Boolean(formik.touched.rut && formik.errors.rut)}
                fullWidth
                helperText={formik.touched.rut && formik.errors.rut}
                label="Rut"
                placeholder='12.345.678-9'
                margin="normal"
                name="rut"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.rut}
                variant="outlined"
              />
              <TextField
                error={Boolean(formik.touched.phone && formik.errors.phone)}
                fullWidth
                helperText={formik.touched.phone && formik.errors.phone}
                label="Telefono"
                placeholder='912345678'
                margin="normal"
                name="phone"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.phone}
                variant="outlined"
              />
              <TextField
                error={Boolean(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                label="Correo Electronico"
                placeholder='correo@ejemplo.com'
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
              {/* <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  ml: -1
                }}
              >
                <Checkbox
                  checked={formik.values.policy}
                  name="policy"
                  onChange={formik.handleChange}
                />
                <Typography
                  color="textSecondary"
                  variant="body2"
                >
                  I have read the
                  {' '}
                  <NextLink
                    href="#"
                    passHref
                  >
                    <Link
                      color="primary"
                      underline="always"
                      variant="subtitle2"
                    >
                      Terms and Conditions
                    </Link>
                  </NextLink>
                </Typography>
              </Box> 
              {Boolean(formik.touched.policy && formik.errors.policy) && (
                <FormHelperText error>
                  {formik.errors.policy}
                </FormHelperText>
              )} */}
              <Box sx={{ py: 2 }}>
                <Button
                  color="primary"
                  disabled={formik.isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Registrarse
                </Button>
              </Box>
              <Typography
                color="textPrimary"
                variant="body2"
              >
                ¿Tienes una cuenta?
                {' '}
                <NextLink
                  href="/login"
                  passHref
                >
                  <Link
                    variant="subtitle2"
                    underline="hover"
                  >
                    Iniciar Sesión
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

export default Register;
