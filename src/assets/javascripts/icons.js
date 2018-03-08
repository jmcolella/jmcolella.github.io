import siteData from '../../data/site'

export default () => {
  const contactIcons = siteData.contact;

  contactIcons.forEach(({ type }) => {
    fetch(`https://s3.amazonaws.com/jc-website-assets/${type}.svg`)
      .then((data) => data.text()).then((text) => {
        $(`.icon-${type}`).append(text);
      });
  });
};


