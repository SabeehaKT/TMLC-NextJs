import Head from "next/head";
import { useState, useEffect } from "react"; //React Hook for State
import axios from "axios";

// Material
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  ThemeProvider,
} from "@mui/material";
import { useTheme } from "@mui/material";

import MyAppBar from "@/Components/Common/MyAppBar";

import { lightTheme, darkTheme } from "@/styles/mui/theme";
import { CustomCard, MyCard } from "@/styles/mui/customComponents";

import { useSelector, useDispatch } from "react-redux";
import { selectTheme, getActiveTheme } from "@/redux/reducers/themeReducer";

export default function Home() {  
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme).activeTheme;

  const [movies, setMovies] = useState(null);

   useEffect(() => {
    dispatch(getActiveTheme()); // To get theme from Cookie
    fetchData();
  }, []);

  const theme = useTheme();

 const fetchData = async () => {
    try {
      const response = await axios.get("/api/v1/get/movies");
      console.log(response);
      console.log("HAHAHAHA")

      setMovies(response.data)

    } catch (error) {
      
    } finally {
      console.log("finally")
    }
  }

  // const movies = [
  //   {
  //     name: "Avengers",
  //     img: "https://wallpapercat.com/w/full/6/6/1/119145-1280x2120-mobile-hd-avengers-wallpaper-image.jpg",
  //     desc: "Directed By Joss Whedon",
  //   },
  //   {
  //     name: "Terminator",
  //     img: "https://townsquare.media/site/295/files/2019/10/Terminator-Orion.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89",
  //     desc: "Directed By James Cameron",
  //   },
  //   {
  //     name: "Inception",
  //     img: "https://images5.alphacoders.com/112/1122037.jpg",
  //     desc: "Directed By Chris Nolan",
  //   },
  //   {
  //     name: "Jurassic Park",
  //     img: "https://i.ytimg.com/vi/Rc_i5TKdmhs/maxresdefault.jpg",
  //     desc: "Directed By Steven Spielberg",
  //   },
  //   {
  //     name: "Superman",
  //     img: "https://i.redd.it/2h7vnm2sy4k91.jpg",
  //     desc: "Directed by James Gunn",
  //   },
  // ];

  return (
    <>
      <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
        <CssBaseline />
        <Head>
          <title>The Movie Lovers Club | Your Favourite Movie Articles!</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MyAppBar/>
        <Box height="25px" />
        <Box>
          <Container>
            <Grid container spacing={2} direction="row" justifyContent="center">
              {movies ? movies.response.map((movie) => (
                <Grid size={{xl:4,md:4,xs:12}} key={movie._id}>
                  <CustomCard name={movie.name} image={movie.image} description={movie.description} />
                </Grid>
              )) : <></>}
            </Grid>
            
          </Container>
          {/* <Button onClick={() => setVisible(!visible)}>Toggle</Button>

            <Box height="20px" />

            {visible ? (
              <Box height="200px" sx={{ background: "pink", width: "500px" }} />
            ) : (
              <></>
            )} */}
        </Box>
      </ThemeProvider>
    </>
  );
}