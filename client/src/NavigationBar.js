import Image from 'react-bootstrap/Image'
import logo from './blakeLogo.png'
import { MenuItems } from "./MenuItems"
import { useNavigate } from 'react-router-dom'
import './App.css'
import react, { useState } from 'react'

export const NavigationBar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('Home')
  const navigate = useNavigate()
  const linkStyle = {
    fontSize: 24,
    cursor: 'pointer'
  }
  return <div style={{
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: 20
  }}>
    <Image src={logo} style={{ width: 400, height: 80 }} onClick={() => navigate("/")}></Image>
    {MenuItems.map((item, index) => {
      if (item.title === activeMenuItem) {
        return <div key={index} style={{
          width: 150
        }}>
          <div><p style={linkStyle} onClick={() => navigate(item.path)} >{item.title}</p></div>
          <div style={{ width: 75, backgroundColor: 'red', borderRadius: 35, height: 5, marginTop: 30 }}></div>
        </div>
      } else {
        return <div style={{
          width: 150
        }}>
          <div><p style={linkStyle} onClick={() => {
            navigate(item.path)
            setActiveMenuItem(item.title)
          }} className='menu-item'>{item.title}</p></div>
        </div>
      }
    })}
  </div>
}