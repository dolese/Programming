import { courses, learningPaths, resources, tips } from './data'
import HomePage from '../components/HomePage'

export default function Page() {
  return (
    <HomePage
      courses={courses}
      learningPaths={learningPaths}
      resources={resources}
      tips={tips}
    />
  )
}
