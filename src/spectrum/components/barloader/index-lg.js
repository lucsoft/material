export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
/* topdoc
{{ barloader/barloader-large.yml }}
*/
.spectrum-BarLoader {
  position: relative;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-flow: row wrap;
      flex-flow: row wrap;
  -ms-flex-pack: justify;
      justify-content: space-between;
  -ms-flex-align: center;
      align-items: center;
  width: 240px;
  vertical-align: top;
}
.spectrum-BarLoader-track {
  /* Visually apply border radius to child elements */
  overflow: hidden;
  width: 240px;
  height: 8px;
  border-radius: 4px;
}
.spectrum-BarLoader-fill {
  border: none;
  height: 8px;

  transition: width 1s;
}
.spectrum-BarLoader-label,
.spectrum-BarLoader-percentage {
  font-size: 15px;
  font-weight: 400;
  line-height: 1.3;
  text-align: left;
  margin-bottom: 11px;

}
.spectrum-BarLoader--sideLabel {
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-flow: row;
      flex-flow: row;
  -ms-flex-pack: justify;
      justify-content: space-between;
  width: auto;
}
.spectrum-BarLoader--sideLabel .spectrum-BarLoader-label {
    margin-right: 12px;
    margin-bottom: 0;
  }
.spectrum-BarLoader--sideLabel .spectrum-BarLoader-percentage {
    -ms-flex-order: 3;
        order: 3;
    text-align: right;
    margin-left: 12px;
    margin-bottom: 0;
  }
/* topdoc
{{ barloader/barloader-small.yml }}
*/
.spectrum-BarLoader--small {
  height: 5px;
  min-width: 240px;
}
.spectrum-BarLoader--small .spectrum-BarLoader-fill {
    height: 5px;
  }
.spectrum-BarLoader--small .spectrum-BarLoader-track {
    height: 5px;
    border-radius: 3px;
  }
/* topdoc
{{ barloader/barloader-large-over-background.yml }}
*/
/* topdoc
{{ barloader/barloader-small-over-background.yml }}
*/
/* topdoc
{{ barloader/barloader-meter.yml }}
*/`;
    }
}