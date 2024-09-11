import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PersonIcon from "@mui/icons-material/Person";
import LaptopIcon from "@mui/icons-material/Laptop";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "100px", height: "41px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      Made with ❤️ by Saquib Khan
    </Typography>
    <a href="https://www.linkedin.com/in/saquib-khan-sa890098/">
      <LinkedInIcon
        style={{ color: "#FF2625", fontSize: 40, marginRight: "20px" }}
      />
    </a>
    <a href="https://github.com/SAQUIB-KHAN90">
      <GitHubIcon
        style={{ color: "#FF2625", fontSize: 40, marginRight: "20px" }}
      />
    </a>
    <a href="https://personal-portfolio1-gold.vercel.app/">
      <PersonIcon
        style={{ color: "#FF2625", fontSize: 40, marginRight: "20px" }}
      />
    </a>
    <a href="https://storage.googleapis.com/resume-hosting/66d9ad40482cc.pdf">
      <LaptopIcon
        style={{ color: "#FF2625", fontSize: 40, marginRight: "20px" }}
      />
    </a>
  </Box>
);

export default Footer;
