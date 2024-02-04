
onload = () => {
    const c = setTimeout(() => {
      document.getElementById('container').classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  