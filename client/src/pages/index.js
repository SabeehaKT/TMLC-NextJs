import Head from "next/head";
import { useState } from "react"; //React Hook for State

// MUI Imports

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MyAppBar from "@/Components/Common/MyAppBar";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/styles/mui/theme";
import { darktheme } from "@/styles/mui/theme";

export default function Home() {
  const [visible, setVisible] = useState(false); // Always call hooks at the top of the function.
  const movies = [
    {
      name: "Peaky Blinders",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn2.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQlXYTWdFgKPpuRtDYwLWWFmIk8RyoMj7wxNrB9wygwvOhkp3xx&psig=AOvVaw2BrU-DWpXIUY3EIm6mfSeE&ust=1765534023707000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjv3_SktZEDFQAAAAAdAAAAABAE%22%22",
      desc: "Peaky",
    },
    {
      name: "Stranger Things",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRyxAU5r7WU26MZ0nPj_DB_bXb8PSoMxKS8G3F2NFiUvHZr7Wya&psig=AOvVaw30m9iXcRutp00n7enHmPge&ust=1765534118132000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODfy6CltZEDFQAAAAAdAAAAABAE%22%22",
      desc: "Stranger Things",
    },
    {
      name: "Tron:Legacy",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRyxAU5r7WU26MZ0nPj_DB_bXb8PSoMxKS8G3F2NFiUvHZr7Wya&psig=AOvVaw30m9iXcRutp00n7enHmPge&ust=1765534118132000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODfy6CltZEDFQAAAAAdAAAAABAE%22%22",
      desc: "Tron: Legacy"
    },
   
  ];
  return (
    <>
    <ThemeProvider theme={theme}>
      <Head>
        <title>The Movie Lovers Club | Your Favourite Movie Articles!</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <MyAppBar/>
        <Button onClick={() => setVisible(!visible)}>Toggle</Button>
        
        <Box height="20px" />

        {visible ? (
          <Box height="200px" sx={{ background: "pink", width: "500px" }} />
        ) : (
          <></>
        )}
      </Box>
      </ThemeProvider>
    </>
  );
}
