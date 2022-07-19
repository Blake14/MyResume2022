import Button from 'react-bootstrap/Button'
import { HiDownload } from 'react-icons/hi'


export const Homepage = () => {
  return <div>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: 200
    }}>
      <div>
        <p style={{
          fontSize: 22,
          flexWrap: 'wrap',
          width: 800
        }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`Self-Motivated developer familiar with wide range of programming utilities and languages. Knowledgeable of backend and fronend developement requirements. Well-organized, customer-focused, and a collaborative team member with excellent technical abilities offering 4+ years of experience.`}</p>
        <Button variant='outline-danger'>Resume&nbsp;&nbsp;<HiDownload /></Button>
      </div>
    </div>
  </div>
}