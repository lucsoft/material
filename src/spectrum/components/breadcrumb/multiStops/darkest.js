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
.spectrum--darkest {

/* topdoc
{{ breadcrumb/breadcrumb.yml }}
*/

/* topdoc
{{ breadcrumb/breadcrumb-title.yml }}
*/
}
.spectrum--darkest .spectrum-Breadcrumbs-item {
  color: rgb(135, 135, 135);
}
.spectrum--darkest .spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemSeparator {
    color: rgb(73, 73, 73);
  }
.spectrum--darkest .spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemLink {
    color: inherit;
    text-decoration: none;
  }
.spectrum--darkest .spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemLink:hover {
      color: rgb(226, 226, 226);
    }
.spectrum--darkest .spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemLink.focus-ring {
      color: rgb(55, 142, 240);
      outline: 0;
      border-bottom: 2px solid rgb(55, 142, 240);
    }
.spectrum--darkest .spectrum-Breadcrumbs-item .spectrum-Breadcrumbs-itemLink:active {
      color: rgb(226, 226, 226);
      border-bottom: 0;
    }
.spectrum--darkest .spectrum-Breadcrumbs-item.is-selected,
  .spectrum--darkest .spectrum-Breadcrumbs-item:last-of-type {
    color: rgb(226, 226, 226);
  }
.spectrum--darkest .spectrum-Breadcrumbs-item.is-selected ~ .spectrum-Breadcrumb:last-of-type {
        color: rgb(135, 135, 135);
      }
.spectrum--darkest .spectrum-Breadcrumbs-item.is-selected .spectrum-Breadcrumbs-itemLink.focus-ring {
        color: rgb(226, 226, 226);
        border-bottom: 0;
      }`;
    }
}