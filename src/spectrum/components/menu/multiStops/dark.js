export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
/* Temporary skin variables that need to be moved into origins */
:root {
  /* Icon Button*/

  /* Button */

  /* Shell */

  /* haha remove this */

  /* Custom selection color for placeholders using global blue-500 at 30% opacity. Should be updated in Spectrum-DNA */
}
/* topdoc
{{ menu/menu-nested.yml }}
*/
.spectrum--dark .spectrum-Menu {
  background-color: rgba(0, 0, 0, 0);
}
/* topdoc
{{ menu/menu-default.yml }}
*/
.spectrum--dark .spectrum-Menu-item {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(205, 205, 205);
}
.spectrum--dark .spectrum-Menu-item.focus-ring,
  .spectrum--dark .spectrum-Menu-item.is-focused {
    background-color: rgba(255,255,255,0.04);
    color: rgb(205, 205, 205);
    border-left-color: rgb(38, 128, 235);
  }
.spectrum--dark .spectrum-Menu-item:hover,
  .spectrum--dark .spectrum-Menu-item:focus,
  .spectrum--dark .spectrum-Menu-item.is-open {
    background-color: rgba(255,255,255,0.04);
    color: rgb(205, 205, 205);
  }
.spectrum--dark .spectrum-Menu-item.is-selected {
    color: rgb(75, 156, 245);
  }
.spectrum--dark .spectrum-Menu-item.is-selected .spectrum-Menu-checkmark {
      color: rgb(55, 142, 240);
    }
.spectrum--dark .spectrum-Menu-item .is-active,
  .spectrum--dark .spectrum-Menu-item:active {
    background-color: rgba(255,255,255,0.04);
  }
.spectrum--dark .spectrum-Menu-item.is-disabled {
    background-color: rgba(0, 0, 0, 0);
    background-image: none;
    color: rgb(92, 92, 92);
    cursor: default;
  }
.spectrum--dark .spectrum-Menu-sectionHeading {
  color: rgb(157, 157, 157);
}
.spectrum--dark .spectrum-Menu-divider {
  background-color: rgb(50, 50, 50);
}`;
    }
}