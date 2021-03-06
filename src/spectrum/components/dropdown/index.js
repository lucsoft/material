export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
/* topdoc
{{ dropdown/dropdown.yml }}
*/
.spectrum-Dropdown {
  position: relative;
  display: inline-block;

  /* Truncate if menu options make us too wide */
  max-width: 100%;
  width: 192px;
  min-width: 48px;
}
/* Hack to enable select-powered Dropdowns */
.spectrum-Dropdown select {
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    -ms-appearance: none;
  }
/* Edge */
.spectrum-Dropdown select::-ms-expand {
      display: none;
    }
.spectrum-Dropdown select::-ms-value {
      background-color: transparent;
    }
.spectrum-Dropdown select:focus {
      background-color: transparent;
      border: none;
      outline: none;
    }
.spectrum-Dropdown select + .spectrum-Dropdown-icon {
      position: absolute;
      right: 12px;
      top: 50%;
      margin-top: -3px;
    }
.spectrum-Dropdown-trigger {
  position: relative;
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
      justify-content: space-between;
  -ms-flex-align: center;
      align-items: center;
}
.spectrum-Dropdown-label {
  /* Be the biggest! */
  -ms-flex: 1;
      flex: 1;

  white-space: nowrap;
  overflow: hidden;

  height: 30px;
  line-height: 30px;

  font-size: 14px;

  text-overflow: ellipsis;
  text-align: left;
}
.spectrum-Dropdown-label.is-placeholder {
    font-weight: 400;
    font-style: italic;
    transition: color 130ms ease-in-out;
  }
/* Only apply margin to the icon if there's a label */
.spectrum-Dropdown-label + .spectrum-Dropdown-icon {
  margin-left: 12px;
}
.spectrum-Icon + .spectrum-Dropdown-label {
  margin-left: 8px;
}
/* Only apply margin if there's a label */
.spectrum-Dropdown-label ~ .spectrum-Dropdown-icon {
  margin-left: 12px;
}
.spectrum-Dropdown-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  transition: color 130ms ease-out;

  /* Fix Safari 10 bug where align-items is ignored inside of buttons */
  margin-top: 12px;
  margin-bottom: 12px;

  opacity: 1;
}
/* Error icons */
.spectrum-Dropdown-trigger .spectrum-Icon:not(.spectrum-Dropdown-icon) {
    /* Fix Safari 10 bug where align-items is ignored inside of buttons */
  margin-top: 6px;
    margin-bottom: 6px;
  }
.spectrum-Dropdown-trigger .spectrum-Dropdown-label + .spectrum-Icon:not(.spectrum-Dropdown-icon) {
    margin-left: 12px;
  }
.spectrum-Icon + .spectrum-Dropdown-icon {
  margin-left: 8px;
}
/* topdoc
{{ dropdown/dropdown-quiet.yml }}
*/
.spectrum-Dropdown--quiet {
  width: auto;
  min-width: 48px;
}
.spectrum-Dropdown-popover {
  max-width: 240px;
}
.spectrum-Dropdown-popover--quiet {
  margin-left: -13px;
}`;
    }
}