<div align="center">
  <h1>Text Animation</h1>
  <p>
    This is a simple text animation program. When you hover on the text it will be animated.
  </p>
  <p>Author: <a href="https://github.com/IstiyakRiyad" target="_blank">Md. Istiyak Hossain</a> </p>
</div>


## Build Process:

``` bash
# Download repository:
git clone https://github.com/IstiyakRiyad/Text-Animation.git

# Go to parent directory:
cd Text-Animation

# Install dependencies:
npm i

# Webpack dev server with hot reload at http://localhost:8080/
npm start

# Output will be at build/ folder(This is for Production)
npm run build

# Output will be at build/ folder(This is for Development)
npm run build-dev
```
## Project Structure:

* `src/template.html` - main HTML file(Make this HTML file without linking JavaScript and CSS)
* `src/styles` - put custom CSS styles here. Don't forget to import them in `main.js`
* `src/scripts` - put custom app scripts here
* `src/scripts/main.js` - main javaScript file where you include/import all required libs
* `src/assets/image` - put images here. Don't forget to use correct path
* `src/assets/fonts` - put fonts here. Don't forget to use correct path

## Netlify Link
<a href="https://thetextanimationprogram.netlify.app/"> Text Animation <a>
