import React from 'react'
import AugustusGloop from '../hog-imgs/augustus_gloop.jpg'
import BayOfPigs from '../hog-imgs/bay_of_pigs.jpg'
import Cherub from '../hog-imgs/cherub.jpg'
import Cherub2 from '../hog-imgs/cherub.png'
import GalaxyNote from '../hog-imgs/galaxy_note.jpg'
import LeggoMyEggo from '../hog-imgs/leggo_my_eggo.jpg'
import Mudblood from '../hog-imgs/mudblood.jpg'
import PiggySmalls from '../hog-imgs/piggy_smalls.jpg'
import PorkChop from '../hog-imgs/porkchop.jpg'
import Rainbowdash from '../hog-imgs/rainbowdash.jpg'
import Sobriety from '../hog-imgs/sobriety.jpg'
import TheProsciuttoConcern from '../hog-imgs/the_prosciutto_concern.jpg'
import Trouble from '../hog-imgs/trouble.jpg'
import TruffleShuffle from '../hog-imgs/truffleshuffle.jpg'

cosnt imgMapper = {
  'AugustusGloop': AugustusGloop,
  'BayOfPigs': BayOfPigs,
  'Cherub': Cherub,
  'Cherub2': Cherub2,
  'GalaxyNote': GalaxyNote,
  'LeggoMyEggo': LeggoMyEggo,
  'Mudblood': Mudblood,
  'PiggySmalls': PiggySmalls,
  'PorkChop': PorkChop,
  'Rainbowdash': Rainbowdash,
  'Sobriety': Sobriety,
  'TheProsciuttoConcern', TheProsciuttoConcern,
  'Trouble': Trouble,
  'TruffleShuffle': TruffleShuffle
}

function Pork(props) {
  console.log(props.hog)
  const { name, specialty, greased } = props.hog
  return (
    <div className="ui eight wide column">
      <h1>{name}</h1>
    </div>
  )
}

export default Pork
