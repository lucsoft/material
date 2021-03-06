export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
/* topdoc
{{ treeview/treeview.yml }}
*/
.spectrum-TreeView {
  display: block;
  list-style: none;
  position: relative;
  padding: 0;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  outline: none;
}
.spectrum-TreeView-item {
  /* Don't let child treeviews that are open spill out */
  overflow: hidden;
}
.spectrum-TreeView-item.is-open > .spectrum-TreeView-itemLink > .spectrum-TreeView-indicator {
      /* Rotate the chevron */
      transform: rotate(90deg);
    }
.spectrum-TreeView-item.is-open > .spectrum-TreeView {
      /* Open the treeview */
      height: auto;
      visibility: visible;
    }
.spectrum-TreeView-itemLink {
  display: block;
  box-sizing: border-box;
  cursor: pointer;

  padding: 12px 30px;

  text-decoration: none;

  /* Prevent weirdness that can cause the vertical bar to fall down */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.spectrum-TreeView-itemLink:focus {
    /* we cannot achieve rounded corners with outline so we use box-shadow (on skin.css) instead */
    outline: none;
  }
.spectrum-TreeView-itemLink .spectrum-Icon {
    vertical-align: top;
    margin-right: 10px;
  }
.spectrum-TreeView-itemLink::before {
    content: '';

    position: absolute;
    left: 2px;
    right: 0;
    z-index: -1; /* make sure we don't block clicks on chevron */

    /* Position correctly since top is not defined */
    margin-top: -8px;

    height: 45px;

    background-color: transparent;

    border-radius: 5px;
  }
.spectrum-TreeView-indicator {
  display: block;

  float: left;
  position: relative;

  left: 13px;
  top: -6px;
  margin-left: -42px;
  margin-bottom: -13px;

  padding: 13px;

  transition: transform ease 130ms;

  pointer-events: all !important;
}
/* Close nested treeviews by default */
.spectrum-TreeView .spectrum-TreeView {
  /* Don't be a highlight container stealer */
  position: static;

  padding-left: 35px;

  /* Be hidden */
  height: 0;
  visibility: hidden;
}
/* topdoc
{{ treeview/treeview-flat.yml }}
*/
.spectrum-TreeView-item--indent1 {
  padding-left: 35px;
}
.spectrum-TreeView-item--indent2 {
  padding-left: 70px;
}
.spectrum-TreeView-item--indent3 {
  padding-left: 105px;
}
.spectrum-TreeView-item--indent4 {
  padding-left: 140px;
}
.spectrum-TreeView-item--indent5 {
  padding-left: 175px;
}
.spectrum-TreeView-item--indent6 {
  padding-left: 210px;
}
.spectrum-TreeView-item--indent7 {
  padding-left: 245px;
}
.spectrum-TreeView-item--indent8 {
  padding-left: 280px;
}
.spectrum-TreeView-item--indent9 {
  padding-left: 315px;
}
.spectrum-TreeView-item--indent10 {
  padding-left: 350px;
}
/* topdoc
{{ treeview/treeview-icons.yml }}
*/`;
    }
}