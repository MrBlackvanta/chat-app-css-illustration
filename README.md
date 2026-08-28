# Chat app CSS illustration

My solution to the [Chat app CSS illustration](https://www.frontendmentor.io/challenges/chat-app-css-illustration-O5auMkFqY)
challenge on Frontend Mentor.

![](./screenshot.webp)

- Live: https://chat-app-css-illustration.abdelrhman-ahmed8881.workers.dev
- Code: https://github.com/MrBlackvanta/chat-app-css-illustration

## Built with

- Next.js 16, App Router
- React 19 and TypeScript
- Tailwind CSS v4

## Notes

Where I didn't follow the design exactly:

- **Placeholder colour.** `#C5C9CC` on the white pill is about 2:1, which fails AA. I
  darkened it to `#6E777D` (4.6:1), keeping the hue.
- **White text on the purple gradient stays as designed.** Some of it is below AA, but
  fixing it means darkening the gradient far enough that the pale violet has to go too,
  and at that point it isn't the same design. Left exact and noted here instead.
- **The first message uses the mobile frame's wording.** The two frames disagree on the
  copy. The mobile one reads better and wraps identically.
- **The phone is centred on desktop.** The design has it about 50px right of centre,
  while the mobile frame is centred. Looks like drift rather than intent.
- **The walk options are static markup, not radios.** It's a picture of an app. Real
  inputs would add four tab stops that do nothing.
- **Header padding is 16px both sides** where the design is asymmetric by a pixel.
- **The heading wraps to two lines below about 354px.** The design only covers 375px,
  and its ink is wider than the gutters leave at 320px.

Everything else follows the file. The largest remaining difference is under a pixel,
from Rubik's real glyph widths versus the rounded ones Figma stores.

## Author

- [LinkedIn](https://www.linkedin.com/in/abdelrhman-vanta/)
- [UpWork](https://www.upwork.com/freelancers/mrblackvanta)
- [Frontend Mentor](https://www.frontendmentor.io/profile/MrBlackvanta)
