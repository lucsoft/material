export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
.spectrum-Radio {
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-align: center;
      align-items: center;

  position: relative;

  height: 32px;
  max-width: 100%;

  margin-right: 16px;

  vertical-align: top;
}
.spectrum-Radio-input {
  /* Change the font styles in all browsers for input. */
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;

  /* Remove the margin for input in Firefox and Safari. */
  margin: 0;

  /* Show the overflow for input in Edge. */
  overflow: visible;

  /* Add the correct box sizing for [type="radio"] in IE 10-. */
  box-sizing: border-box;

  /* Remove the padding for [type="radio"] in IE 10-. */
  padding: 0;

  /* Hit area */
  position: absolute;
  top: 0;
  left: -8px;
  width: calc(100% + 16px);
  height: 100%;

  opacity: .0001;
  z-index: 1;

  cursor: pointer;
}
.spectrum-Radio-input:disabled {
    cursor: default;
  }
.spectrum-Radio-input:checked + .spectrum-Radio-button {
    border-width: 5px;
  }
.spectrum-Radio-label {
  margin-left: 10px;
  font-size: 14px;

  transition: color 130ms ease-in-out;

  white-space: nowrap;

  overflow: hidden;
  text-overflow: ellipsis;
}
.spectrum-Radio-button {
  position: relative;
  box-sizing: border-box;
  width: 14px;
  height: 14px;

  -ms-flex-positive: 0;

      flex-grow: 0;
  -ms-flex-negative: 0;
      flex-shrink: 0;

  border-radius: 7px;
  border-width: 2px;
  border-style: solid;

  transition: border 130ms ease-in-out, box-shadow 130ms ease-in-out;
}
.spectrum-Radio--labelBelow {
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-direction: column;
      flex-direction: column;
  -ms-flex-align: center;
      align-items: center;
  height: auto;
}
.spectrum-Radio--labelBelow .spectrum-Radio-button {
    -ms-flex-negative: 0;
        flex-shrink: 0;
  }
.spectrum-Radio--labelBelow .spectrum-Radio-label {
    margin: 3px 0 0 0;
  }`;
    }
}