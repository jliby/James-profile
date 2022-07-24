import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbComs from '../public/images//models-of-the-mind.jpeg'
import weShouldAllBeFemenist from '../public/images//we-should-all-be-femenist.jpeg'
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
     <Section>
          <WorkGridItem id="index" title="We Should All Be Femenist" thumbnail={weShouldAllBeFemenist}>
            Understanding about Intersectional Feminism in the lens of a women of color.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Books
export { getServerSideProps } from '../components/chakra'
