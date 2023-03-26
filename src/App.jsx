import React from 'react'
import './App.css'
import Card from './Component/Card'
import Heading from './Component/Heading'
const App = () => {
  return (
<>
<Heading/>
<div className="main">
<Card src="https://pps.whatsapp.net/v/t61.24694-24/336302054_896658258115098_1382291560048713120_n.jpg?ccb=11-4&oh=01_AdRWxD4FpPTujdHF5Ne5_oxcyrpH5FjBDdp2gKNQslspFA&oe=642C5165" title="Hamza EJaz" post="Software Engineer"/>
<Card 
src="https://picsum.photos/seed/picsum/200/200"
title="Mehmoona"
post="Software Engineer"

/>
<Card src="https://picsum.photos/seed/picsum/200/200"
title="Hiba Nawaz"
post="Software Engineer"/>
<Card src="https://picsum.photos/seed/picsum/200/200"
title="Sidra"
post="Software Engineer"/>
</div>

</>


    )
}

export default App