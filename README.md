# OmniOne Website v2

Redesigned static HTML/CSS site for [omnione.world](https://www.omnione.world)

## Pages

| File | Page |
|------|------|
| `index.html` | Home |
| `about.html` | About |
| `evidence.html` | Evidence & Impact (new) |
| `get-involved.html` | Get Involved |
| `services.html` | Services |
| `faq.html` | FAQ Videos |
| `contact.html` | Contact |

## Shared Files

- `style.css` — all styles (green/teal/earth palette)
- `nav.js` — injects nav and footer on every page automatically

## To Do Before Going Live

### 1. HubSpot Form (services.html)
Replace the placeholder div in `services.html` with your HubSpot embed code.
Look for the comment block: `HUBSPOT FORM PLACEHOLDER`

### 2. FAQ Videos (faq.html)
Replace placeholder divs with YouTube or Vimeo iframe embeds.
Look for the comment block: `VIDEO EMBED INSTRUCTIONS`
To add more videos, duplicate a `<div class="video-slot">` block.

### 3. Images
Hero background and section images are currently CSS gradients.
To add a real hero image, add to style.css in the `.hero-bg` rule:
```css
.hero-bg {
  background-image: url('your-image.jpg');
  background-size: cover;
  background-position: center;
  /* keep existing gradient on top */
}
```

## Deploying to GitHub + Netlify

1. Create repo at github.com/greenearthvision/omnione-site
2. Push all files
3. In Netlify: New Site → Import from GitHub → select repo → deploy
4. Point omnione.world domain to Netlify

## Adding Decap CMS (for visual editing)

After deploying to Netlify:
1. Enable Netlify Identity in your Netlify dashboard
2. Add `/admin/` folder with `index.html` and `config.yml`
3. Invite yourself as a user
4. Access editor at omnione.world/admin

(Claude can build the admin folder for you when ready)
