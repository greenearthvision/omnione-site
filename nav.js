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

  document.body.insertAdjacentHTML('beforeend', `
  <footer>
    <div class="footer-inner">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:24px;margin-bottom:32px;">
        <div>
          <h3 style="font-family:'Playfair Display',serif;font-size:22px;font-style:italic;color:var(--teal-bright);font-weight:400;margin-bottom:8px;">OmniOne</h3>
          <p style="font-size:14px;color:var(--cream-dim);margin:0;max-width:360px;">The world's first Omni-Beneficial Societal Blueprint — building the infrastructure for a future worth living in.</p>
        </div>
        <div style="display:flex;gap:32px;flex-wrap:wrap;">
          <a href="about.html" style="font-family:'DM Sans',sans-serif;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:var(--cream-dim);text-decoration:none;">About</a>
          <a href="evidence.html" style="font-family:'DM Sans',sans-serif;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:var(--cream-dim);text-decoration:none;">Evidence</a>
          <a href="get-involved.html" style="font-family:'DM Sans',sans-serif;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:var(--cream-dim);text-decoration:none;">Get Involved</a>
          <a href="services.html" style="font-family:'DM Sans',sans-serif;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:var(--cream-dim);text-decoration:none;">Services</a>
          <a href="contact.html" style="font-family:'DM Sans',sans-serif;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:var(--cream-dim);text-decoration:none;">Contact</a>
          <a href="https://opencollective.com/omnione" target="_blank" rel="noopener" style="font-family:'DM Sans',sans-serif;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:var(--teal-light);text-decoration:none;">Donate</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-copy">&copy; 2023–2026 OmniOne. All rights reserved.</span>
        <span class="footer-nonprofit">A project of <a href="https://www.greenearthvision.org" target="_blank" rel="noopener">Green Earth Vision</a>, a 501(c)(3) nonprofit</span>
      </div>
    </div>
  </footer>`);
})();
