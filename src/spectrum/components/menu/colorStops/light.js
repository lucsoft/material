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
{{ menu/menu-default.yml }}
*/
/* topdoc
{{ menu/menu-nested.yml }}
*/
.spectrum-Menu {
  background-color: rgba(0, 0, 0, 0);
}
.spectrum-Menu-item {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(75, 75, 75);
}
.spectrum-Menu-item.focus-ring,
  .spectrum-Menu-item.is-focused {
    background-color: rgba(44,44,44,0.04);
    color: rgb(75, 75, 75);
    border-left-color: rgb(38, 128, 235);
  }
.spectrum-Menu-item:hover,
  .spectrum-Menu-item:focus,
  .spectrum-Menu-item.is-open {
    background-color: rgba(44,44,44,0.04);
    color: rgb(75, 75, 75);
  }
.spectrum-Menu-item.is-selected {
    color: rgb(13, 102, 208);
  }
.spectrum-Menu-item.is-selected .spectrum-Menu-checkmark {
      color: rgb(20, 115, 230);
    }
.spectrum-Menu-item .is-active,
  .spectrum-Menu-item:active {
    background-color: rgba(44,44,44,0.04);
  }
.spectrum-Menu-item.is-disabled {
    background-color: rgba(0, 0, 0, 0);
    background-image: none;
    color: rgb(179, 179, 179);
    cursor: default;
  }
.spectrum-Menu-sectionHeading {
  color: rgb(110, 110, 110);
}
.spectrum-Menu-divider {
  background-color: rgb(245, 245, 245);
}`;
    }
}