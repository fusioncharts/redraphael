// import Raphael from './index';

// export default Raphael

import Raphael from './raphael.core';
import extended from './raphael.core-extend';

import svg from './raphael.svg';
import vml from './raphael.vml';
import canvas from './raphael.canvas';

extended(Raphael);
svg(Raphael);
vml(Raphael);
canvas(Raphael);

export default Raphael

