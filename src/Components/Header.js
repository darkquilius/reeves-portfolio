import React, {useState} from "react";
import HeaderNavMenu from "./HeaderNavMenu";
import HeaderPlate from "./HeaderPlate";
import {useTransition, animated} from "react-spring";

function Header(){
  const [showMenu, setShowMenu] = useState(false)

  const maskTransitions = useTransition(showMenu, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    })
    const menuTransitions = useTransition(showMenu, null, {
      from: { opacity: 0, transform: "translateX(100%)" },
      enter: { opacity: 1, transform: "translateX(0%)" },
      leave: { opacity: 0, transform: "translateX(100%)" },
      })
  

  return(
    <nav  className="sticky top-0">

    <HeaderPlate toggleMenu={()=> setShowMenu(!showMenu)}/>

    {maskTransitions.map(({ item, key, props }) =>
        item && 
        <animated.div 
        key={key} 
        style={props}
        className="fixed  bg-black-t-50 top-0 left-0 w-full h-full z-50"
        onClick={() => {setShowMenu(false)}}
        >
        
        </animated.div>
    )}

    {menuTransitions.map(({ item, key, props }) =>
        item && 
        <animated.div 
        key={key} 
        style={props}
        className="fixed bg-white top-0 right-0 w-2/5 z-50 shadow"
        >
          <HeaderNavMenu closeMenu={() => {setShowMenu(false)}} />
        </animated.div>
    )}

    </nav>
  )
}

export default Header