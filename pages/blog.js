import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'




const Blog = () => (
  <Layout title="Books">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Blog Post
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
     
        
       
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Blog
export { getServerSideProps } from '../components/chakra'
