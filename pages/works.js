import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbComs from '../public/images/works/gator-carpool-2.png'
import gatorpages from '../public/images/works/gatorpages.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="GatorCarpool" title="Gator Carpool" thumbnail={thumbComs}>
      A carpooling app, allows University of Florida students to carpool with each other. After chatting, riders can request rides from drivers, and drivers can accept them.
          </WorkGridItem>
        </Section>

             <Section>
          <WorkGridItem id="GatorPages" title="Gator Pages" thumbnail={gatorpages}>
This project's goal is to comprehend the grasp of how efficient large platform web search applications (Google.com, Yahoo.com, Bing.com) execute search with great speed.          </WorkGridItem>
        </Section>
        {/* <Section>
          <WorkGridItem
            id="Adulting101"
            title="College Major Matcher"
            thumbnail={thumbadulting101}
          >
            A CRUD based Django webapp, with a Markdown to HTML Converter and an integrated AI chat bot.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fakeface"
            title="Gator Pages"
            thumbnail={thumbFakeFace}
          >
            A Machine Learning model using CNN to classify fake images generted using Generative Adversarial Networks (GANs).
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="handgesture" thumbnail={thumbHandGesture} title="NCAS Artemis Green">
          A machine learning Model that will Recognize Hand Gestures in real time using CNN and automated using Raspberry pi.
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
