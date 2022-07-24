import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Projects = () => (
  <Layout title="Canteen Management System">
    <Container>
      <Title>
      Gator Carpool <Badge>2021</Badge>
      </Title>
      <P>
      A carpooling app, allows University of Florida students to carpool with each other. After chatting, riders can request rides from drivers, and drivers can accept them.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/Gator-Car-Pool/Car-Pool">
          Gator Carpool<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>ios</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>SwiftUI, Firebase, Apple MapKit</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/images/works/gator-carpool-1.png" alt="sign-in" />
      <WorkImage src="/images/works/gator-carpool-2.png" alt="carpool" />
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../../components/chakra'
