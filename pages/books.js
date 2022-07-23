import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbComs from '../public/images//models-of-the-mind.jpeg'


const Books = () => (
  <Layout title="Books">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Books
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="index" title="Models of The Mind" thumbnail={thumbComs}>
            Cool book on the Math, Science and Philosophy of the brain.
          </WorkGridItem>
        </Section>
       
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Books
export { getServerSideProps } from '../components/chakra'
