import sample from 'lodash/sample';

export default () => {
  const projects = Array.prototype.slice.apply($('.project'));

  const columns = [4, 6, 8];
  let totalCols = 0;
  let previousCol;

  const getNextCol = () => {
    const col = sample(columns);

    if (col !== previousCol) return col;

    return getNextCol();
  };

  projects.forEach((project, idx) => {
    let nextCol;
    const remainingCols = totalCols % 12;

    if (remainingCols === 0) {
      if (idx === projects.length - 1) {
        nextCol = 12;
      } else {
        nextCol = getNextCol();
      }
    } else {
      nextCol = 12 - remainingCols;
    }

    $(project).addClass(`column-d-${nextCol}`);

    if (nextCol > 6) {
      $($('.project-img')[idx]).addClass('show');
    }

    previousCol = nextCol;

    totalCols += nextCol;
  });
};

