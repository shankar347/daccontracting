import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import { About, Careers, Contact, Industries, JobDetail, Legal, NotFound, ProjectDetail, Projects, Services } from './pages/Pages'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetail />} />
          <Route path="industries" element={<Industries />} />
          <Route path="careers" element={<Careers />} />
          <Route path="careers/:id" element={<JobDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Legal type="privacy" />} />
          <Route path="terms" element={<Legal type="terms" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
