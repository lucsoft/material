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
.spectrum--lightest .spectrum-TreeView-itemLink {
  color: rgb(80, 80, 80);
}
.spectrum--lightest .spectrum-TreeView-itemLink:hover,
  .spectrum--lightest .spectrum-TreeView-itemLink.is-selected {
    color: rgb(50, 50, 50);
  }
.spectrum--lightest .spectrum-TreeView-itemLink:hover::before, .spectrum--lightest .spectrum-TreeView-itemLink.is-selected::before {
      background-color: rgba(50,50,50,0.04);
    }
.spectrum--lightest .spectrum-TreeView-itemLink.focus-ring {
    color: rgb(50, 50, 50);
  }
.spectrum--lightest .spectrum-TreeView-itemLink.focus-ring::before {
      background-color: rgba(50,50,50,0.04);

      /* we cannot achieve rounded corners with outline so we use box-shadow instead */
      box-shadow: 0px 0px 0px 2px rgb(55, 142, 240) inset;
    }
.spectrum--lightest .spectrum-TreeView-itemLink.is-drop-target::before {
      background-color: rgba(38,128,235,0.1);
      box-shadow: 0px 0px 0px 2px rgb(55, 142, 240) inset;
    }`;
    }
}