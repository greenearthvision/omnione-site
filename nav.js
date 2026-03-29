(function () {
  const p = window.location.pathname.split('/').pop() || 'index.html';
  const a = (page) => p === page ? 'class="active"' : '';

  document.body.insertAdjacentHTML('afterbegin', `
  <nav>
    <a class="nav-logo" href="index.html">OmniOne</a>
    <ul class="nav-links">
      <li><a href="index.html" ${a('index.html')}>Home</a></li>
      <li><a href="about.html" ${a('about.html')}>About</a></li>
      <li><a href="evidence.html" ${a('evidence.html')}>Evidence</a></li>
      <li><a href="get-involved.html" ${a('get-involved.html')}>Get Involved</a></li>
      <li><a href="services.html" ${a('services.html')}>Services</a></li>
      <li><a href="faq.html" ${a('faq.html')}>FAQ Videos</a></li>
      <li><a href="contact.html" ${a('contact.html')}>Contact</a></li>
    </ul>
    <a class="nav-cta" href="https://opencollective.com/omnione" target="_blank" rel="noopener">Donate</a>
  </nav>`);
})();
