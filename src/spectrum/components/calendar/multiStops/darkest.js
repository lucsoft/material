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
.spectrum--darkest .spectrum-Calendar-prevMonth {
  color: rgb(135, 135, 135);
}
.spectrum--darkest .spectrum-Calendar-nextMonth {
  color: rgb(135, 135, 135);
}
.spectrum--darkest .spectrum-Calendar-dayOfWeek {
  color: rgb(135, 135, 135);
}
.spectrum--darkest .spectrum-Calendar-date:hover {
    color: rgb(226, 226, 226);
  }
.spectrum--darkest .spectrum-Calendar-date:hover:not(.is-selection-end):not(.is-selection-start):before {
        background: rgba(226,226,226,0.06);
      }
.spectrum--darkest .spectrum-Calendar-date:hover.is-selected {
      color: rgb(226, 226, 226);
    }
.spectrum--darkest .spectrum-Calendar-date:hover.is-selected:not(.is-selection-end):not(.is-selection-start):before {
          background: rgba(38,128,235,0.2);
        }
.spectrum--darkest .spectrum-Calendar-date:hover.is-range-selection:before {
        background: rgba(38,128,235,0.2);
      }
.spectrum--darkest .spectrum-Calendar-date:active {
    background-color: rgba(226,226,226,0.1);
  }
.spectrum--darkest .spectrum-Calendar-date.is-selected {
    color: rgb(226, 226, 226);
    background: rgba(38,128,235,0.1);
  }
.spectrum--darkest .spectrum-Calendar-date.is-selected:not(.is-range-selection) {
    background: rgba(38,128,235,0.2);
  }
.spectrum--darkest .spectrum-Calendar-date.is-today {
    color: rgb(180, 180, 180);
    border-color: rgb(180, 180, 180);
  }
.spectrum--darkest .spectrum-Calendar-date.is-today:before {
      border-color: rgb(180, 180, 180);
    }
.spectrum--darkest .spectrum-Calendar-date.is-today:hover.is-selected:not(.is-range-selection):before {
          background: rgba(38,128,235,0.2);
        }
.spectrum--darkest .spectrum-Calendar-date.is-today.is-disabled {
      color: rgb(73, 73, 73);
      border-color: rgb(60, 60, 60);
    }
.spectrum--darkest .spectrum-Calendar-date.is-today.is-disabled:before {
        border-color: rgb(60, 60, 60);
      }
.spectrum--darkest .spectrum-Calendar-date.is-focused:not(.is-range-selection) {
    background: rgba(226,226,226,0.06);
    border-color: rgb(20, 115, 230);
    color: rgb(226, 226, 226);
  }
.spectrum--darkest .spectrum-Calendar-date.is-focused:not(.is-range-selection).is-today {
      border-color: rgb(20, 115, 230);
    }
.spectrum--darkest .spectrum-Calendar-date.is-focused:not(.is-range-selection):active,
    .spectrum--darkest .spectrum-Calendar-date.is-focused:not(.is-range-selection).is-selected {
      color: rgb(226, 226, 226);
      background: rgba(38,128,235,0.2);
      border-color: rgb(20, 115, 230);
    }
.spectrum--darkest .spectrum-Calendar-date.is-focused.is-selected:before {
        background: rgba(38,128,235,0.2);
      }
.spectrum--darkest .spectrum-Calendar-date.is-focused.is-range-selection:before {
        background: rgba(38,128,235,0.2);
      }
.spectrum--darkest .spectrum-Calendar-date.is-disabled {
    color: rgb(73, 73, 73);
  }
.spectrum--darkest .spectrum-Calendar-date.is-selection-start,
  .spectrum--darkest .spectrum-Calendar-date.is-selection-end {
    color: rgb(226, 226, 226);
  }
.spectrum--darkest .spectrum-Calendar-date.is-selection-start:after, .spectrum--darkest .spectrum-Calendar-date.is-selection-end:after {
      background-color: rgba(38,128,235,0.1);
    }
.spectrum--darkest .spectrum-Calendar-date.is-selection-start.is-disabled, .spectrum--darkest .spectrum-Calendar-date.is-selection-end.is-disabled {
      color: rgb(73, 73, 73);
    }`;
    }
}