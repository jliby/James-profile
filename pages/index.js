import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Currently Interning at CircleCI
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            James Luberisse
          </Heading>
          <p>Computer Science @ University of Florida</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/profile.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          𝗛𝗶, 𝗜’𝗺 𝗝𝗮𝗺𝗲𝘀 𝗟𝘂𝗯𝗲𝗿𝗶𝘀𝘀𝗲 𝗮𝗻𝗱 𝗜’𝗺 𝗮 “𝗡𝗼𝗿𝗱”! 𝗪𝗵𝗮𝘁 𝗶𝘀 𝗮 “𝗡𝗼𝗿𝗱” 𝘆𝗼𝘂 𝗺𝗮𝘆 𝗮𝘀𝗸, 𝘄𝗲𝗹𝗹 𝗶𝘁’𝘀 𝗺𝘆 𝗻𝗶𝗰𝗵𝗲 𝘄𝗮𝘆 𝗼𝗳 𝘀𝗮𝘆𝗶𝗻𝗴 𝘁𝗵𝗮𝘁 𝗜’𝗺 𝗮𝗻 𝗼𝗿𝗱𝗶𝗻𝗮𝗿𝘆 𝗻𝗲𝗿𝗱 𝗼𝗿 𝗷𝘂𝘀𝘁 𝗮 𝗿𝗲𝗴𝘂𝗹𝗮𝗿 𝗱𝘂𝗱𝗲 𝘄𝗵𝗼 𝗹𝗼𝘃𝗲𝘀 𝘀𝗰𝗶𝗲𝗻𝗰𝗲. 𝗦𝗼𝗺𝗲 𝗵𝗼𝗯𝗯𝗶𝗲𝘀 𝗼𝗳 𝗺𝗶𝗻𝗲 𝗮𝗿𝗲 𝗹𝗲𝗮𝗿𝗻𝗶𝗻𝗴 𝗮𝗯𝗼𝘂𝘁 𝗰𝗼𝗺𝗽𝘂𝘁𝗲𝗿 𝘀𝗰𝗶𝗲𝗻𝗰𝗲 𝘁𝗼𝗽𝗶𝗰𝘀 𝘀𝘂𝗰𝗵 𝗮𝘀 𝘀𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗲𝗻𝗴𝗶𝗻𝗲𝗲𝗿𝗶𝗻𝗴, 𝗯𝗹𝗼𝗰𝗸𝗰𝗵𝗮𝗶𝗻, 𝗮𝗻𝗱 𝗔𝗜, 𝗮𝗹𝗼𝗻𝗴 𝘄𝗶𝘁𝗵 𝗺𝗮𝘁𝗵 𝗮𝗻𝗱 𝗲𝗻𝗴𝗶𝗻𝗲𝗲𝗿𝗶𝗻𝗴 𝗮𝘀 𝗮 𝘄𝗵𝗼𝗹𝗲. 𝗜’𝗺 𝗰𝘂𝗿𝗿𝗲𝗻𝘁𝗹𝘆 𝗮 𝗦𝗲𝗻𝗶𝗼𝗿 𝗮𝘁 𝗨𝗙 𝘀𝘁𝘂𝗱𝘆𝗶𝗻𝗴 𝗖𝗼𝗺𝗽𝘂𝘁𝗲𝗿 𝗦𝗰𝗶𝗲𝗻𝗰𝗲. 

        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Projects
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
       
        <BioSection>
          <BioYear>2020</BioYear>
          NASA Scholar (NCAS)
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          ACM Tech Lead (UF's ACM Chapter)
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Research @ UF's MIL 
        </BioSection>
        
            <BioSection>
          <BioYear>2022</BioYear>
          Software Engineering Internship @ CircleCI 
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I 🧡
        </Heading>
        <Paragraph>
           <text style={{ color: "pink" }}>Anime</text>, <text style={{ color: "yellow" }}>Philosophy</text>,
          <text style={{ color: "orange" }}> Movies</text>,  <text style={{ color: "green" }}>Tech Politics</text>,  <text style={{ color: "blue" }}>Science</text>, <text style={{ color: "orange" }}> Neural Networks </text>
        </Paragraph>
      </Section>

      {/* <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Achievements
        </Heading>
        <li><section>Global rank 239 in Codechef November Lunchtime 2020</section></li>
        <li><section>Ranked 3rd in Fake-A-Thon, IIT Mandi an Intra-IIT Hackathon</section></li>
       
      </Section> */}

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/jliby" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @jliby
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/james-luberisse-51171b1b3/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @James Luberisse
              </Button>
            </Link>
          </ListItem>
          <ListItem>
       
              <Button
                variant="ghost"
                colorScheme="teal"
              >
            <a href = "mailto: jluberisse@ufl.edu">jluberisse@ufl.edu</a>
              </Button>
          </ListItem>
       
        </List>

        <Box align="center" my={4}>
          <NextLink href="https://docs.google.com/document/d/10ZrGPzxQ331Qp_GIPd7cr_lsmpbMt2RoWASt0k2tFj0/edit?usp=sharing" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            <a href="https://docs.google.com/document/d/10ZrGPzxQ331Qp_GIPd7cr_lsmpbMt2RoWASt0k2tFj0/edit?usp=sharing">Download Resume</a> 
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
