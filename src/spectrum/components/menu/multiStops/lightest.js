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
.spectrum--lightest .spectrum-Menu {
  background-color: rgba(0, 0, 0, 0);
}
/* topdoc
{{ menu/menu-default.yml }}
*/
.spectrum--lightest .spectrum-Menu-item {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(80, 80, 80);
}
.spectrum--lightest .spectrum-Menu-item.focus-ring,
  .spectrum--lightest .spectrum-Menu-item.is-focused {
    background-color: rgba(50,50,50,0.04);
    color: rgb(80, 80, 80);
    border-left-color: rgb(55, 142, 240);
  }
.spectrum--lightest .spectrum-Menu-item:hover,
  .spectrum--lightest .spectrum-Menu-item:focus,
  .spectrum--lightest .spectrum-Menu-item.is-open {
    background-color: rgba(50,50,50,0.04);
    color: rgb(80, 80, 80);
  }
.spectrum--lightest .spectrum-Menu-item.is-selected {
    color: rgb(20, 115, 230);
  }
.spectrum--lightest .spectrum-Menu-item.is-selected .spectrum-Menu-checkmark {
      color: rgb(38, 128, 235);
    }
.spectrum--lightest .spectrum-Menu-item .is-active,
  .spectrum--lightest .spectrum-Menu-item:active {
    background-color: rgba(50,50,50,0.04);
  }
.spectrum--lightest .spectrum-Menu-item.is-disabled {
    background-color: rgba(0, 0, 0, 0);
    background-image: none;
    color: rgb(188, 188, 188);
    cursor: default;
  }
.spectrum--lightest .spectrum-Menu-sectionHeading {
  color: rgb(116, 116, 116);
}
.spectrum--lightest .spectrum-Menu-divider {
  background-color: rgb(255, 255, 255);
}`;
    }
}