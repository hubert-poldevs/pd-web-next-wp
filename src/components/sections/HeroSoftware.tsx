import { FC } from "react";
import { Box, Container, Typography } from "@mui/material";

const styles = {
  container: {
    backgroundImage: `url(/bg.jpg)`,
  },
};

interface HeroSoftwareProps {
  text: string;
}

const HeroSoftware: FC<HeroSoftwareProps> = ({ text }: any) => {
  return (
    <section>
      <Container style={styles.container} sx={{ minHeight: "100vh" }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <Typography variant="h3" color="white">
            {text}
          </Typography>
        </Box>
      </Container>
    </section>
  );
};

export default HeroSoftware;
