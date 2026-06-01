import { courses, learningPaths, tips } from './data'
import HomePage from '../component/HomePage'

export default function Page() {
  return <HomePage courses={courses} learningPaths={learningPaths} tips={tips} />
}
