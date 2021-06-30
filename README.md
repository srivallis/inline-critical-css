# inline-critical-css
Improve website performance by conditionally inlining critical css.

What is Critical Css ?

Critical css is the css for the above-the-fold content of a page. This script identifies and extracts the critical css of a webpage. 

Steps:
1. Clone the repo using the https url.
2. `cd <directory-name>` to navigate to the local directory.
3. Run the command, `app.js`. This will extract the critical css for the sample index.html file which is present in the project and inlines it to the html.

How to use this script for a website with many urls ?

Using Promises, we can run as many as urls we want. In app.js, replace the code with the below snippet:



