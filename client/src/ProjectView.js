import { BiArrowBack } from 'react-icons/bi'
import { AiOutlineZoomIn } from 'react-icons/ai'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import { PortfolioItems } from './PortfolioItems'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { useState } from 'react'
import Badge from 'react-bootstrap/Badge'

export const ProjectView = (props) => {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(0)
  const arrowStyle = {
    fontSize: 48,
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 150,
    margin: 20,
    color: '#CC0033'
  }
  return <div>
    <p onClick={() => {
      props.setOpenProject(0)
      navigate("/portfolio")
    }} style={{
      margin: 20,
      cursor: 'pointer',
      fontSize: 24,
      color: '#CC0033',
      width: 'fit-content'
    }}><BiArrowBack /> Go Back</p>
    {PortfolioItems.filter((proj) => proj.id === props.openProject).map((proj) => {
      let numImages = proj.images.length
      return <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={arrowStyle}>
          <MdOutlineArrowBackIos style={{ cursor: 'pointer' }} onClick={() => {
            if (activeIndex - 1 > -1) {
              setActiveIndex(activeIndex - 1)
            } else {
              setActiveIndex(numImages - 1)
            }
          }} />
        </div>
        <div>
          <p style={{
            color: '#b392ac',
            fontSize: 14
          }}>Click Image Zoom <AiOutlineZoomIn /></p>
          <Zoom>
            <Image src={proj.images[activeIndex]} style={{
              width: 600,
              border: '2px solid black',
              padding: 10,
              height: 300
            }}></Image>
          </Zoom>
          <div style={{
            fontSize: 24
          }}>
            <p style={{
              color: '#b392ac',
              fontSize: 14
            }}>{`${numImages} Image(s) Found`}</p>
            {proj.skills.map((skill, index) => {
              return <Badge bg="danger" key={index} style={{
                margin: 2
              }}>{skill}</Badge>
            })}
            <div style={{
              marginTop: 10,
              fontSize: 18
            }}>
              <p><strong>Category: </strong>{proj.category}</p>
              <p><strong>Summary: </strong>{proj.summary || 'N/A'}</p>
              <p><strong>Review: </strong>{proj.review || 'N/A'}</p>
            </div>
          </div>
        </div>
        <div style={arrowStyle}>
          <MdOutlineArrowForwardIos style={{ cursor: 'pointer' }} onClick={() => {
            if (activeIndex + 1 >= numImages) {
              setActiveIndex(0)
            } else {
              setActiveIndex(activeIndex + 1)
            }
          }} />
        </div>
      </div>
    })}
  </div>
}