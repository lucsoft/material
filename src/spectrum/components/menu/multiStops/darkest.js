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
.spectrum--darkest .spectrum-Menu {
  background-color: rgba(0, 0, 0, 0);
}
/* topdoc
{{ menu/menu-default.yml }}
*/
.spectrum--darkest .spectrum-Menu-item {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(180, 180, 180);
}
.spectrum--darkest .spectrum-Menu-item.focus-ring,
  .spectrum--darkest .spectrum-Menu-item.is-focused {
    background-color: rgba(226,226,226,0.04);
    color: rgb(180, 180, 180);
    border-left-color: rgb(20, 115, 230);
  }
.spectrum--darkest .spectrum-Menu-item:hover,
  .spectrum--darkest .spectrum-Menu-item:focus,
  .spectrum--darkest .spectrum-Menu-item.is-open {
    background-color: rgba(226,226,226,0.04);
    color: rgb(180, 180, 180);
  }
.spectrum--darkest .spectrum-Menu-item.is-selected {
    color: rgb(55, 142, 240);
  }
.spectrum--darkest .spectrum-Menu-item.is-selected .spectrum-Menu-checkmark {
      color: rgb(38, 128, 235);
    }
.spectrum--darkest .spectrum-Menu-item .is-active,
  .spectrum--darkest .spectrum-Menu-item:active {
    background-color: rgba(226,226,226,0.04);
  }
.spectrum--darkest .spectrum-Menu-item.is-disabled {
    background-color: rgba(0, 0, 0, 0);
    background-image: none;
    color: rgb(73, 73, 73);
    cursor: default;
  }
.spectrum--darkest .spectrum-Menu-sectionHeading {
  color: rgb(135, 135, 135);
}
.spectrum--darkest .spectrum-Menu-divider {
  background-color: rgb(30, 30, 30);
}`;
    }
}