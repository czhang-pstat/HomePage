exports.onRouteUpdate = ({location}) => {
    console.log('new pathname', location.pathname);
    if (window.MathJax !== undefined) {
      MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
    }
  };