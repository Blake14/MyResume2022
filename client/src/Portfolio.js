import { PortfolioItems } from "./PortfolioItems"
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import react, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Portfolio = (props) => {
  const [activeSkill, setActiveSkill] = useState('ALL')
  const [activeCat, setActiveCat] = useState('ALL')
  const skillset = []
  const catset = []
  const navigate = useNavigate()

  PortfolioItems.map((proj) => {
    proj.skills.map((skill) => {
      if (skillset.filter((s) => s === skill).length === 0) {
        skillset.push(skill)
      }
    })
    if (catset.filter((c) => c === proj.category).length === 0) {
      catset.push(proj.category)
    }
    return <>
    </>
  })
  return <div>
    <div style={{
      display: 'flex',
      justifyContent: 'space-evenly',
      margin: 50
    }}>
      <div style={{
        display: 'flex',
        height: 45
      }}>
        <p style={{ fontSize: 24 }}>Skills: </p>&nbsp;&nbsp;
        <Form.Select style={{ width: 300 }} onChange={(e) => {
          setActiveSkill(e.target.value)
        }}>
          <option value={'ALL'}>-- ALL --</option>
          {skillset.sort((a, b) => a > b ? 1 : -1).map((skill, index) => {
            return <option value={skill} key={index} >{skill}</option>
          })}

        </Form.Select>
      </div>
      <div style={{
        display: 'flex',
        height: 45
      }}>
        <p style={{ fontSize: 24 }}>Category: </p>&nbsp;&nbsp;
        <Form.Select style={{ width: 300 }} onChange={(e) => {
          setActiveCat(e.target.value)
        }}>
          <option value={'ALL'}>-- ALL --</option>
          {catset.sort((a, b) => a > b ? 1 : -1).map((cat, index) => {
            return <option key={index} value={cat}>{cat}</option>
          })}

        </Form.Select>
      </div>
    </div>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      justifyContent: 'center'
    }}>
      {PortfolioItems.map((project) => {
        if ((project.skills.includes(activeSkill) || activeSkill === 'ALL') && (project.category === activeCat || activeCat === 'ALL')) {
          return <Card style={{ width: 400, margin: 20, cursor: 'pointer' }} key={project.id} onClick={() => {
            props.setOpenProject(project.id)
            navigate("/projectviewer")
          }}>
            <Card.Img variant="top" src={project.images[0]} style={{ border: '2px solid #CC0033', height: 200 }} />
            <Card.Body>
              <Card.Title>{project.name}</Card.Title>
              <Card.Text>
                <p style={{
                  display: 'flex'
                }}><strong>Skills:&nbsp;</strong>
                  {project.skills.map((skill, index) => {
                    if (index === project.skills.length - 1) {
                      return <p key={index}>{skill}</p>
                    } else {
                      return <p key={index}>{skill},&nbsp;</p>
                    }

                  })}
                </p>
                <p><strong>Category: </strong>{project.category}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        }
      })}
    </div>

  </div>
}