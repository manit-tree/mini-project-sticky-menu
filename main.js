import './style.scss';


window.onload = () => {
  // const init = () => {
      // const observer = new IntersectionObserver(([e]) => {console.log(e)}),{threshold: [1]}
      // observer.observe(document.querySelector("nav"));
  // )

  const init = () => {
    const observer = new IntersectionObserver(([e]) => {
      const sticky = !e.isIntersecting;
      const el = e.target;
      
      if (sticky) {
        el.classList.add('ux-sticky');
      } else {
        el.classList.remove('ux-sticky');
      }

    },{threshold: [1]})
    
    observer.observe(document.querySelector("nav"));
  }

  init();
}