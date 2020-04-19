if (!!window.IntersectionObserver) {
  const cb = (entries, observer) => {
    entries.forEach((entry) => {
      const element = document.getElementById(entry.target.id);
      if (entry.isIntersecting) {
        element.classList.add('animated');
      } else {
        element.classList.remove('animated');
      }
    });
  };
  const options = {
    treshold: 1,
  };
  const observer = new IntersectionObserver(cb, options);

  const fields = document.querySelectorAll('.field');
  fields.forEach((item) => observer.observe(item));
}
