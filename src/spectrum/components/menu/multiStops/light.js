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
.spectrum--light .spectrum-Menu {
  background-color: rgba(0, 0, 0, 0);
}
/* topdoc
{{ menu/menu-default.yml }}
*/
.spectrum--light .spectrum-Menu-item {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(75, 75, 75);
}
.spectrum--light .spectrum-Menu-item.focus-ring,
  .spectrum--light .spectrum-Menu-item.is-focused {
    background-color: rgba(44,44,44,0.04);
    color: rgb(75, 75, 75);
    border-left-color: rgb(38, 128, 235);
  }
.spectrum--light .spectrum-Menu-item:hover,
  .spectrum--light .spectrum-Menu-item:focus,
  .spectrum--light .spectrum-Menu-item.is-open {
    background-color: rgba(44,44,44,0.04);
    color: rgb(75, 75, 75);
  }
.spectrum--light .spectrum-Menu-item.is-selected {
    color: rgb(13, 102, 208);
  }
.spectrum--light .spectrum-Menu-item.is-selected .spectrum-Menu-checkmark {
      color: rgb(20, 115, 230);
    }
.spectrum--light .spectrum-Menu-item .is-active,
  .spectrum--light .spectrum-Menu-item:active {
    background-color: rgba(44,44,44,0.04);
  }
.spectrum--light .spectrum-Menu-item.is-disabled {
    background-color: rgba(0, 0, 0, 0);
    background-image: none;
    color: rgb(179, 179, 179);
    cursor: default;
  }
.spectrum--light .spectrum-Menu-sectionHeading {
  color: rgb(110, 110, 110);
}
.spectrum--light .spectrum-Menu-divider {
  background-color: rgb(245, 245, 245);
}`;
    }
}