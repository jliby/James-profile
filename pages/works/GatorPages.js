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
  <Layout title="Gator Pages">
    <Container>
      <Title>
      Gator Pages <Badge>2021</Badge>
      </Title>
      <P>
This project's goal is to comprehend the grasp of how efficient large platform web search applications (Google.com, Yahoo.com, Bing.com) execute search with great speed. And also how important the design and implementaion of algorithms are. We display this by doing a BFS (Bredth Firsdt Search) and DFS (Depth First Search) to see how an algorithm can significantly affect the speed of a program.

      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/GatorPager/GatorPages">
          Gator Pages<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>windows/mac-os/linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, JavaScript, Python </span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/images/works/gatorpages.png" alt="pages" />
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../../components/chakra'
