import data from '../data/index';
import index from './index.mustache';
import header from '../partials/header.mustache';
import hero from '../partials/hero.mustache';
import about from '../partials/about.mustache';
import projects from '../partials/projects.mustache';
import contact from '../partials/contact.mustache';

const contentNode = document.createElement('div');

contentNode.innerHTML = index.render(data, {
  header,
  hero,
  about,
  projects,
  contact,
});

export default contentNode;
