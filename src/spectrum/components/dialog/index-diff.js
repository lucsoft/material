export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-Dialog {
  visibility: hidden;

  opacity: 0;

  transition: transform 130ms ease-in-out,
              opacity 130ms ease-in-out,
              visibility 0ms linear 130ms;

  pointer-events: none;
}
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-Dialog.is-open {
  visibility: visible;

  opacity: 1;

  transition-delay: 0ms;

  pointer-events: auto;
}
.spectrum--large .spectrum-Dialog {
  transform: translateX(-50%) translateY(-50%) translateY(8px);
  max-height: 90%;
  max-width: 90%;
  min-width: 288px;

  padding: 24px;

  border-radius: 5px;
}
.spectrum--large .spectrum-Dialog--alert {
  width: 90%;
  max-width: 400px;
}
.spectrum--large .spectrum-Dialog-header {

  border-radius: 5px 5px 0 0;

  padding-bottom: 30px;
}
.spectrum--large .spectrum-Dialog-header::after {
    bottom: 16px;

    height: 2px;
  }
.spectrum--large .spectrum-Dialog-content {

  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
}
.spectrum--large .spectrum-Dialog-footer {
  border-radius: 0 0 5px 5px;
  margin-top: 40px;
}
.spectrum--large .spectrum-Dialog-title {

  font-size: 19px;
  font-weight: 700;
  line-height: 1.3;
}
.spectrum--large .spectrum-Dialog--fullscreen {
  left: 32px;
  top: 32px;
  right: 32px;
  bottom: 32px;

  transform: translate(0, 8px)
}
.spectrum--large .spectrum-Dialog--fullscreen,
.spectrum--large .spectrum-Dialog--fullscreenTakeover {

  padding-top: 14px;
}
.spectrum--large .spectrum-Dialog--fullscreen .spectrum-Dialog-title, .spectrum--large .spectrum-Dialog--fullscreenTakeover .spectrum-Dialog-title {
    font-size: 28px;
    font-weight: 100;
  }`;
    }
}