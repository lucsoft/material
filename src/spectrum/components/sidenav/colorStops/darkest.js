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
{{ sidenav/sidenav.yml }}
*/
/* topdoc
{{ sidenav/sidenav-multilevel.yml }}
*/
.spectrum-SideNav-item.is-selected > .spectrum-SideNav-itemLink {
      color: rgb(226, 226, 226);
      background-color: rgba(226,226,226,0.06);
    }
.spectrum-SideNav-item .is-active > .spectrum-SideNav-itemLink {
      background-color: rgba(226,226,226,0.06);
    }
/* Disable all children */
.spectrum-SideNav-item.is-disabled .spectrum-SideNav-itemLink {
      background-color: rgba(0, 0, 0, 0);
      color: rgb(73, 73, 73);

      cursor: default;
      pointer-events: none;
    }
.spectrum-SideNav-itemLink {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(180, 180, 180);
}
.spectrum-SideNav-itemLink:hover {
    background-color: rgba(226,226,226,0.06);
    color: rgb(226, 226, 226);
  }
.spectrum-SideNav-itemLink:active {
    background-color: rgba(226,226,226,0.06);
  }
.spectrum-SideNav-itemLink.focus-ring {
    background-color: rgba(226,226,226,0.06);
    color: rgb(226, 226, 226);
  }
.spectrum-SideNav-itemLink.focus-ring::before {
      border-color: rgb(20, 115, 230);
    }
.spectrum-SideNav-heading {
  color: rgb(135, 135, 135);
}`;
    }
}