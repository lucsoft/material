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
.spectrum-Alert {
  background-color: rgb(255, 255, 255);
  /* default color set to body color, header element overwrites this */
  color: rgb(116, 116, 116);
}
.spectrum-Alert-header {
  color: rgb(50, 50, 50);
}
.spectrum-Alert-content {
  color: rgb(116, 116, 116);
}
/* topdoc
{{ alert/alert-info.yml }}
*/
.spectrum-Alert--info {
  border-color: rgb(55, 142, 240);
}
.spectrum-Alert--info .spectrum-Alert-icon {
    color: rgb(55, 142, 240);
  }
/* topdoc
{{ alert/alert-help.yml }}
*/
.spectrum-Alert--help {
  border-color: rgb(55, 142, 240);
}
.spectrum-Alert--help .spectrum-Alert-icon {
    color: rgb(55, 142, 240);
  }
/* topdoc
{{ alert/alert-error.yml }}
*/
.spectrum-Alert--error {
  border-color: rgb(236, 91, 98);
}
.spectrum-Alert--error .spectrum-Alert-icon {
    color: rgb(236, 91, 98);
  }
/* topdoc
{{ alert/alert-success.yml }}
*/
.spectrum-Alert--success {
  border-color: rgb(51, 171, 132);
}
.spectrum-Alert--success .spectrum-Alert-icon {
    color: rgb(51, 171, 132);
  }
/* topdoc
{{ alert/alert-warning.yml }}
*/
.spectrum-Alert--warning {
  border-color: rgb(242, 148, 35);
}
.spectrum-Alert--warning .spectrum-Alert-icon {
    color: rgb(242, 148, 35);
  }`;
    }
}