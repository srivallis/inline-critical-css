/**
 * @description extracts the critical css for a page
 * @return {string} crtical css of the page
 */
module.exports = async function extractCriticalCss () {
    const puppeteer = require('puppeteer');
    const critical = require('critical');
    const opts = {
      headless: true,
      slowMo: 0,
      timeout: 0
    };
    return new Promise((resolve, reject) => {
      critical.generate({
        src: 'index.html',
        minify: true,
        inline: true,
        target: 'index.html',
        ignore: ['@font-face', /url\(/],
        // viewport for critical css rendering
        dimensions: [{
          // very large desktop
          height: 774,
          width: 1440
        }, {
          // desktop
          height: 774,
          width: 1024
        }, {
          // tablet
          height: 774,
          width: 768
        }, {
          // mobile
          height: 774,
          width: 320
        }],
        // passing configuration options for puppeteer
        penthouse: {
          puppeteer: {
            getBrowser: () => puppeteer.launch(opts)
          }
        }
      }).then((resp) => {
        resolve(resp);
      }).catch((err) => {
        reject(err);
      });
    });
  };
  