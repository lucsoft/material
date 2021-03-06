export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-QuickActions {
  visibility: hidden;

  opacity: 0;

  transition: transform 130ms ease-in-out,
              opacity 130ms ease-in-out,
              visibility 0ms linear 130ms;

  pointer-events: none;
}
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-QuickActions.is-open {
  visibility: visible;

  opacity: 1;

  transition-delay: 0ms;

  pointer-events: auto;
}
.spectrum--large .spectrum-QuickActions--left.is-open {
  transform: translateX(8px);
}
.spectrum--large .spectrum-QuickActions--right.is-open {
  transform: translateX(-8px);
}
.spectrum--large .spectrum-QuickActions {

  padding: 5px 5px;

  height: 50px;

  border-radius: 5px;
}
.spectrum--large .spectrum-QuickActions .spectrum-ActionButton + .spectrum-ActionButton {
    margin-left: 10px;
  }
.spectrum--large .spectrum-QuickActions--textOnly .spectrum-ActionButton + .spectrum-ActionButton {
    margin-left: 5px;
  }`;
    }
}