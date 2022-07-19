import Button from 'react-bootstrap/Button'
import { HiDownload, HiChat } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

export const Homepage = () => {
  const navigate = useNavigate()
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
        }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`Self-Motivated developer familiar with wide range of programming utilities and languages.
        Knowledgeable of backend and frontend developement requirements. Well-organized, customer-focused,
        and a collaborative team member with excellent technical abilities offering 4+ years of experience.`}</p>
        <div style={{
          display: 'flex'
        }}>
          <Button variant='outline-danger'>Resume&nbsp;&nbsp;<HiDownload /></Button>&nbsp;&nbsp;
          <Button variant='danger' onClick={() => navigate("/contact")}>Contact Me&nbsp;&nbsp;<HiChat /></Button>
        </div>
      </div>
    </div>
  </div>
}