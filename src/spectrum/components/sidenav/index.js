export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
.spectrum-SideNav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 240px;
}
.spectrum-SideNav-item {
  list-style-type: none;

  margin: 4px 0;
}
.spectrum-SideNav-itemLink {
  position: relative;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-align: center;
      align-items: center;
  -ms-flex-pack: left;
      justify-content: left;
  box-sizing: border-box;

  width: 100%;
  min-height: 32px;

  padding: 5px 12px;

  border-radius: 4px;

  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;

  cursor: pointer;

  transition: background-color 130ms ease-out,
              color 130ms ease-out;
}
.spectrum-SideNav-itemLink:focus {
    outline: none;
  }
.spectrum-SideNav-itemLink.focus-ring::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    border: 2px solid transparent;
    border-radius: 4px;
  }
/* topdoc
{{ sidenav/sidenav-heading.yml }}
*/
.spectrum-SideNav-heading {
  height: 32px;
  line-height: 32px;

  margin: 16px 0 4px 0;
  padding: 0 12px;

  border-radius: 4px;

  font-size: 11px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0.06em;

  text-transform: uppercase;
}
.spectrum-SideNav--multiLevel .spectrum-SideNav-itemLink {
    font-weight: 700;
  }
.spectrum-SideNav--multiLevel .spectrum-SideNav {
    margin: 0;
    padding: 0;
  }
.spectrum-SideNav--multiLevel .spectrum-SideNav .spectrum-SideNav-itemLink {
      font-weight: 400;

      padding-left: 24px;
    }
.spectrum-SideNav--multiLevel .spectrum-SideNav .spectrum-SideNav .spectrum-SideNav-itemLink {
        padding-left: 36px;
      }`;
    }
}