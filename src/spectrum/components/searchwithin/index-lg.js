export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
/* topdoc
{{ searchwithin/searchwithin.yml }}
*/
:root {

  /* Force override */
}
.spectrum-SearchWithin {
  width: 250px;
  display: -ms-inline-flexbox;
  display: inline-flex;
  position: relative;
}
.spectrum-SearchWithin .spectrum-Dropdown {
    width: auto;
    min-width: 0;
  }
.spectrum-SearchWithin .spectrum-Dropdown-trigger {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
.spectrum-SearchWithin .spectrum-Dropdown-label {
    /* Override dropdown's min-width and be tiny */
    min-width: 0;
  }
.spectrum-SearchWithin .spectrum-Textfield {
    -ms-flex: 1;
        flex: 1;
    margin-left: -1px; /* hides left border */
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
.spectrum-SearchWithin .spectrum-Textfield:hover, .spectrum-SearchWithin .spectrum-Textfield:focus {
      position: relative; /* shows left border */
    }
.spectrum-SearchWithin .spectrum-ClearButton {
    position: absolute;
    top: 0;
    right: 0;
  }`;
    }
}