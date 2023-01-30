import { Box, Grid, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";
import Room from "../components/Room";

export default function Home() {
  return (
    <Grid
      mt={10}
      px={{
        base: 10,
        lg: 40,
      }}
      columnGap={4}
      rowGap={8}
      templateColumns={{
        sm: "1fr",
        md: "1fr 1fr",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
        "2xl": "repeat(5, 1fr)",
      }}
    >
      <Box>
        <Skeleton rounded="2xl" height={"280px"} mb={7} />
        <HStack justifyContent={"space-between"}>
          <Skeleton rounded="lg" width="60%" height={5} mb={1} />
          <Skeleton rounded="lg" width="15%" height={5} />
        </HStack>
        <Skeleton rounded="lg" width="40%" height={5} mb={1} />
        <Skeleton rounded="lg" width="30%" height={5} mb={3} />
        <Skeleton rounded="lg" width="25%" height={5} />
      </Box>
      <Room />
    </Grid>
  );
}
