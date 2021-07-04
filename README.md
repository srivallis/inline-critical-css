# inline-critical-css
Improve website performance by conditionally inlining critical css.

_**What is Critical Css ?**_

Critical css is the css for the above-the-fold content of a page. This script identifies and extracts the critical css of a webpage. 

_**Steps:**_
1. Clone the repo using the https url.
2. `cd <directory-name>` to navigate to the local directory.
3. Run the command, `app.js`. This will extract the critical css for the sample index.html file which is present in the project and inlines it to the html.

_**How this works ?**_

The npm package, critical, under the hood uses puppeteer to launch the page in a headless chromium and identifies the critical css.
To debug, in extractCriticalCss.js file,
pass the headless option in puppeteer to false and set the slowMotion prop to 200 or 500.

<img width="1011" alt="Screenshot 2021-07-04 at 12 17 10 PM" src="https://user-images.githubusercontent.com/79823203/124375864-d5e0a400-dcc1-11eb-88a2-9e84d10c0634.png">

Using this script, the critical css can be either inlined or extracted to a separate file. 

<img width="857" alt="Screenshot 2021-07-04 at 12 21 11 PM" src="https://user-images.githubusercontent.com/79823203/124375975-5ef7db00-dcc2-11eb-8052-df7f8e4560d8.png">


Read the [Wiki](https://github.com/srivallis/inline-critical-css/wiki) page for more information.



