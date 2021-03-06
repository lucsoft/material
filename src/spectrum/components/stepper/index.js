export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
.spectrum-Stepper {
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-direction: row-reverse;
      flex-direction: row-reverse;
  -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;

  width: 192px;
  line-height: 0;
  border-radius: 4px;
  transition: border-color 130ms ease-in-out, box-shadow 130ms ease-in-out;
}
.spectrum-Stepper::before {
  content: '';
}
.spectrum-Stepper-buttons {
  display: block;
  border-radius: 4px 0 0 4px;
  transition: box-shadow 130ms ease-in-out;
}
.spectrum-Stepper-stepUp,
.spectrum-Stepper-stepDown {
  position: relative;
  display: block;

  height: 16px;
  width: 24px;

  padding-left: 6px;
  padding-right: 6px;

  /* Avoid margin added by adjacent buttons */
  margin: 0 !important;

  border-width: 1px;
  border-right-width: 0;
  border-radius: 4px 0 0 4px;
}
.spectrum-Stepper-stepUp .spectrum-Icon, .spectrum-Stepper-stepDown .spectrum-Icon {
    margin: 0 !important;
    opacity: 1;
  }
.spectrum-Stepper-stepUp {
  border-bottom: none;
  border-bottom-left-radius: 0;
}
.spectrum-Stepper-stepUp .spectrum-Icon {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 3px;
  }
.spectrum-Stepper-stepDown {
  border-top: none;
  border-top-left-radius: 0;
  border-bottom-width: 1px;
}
.spectrum-Stepper-stepDown:focus {
    border-top: none;
  }
.spectrum-Stepper-stepDown .spectrum-Icon {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 3px;
  }
.spectrum-Stepper-input {
  position: relative;

  -ms-flex: 1;

      flex: 1;

  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  z-index: 1;
}
.spectrum-Stepper--quiet {
  border-radius: 0;
}
.spectrum-Stepper--quiet .spectrum-Stepper-buttons .spectrum-ActionButton {
      border-top: none;
      border-left: none;
      border-radius: 0;
    }`;
    }
}