# inline-critical-css
Improve website performance by conditionally inlining critical css.

**What is Critical Css ?**

Critical css is the css for the above-the-fold content of a page. This script identifies and extracts the critical css of a webpage. 

**Steps:**

1. Clone the repo using the https url.
2. `cd <directory-name>` to navigate to the local directory.
3. Run the command, `app.js`. This will extract the critical css for the sample index.html file which is present in the project and inlines it to the html.

**How this works ?**

The npm package, critical, under the hood uses puppeteer to launch the page in a headless chromium and identifies the critical css.

To debug, in **extractCriticalCss.js** file, pass the headless option in puppeteer to false and set the slowMotion prop to 200 or 500.

```javascript
const opts = {
  headless: false, //change it to false for debugging
  slowMo: 500, //increase the tmeout, say 200, while debugging, to visually see how it happens
  timeout: 0
};
```

When the headless option is set to false, we can visually see how puppeteer works by launching the page with given screen resolutions.

<img width="1096" alt="Screenshot 2021-07-04 at 12 30 25 PM" src="https://user-images.githubusercontent.com/79823203/124376266-c2ced380-dcc3-11eb-9e2b-983220b5ba8b.png">


Using this script, the critical css can be either inlined or extracted to a separate file. 

**To extract the css to a file,**

```javascript
target: { // use this property, if you need the critical css in a separate file
  css: 'critical.css'
}
```

**To inline the critical css,**

```javascript
inline: true // use this prop to directly inline the critical css to the html
```

**How to use this script for multiple pages ?**

Using Promises, we can run as many as urls we want. In app.js, replace the code with the below snippet:

```javascript
(async function () {
  const extractCriticalCss = require('./extractCriticalCss');
  await Promise.all([
    extractCriticalCss('https://www.google.com'),
    extractCriticalCss('https://www.abc.com'),
    extractCriticalCss('https://www.bcd.com'),
    extractCriticalCss('https://www.cfgd.com'),
    extractCriticalCss('https://www.cndchd.com')
  ]).then((res) => {
    console.log('Critical Css for the pages has been extracted successfully !', res);
  }).catch((err) => {
    if (err) console.log('An error occured while trying to extract critical css !', err);
  });
 })();
```


