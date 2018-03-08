import './assets/stylesheets/index.scss';
import headerJs from './assets/javascripts/header';
import parallaxJs from './assets/javascripts/parallax';
import projectsJs from './assets/javascripts/projects';
import iconsJs from './assets/javascripts/icons';

import contentNode from './public';

document.body.insertBefore(contentNode, document.body.firstChild);

window.onload = () => {
  headerJs();
  parallaxJs();
  projectsJs();
  iconsJs();
};

