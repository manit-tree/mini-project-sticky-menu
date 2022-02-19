# sticky menu demo

This is my mini project to learn how to implement sticky menu on my website


# problem and solution

I would like my navigation menu to change look and feel when it is on sticky state. But currently, CSS specification still not provide psudo class when an element is in sticky state. That make a little bit harder because you need to implement some JavaScript code to detect that behaviour. The solution for this project is Intesction Observer. The trick for this to work is to set "top" of your sticky element you want to track with Intersection Observer to -1px to let Intersection Observer notified about the change. 

demo url: https://angry-shaw-a84683.netlify.app
