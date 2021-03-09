(async function () {
  const extractCriticalCss = require('./extractCriticalCss');
  await extractCriticalCss().then((res) => {
    console.log('Critical Css for the page has been extracted successfully !', res);
  }).catch((err) => {
    if (err) console.log('An error occured while trying to extract critical css !', err);
  });
})();