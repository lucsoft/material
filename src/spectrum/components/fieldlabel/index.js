export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
/* topdoc
{{ fieldlabel/fieldlabel.yml }}
*/
/* topdoc
{{ fieldlabel/fieldlabel-required.yml }}
*/
.spectrum-FieldLabel,
.spectrum-Form-itemLabel {
  display: block;

  box-sizing: border-box;

  padding: 4px 0 5px;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;

  vertical-align: top;

  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: auto;
  font-smoothing: subpixel-antialiased;
}
.spectrum-FieldLabel-requiredIcon {
  margin: 4px 0 0 2px;
}
/* topdoc
{{ fieldlabel/fieldlabel-left.yml }}
*/
.spectrum-FieldLabel--left {
  display: inline-block;
  padding: 8px 8px 0 0;
}
.spectrum-FieldLabel--left .spectrum-FieldLabel-requiredIcon {
    margin: 0px 0 0 2px;
  }
/* topdoc
{{ fieldlabel/fieldlabel-right.yml }}
*/
.spectrum-FieldLabel--right {
  display: inline-block;
  text-align: right;
  padding: 8px 8px 0 0;
}
/* topdoc
{{ form/index.yml }}
*/
.spectrum-Form {
  display: table;
  border-collapse: separate;
  border-spacing: 0 24px;
  margin: -20px 0;
}
.spectrum-Form-item {
  display: table-row;
}
.spectrum-Form-itemLabel {
  display: table-cell;
}
.spectrum-Form-itemField {
  display: table-cell;
}`;
    }
}