import React from 'react'
import AugustusGloop from '../hog-imgs/augustus_gloop.jpg'
import BayOfPigs from '../hog-imgs/bay_of_pigs.jpg'
import Cherub from '../hog-imgs/cherub.jpg'
import Cherub2 from '../hog-imgs/cherub.png'
import GalaxyNote from '../hog-imgs/galaxy_note.jpg'
import LeggoMyEggo from '../hog-imgs/leggo_my_eggo.jpg'
import Mudblood from '../hog-imgs/mudblood.jpg'
import PiggySmalls from '../hog-imgs/piggy_smalls.jpg'
import Porkchop from '../hog-imgs/porkchop.jpg'
import Rainbowdash from '../hog-imgs/rainbowdash.jpg'
import Sobriety from '../hog-imgs/sobriety.jpg'
import TheProsciuttoConcern from '../hog-imgs/the_prosciutto_concern.jpg'
import Trouble from '../hog-imgs/trouble.jpg'
import TruffleShuffle from '../hog-imgs/truffleshuffle.jpg'

const imgMapper = {
  'Augustus Gloop': AugustusGloop,
  'Bay of Pigs': BayOfPigs,
  'Cherub': Cherub,
  'Cherub2': Cherub2,
  'Galaxy Note': GalaxyNote,
  'Leggo My Eggo': LeggoMyEggo,
  'Mudblood': Mudblood,
  'Piggy smalls': PiggySmalls,
  'Porkchop': Porkchop,
  'Rainbowdash': Rainbowdash,
  'Sobriety': Sobriety,
  'The Prosciutto Concern': TheProsciuttoConcern,
  'Trouble': Trouble,
  'TruffleShuffle': TruffleShuffle
}

function Pork(props) {
  console.log(props.hog)
  const { name, specialty, greased } = props.hog
  const {'highest medal achieved': medal} = props.hog
  const {'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': weight} = props.hog
  return (
    <div className="ui eight wide column">
      <h1>{name}</h1>
      <img src={imgMapper[name]} alt='' />
      <p>{medal}</p>
      <h5>{weight}</h5>
    </div>
  )
}

export default Pork
