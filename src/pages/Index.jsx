import { Box, Heading, Text, Grid, GridItem, Image, Container } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" centerContent>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} p={5}>
        <GridItem colSpan={3}><Heading as="h1" size="2xl" textAlign="center">Hamster Skötsel</Heading></GridItem>
        <Image src="/images/hamster-care.jpg" alt="Hamster Care" boxSize="300px" m="auto" />
        <GridItem colSpan={1}><Box>
          <Heading as="h2" size="xl">Föda</Heading>
          <Text>
            Se till att din hamster får en balanserad kost bestående av hamsterfoder, frukt och grönsaker.
            Undvik citrusfrukter och lök som kan vara skadliga för din hamster.
          </Text>
          <Image src="/images/hamster-food.jpg" alt="Hamster Food" boxSize="300px" m="auto" />
        </Box></GridItem>
        <GridItem colSpan={1}><Box>
          <Heading as="h2" size="xl">Boende</Heading>
          <Text>
            Hamstrar behöver ett rymligt bur med tillräckligt med plats för att springa och leka.
            Se till att inkludera ett löphjul och tunnlar för motion.
          </Text>
          <Image src="/images/hamster-housing.jpg" alt="Hamster Housing" boxSize="300px" m="auto" />
        </Box></GridItem>
        <GridItem colSpan={1}><Box>
          <Heading as="h2" size="xl">Hälsosorg</Heading>
          <Text>
            Regelbunden veterinärkontroll är viktig för att upptäcka och behandla eventuella hälsoproblem tidigt.
            Håll ett öga på tecken på sjukdom som slöhet eller förändringar i matvanor.
          </Text>
          <Image src="/images/hamster-health.jpg" alt="Hamster Health" boxSize="300px" m="auto" />
        </Box></GridItem>
      </Grid>
    </Container>
  );
};

export default Index;