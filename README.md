## Landing page 💻

### Decisions taken a long the way and why I chose to take them

#### CSS and styling

There where two main options for me regarding CSS: SASS or Styled components 💅 I have used SASS in previous projects and I really enjoyed it. The first time I used SASS after only styling with vanilla CSS I was amazed, it was like CSS on steroids. Then I had the great pleasure to try Styled components and I was even more amazed, since it was like SASS on steroids. Styled components and React together is a wonderful combination and I really enjoy working with both of them. Therefor I decided to go with Styled components.

#### The SVG files

I decided to turn all SVG files into components, I have done this in the past and I really enjoy working with SVG files as React components. Doing so generates clean code and passing props and adjusting color, size etc works great.

I decided however to keep the SVG-components in the assets folder, since yes they are React components but they are still images and keeping them there gave a better overview of the file structure in my opinon.

#### Packages I have used

I have used [react-scroll](https://www.npmjs.com/package/react-scroll). I wanted to give the same experience for all users and:

```
html {
scroll-behavior: smooth;
}

```

is not compatible with Safari, therefore I decided to add this package. It's a very straight forward implementation and my past experience with it has been great.

#### BASIC REQ

- [x] Navigation menu
- [x] Heading
- [x] Short lead
- [x] Body text
- [x] Form => - input for name, telephone number e-mail address, zip code and city.

#### EXTRA

- [x] A hero visual
- [x] A video

##### Credit

[Cloud image](https://unsplash.com/photos/3Eqc3Ph4oRg)
[Cloud video](https://www.pexels.com/video/time-lapse-of-cumulus-clouds-856171/)
