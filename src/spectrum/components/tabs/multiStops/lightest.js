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
.spectrum--lightest {
/* topdoc
{{ tabs/tabs.yml }}
*/
}
/* topdoc
{{ tabs/tabs-vertical.yml }}
*/
.spectrum--lightest .spectrum-Tabs {
  border-bottom-color: rgb(244, 244, 244);
}
/* topdoc
{{ tabs/tabs-quiet-compact.yml }}
*/
.spectrum--lightest .spectrum-Tabs-selectionIndicator {
  background-color: rgb(50, 50, 50);
}
/* topdoc
{{ tabs/tabs-compact.yml }}
*/
.spectrum--lightest .spectrum-Tabs-item {
  color: rgb(116, 116, 116);
}
.spectrum--lightest .spectrum-Tabs-item:hover {
    color: rgb(50, 50, 50);
  }
.spectrum--lightest .spectrum-Tabs-item.is-selected {
    color: rgb(50, 50, 50);
  }
.spectrum--lightest .spectrum-Tabs-item.focus-ring::before {
      border-color: rgb(55, 142, 240);
    }
.spectrum--lightest .spectrum-Tabs-item.is-disabled {
    color: rgb(188, 188, 188);
  }
/* topdoc
{{ tabs/tabs-quiet.yml }}
*/
.spectrum--lightest .spectrum-Tabs--quiet {
  border-bottom-color: rgba(0, 0, 0, 0);
}
.spectrum--lightest .spectrum-Tabs--quiet .spectrum-Tabs-selectionIndicator {
    background-color: rgb(50, 50, 50);
  }`;
    }
}