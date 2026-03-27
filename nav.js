(function () {
  const p = window.location.pathname.split('/').pop() || 'index.html';
  const a = (page) => p === page ? 'class="active"' : '';

  document.body.insertAdjacentHTML('afterbegin', `
  <nav>
    <a class="nav-logo" href="index.html">Omni<span>One</span></a>
    <ul class="nav-links">
      <li><a href="index.html" ${a('index.html')}>Home</a></li>
      <li><a href="about.html" ${a('about.html')}>About</a></li>
      <li><a href="evidence.html" ${a('evidence.html')}>Evidence</a></li>
      <li><a href="get-involved.html" ${a('get-involved.html')}>Get Involved</a></li>
      <li><a href="services.html" ${a('services.html')}>Services</a></li>
      <li><a href="faq.html" ${a('faq.html')}>FAQ Videos</a></li>
    </ul>
    <a class="nav-cta" href="https://opencollective.com/omnione" target="_blank" rel="noopener">Donate</a>
  </nav>`);

  document.body.insertAdjacentHTML('beforeend', `
  <footer>
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-brand">
          <h3>OmniOne</h3>
          <p>The world's first Omni-Beneficial Societal Blueprint — building the infrastructure for a future worth living in.</p>
        </div>
        <div class="footer-col">
          <h4>Navigate</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="evidence.html">Evidence &amp; Impact</a></li>
            <li><a href="get-involved.html">Get Involved</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="faq.html">FAQ Videos</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Ecosystem</h4>
          <ul>
            <li><a href="https://omni1eco.wixsite.com/nexus" target="_blank" rel="noopener">Nexus</a></li>
            <li><a href="https://www.greenearthvision.org" target="_blank" rel="noopener">Green Earth Vision</a></li>
            <li><a href="https://omnione.notion.site/What-is-an-ETHOS-7cf907ac069c4d62ade1ac028b5c13d3" target="_blank" rel="noopener">ETHOS</a></li>
            <li><a href="https://opencollective.com/omnione" target="_blank" rel="noopener">Donate</a></li>
            <li><a href="https://calendly.com/info-greenearthvision" target="_blank" rel="noopener">Schedule a Call</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-copy">&copy; 2023–2026 OmniOne. All rights reserved.</span>
        <span class="footer-nonprofit">A project of <a href="https://www.greenearthvision.org" target="_blank" rel="noopener">Green Earth Vision</a>, a 501(c)(3) nonprofit</span>
      </div>
    </div>
  </footer>`);
})();
