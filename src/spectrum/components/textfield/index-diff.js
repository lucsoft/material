export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-Textfield {
  border: 1px solid;
  border-radius: 5px;
  padding: 3px 15px 5px 15px;

  min-width: 112px;
  height: 40px;
  width: 240px;
  font-family: adobe-clean, Helvetica, Arial, sans-serif;
  font-size: 17px;
  line-height: 25px;

  transition: border-color 130ms ease-in-out, box-shadow 130ms ease-in-out;
}
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-Textfield::placeholder {
    font-weight: 400;
    font-style: italic;
    transition: color 130ms ease-in-out;
  }
.spectrum--large .spectrum-Textfield::-ms-input-placeholder {
    font-weight: 400;
    font-style: italic;
    transition: color 130ms ease-in-out;
  }
.spectrum--large .spectrum-Textfield:hover::placeholder {
      font-weight: 400;
    }
.spectrum--large .spectrum-Textfield:disabled::placeholder {
      font-weight: 400;
    }
.spectrum--large .spectrum-Textfield.is-invalid,
  .spectrum--large .spectrum-Textfield:invalid {
    background-size: 22px 22px;
    background-position: calc(100% - 15px) 50%;
    padding-right: 52px;
  }
.spectrum--large .spectrum-Textfield.is-valid {
    background-size: 16px 16px;
    background-position: calc(100% - 15px) 50%;
    padding-right: 46px;
  }
.spectrum--large .spectrum-Textfield--multiline {
  height: auto;
  padding: 4px 8px;
}
.spectrum--large .spectrum-Textfield--multiline.is-invalid,
  .spectrum--large .spectrum-Textfield--multiline:invalid,
  .spectrum--large .spectrum-Textfield--multiline.is-valid {
    background-position: calc(100% - 11px) calc(100% - 11px);
  }
.spectrum--large .spectrum-Textfield--quiet {
  border-radius: 0;
  border-width: 0 0 1px 0;
  padding-left: 0;
  padding-right: 0;
}
.spectrum--large .spectrum-Textfield--quiet.is-invalid,
  .spectrum--large .spectrum-Textfield--quiet:invalid,
  .spectrum--large .spectrum-Textfield--quiet.is-valid {
    background-position: 100% 50%;
  }`;
    }
}