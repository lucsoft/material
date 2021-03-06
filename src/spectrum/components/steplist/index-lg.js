export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
:root {
  /* The width of a step */

  /* The diameter of the marker */

  /* The width of the hit area */

  /* The height of the line */

  /* This gives enough space for one line of text */

  /* This gives enough space for the longest possible label */

  /* Offset from the BOTTOM of the steplist */

  /* Font size of the label */
}
/* topdoc
{{ steplist/steplist-default.yml }}
*/
.spectrum-Steplist {
  /* Contain child elements with positive z-index */
  z-index: 0;
  position: relative;

  display: block;
  vertical-align: top;
  margin: 0;
  padding-top: 22px;
  padding-left: 60px;
  padding-right: 60px;

  text-align: center;
  white-space: nowrap;
  font-size: 0; /* To remove html whitespace between inline elements */
  line-height: 16px; /* in case the container changes it */
}
.spectrum-Steplist--interactive .spectrum-Steplist-label,
  .spectrum-Steplist--interactive .spectrum-Steplist-markerContainer {
    /* Show cursor on hit zone when clickable */
    cursor: pointer;
  }
/* Small (w/o label or tooltip) */
.spectrum-Steplist--small {
  padding: 11px 0;
}
.spectrum-Steplist--small .spectrum-Steplist-item {
    padding: 0 40px 0 0;
    width: 80px;
  }
/* Disable Label */
.spectrum-Steplist--small .spectrum-Steplist-item .spectrum-Steplist-label {
      display: none;
    }
.spectrum-Steplist--small .spectrum-Steplist-item:first-child, .spectrum-Steplist--small .spectrum-Steplist-item:last-child {
      width: 20px;
    }
/* Disable first line */
.spectrum-Steplist--small .spectrum-Steplist-item:first-child .spectrum-Steplist-markerContainer {
        margin-left: -10px;
      }
.spectrum-Steplist--small .spectrum-Steplist-item:last-child .spectrum-Steplist-markerContainer {
        margin-right: -10px;
      }
.spectrum-Steplist-item {
  outline: none;
  position: relative;
  display: inline-block;
  margin: 0;

  /* Don't let tooltips mess up alignment */
  vertical-align: bottom;

  box-sizing: content-box;
  width: 80px;
  padding: 0 40px 0 0;
}
/* Completed State */
.spectrum-Steplist-item.is-complete .spectrum-Steplist-marker {
      border: none;
    }
/* The next step's line should be solid */
.spectrum-Steplist-item.is-complete + .spectrum-Steplist-item .spectrum-Steplist-segment {
      border-bottom-width: 2px;
      border-bottom-style: solid;
    }
/* Selected state */
/* Focus */
.spectrum-Steplist-item.is-selected:focus {
      outline: none;
    }
.spectrum-Steplist-item.is-selected .spectrum-Steplist-marker {
      border: none;
    }
/* topdoc
{{ steplist/steplist-label.yml }}
*/
.spectrum-Steplist-label {
  position: absolute;
  left: 50%;
  bottom: 10px;

  display: block;
  width: 120px;

  font-size: 12px;
  white-space: normal;

  transform: translateX(-50%);
}
.spectrum-Steplist-markerContainer {
  display: block;

  z-index: 2;
  position: absolute;
  bottom: -10px;
  left: 50%;

  width: 20px;
  height: 20px;

  margin-left: -10px;
}
/* Circle step marker */
.spectrum-Steplist-marker {
  box-sizing: border-box; /* So we can stroke nicely */
  display: block;

  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -4px;
  margin-left: -4px;

  width: 8px;
  height: 8px;

  border-radius: 8px;

  border: 2px solid;
  border-color: transparent;
  background: transparent;
}
/* Step line */
.spectrum-Steplist-segment {
  display: block;
  z-index: 1;
  position: absolute;
  right: 68px;

  box-sizing: content-box;
  width: 104px;
  bottom: -1px;

  /* Default is dashed */
  border-bottom-width: 2px;
  border-bottom-style: dashed;
}
/* First step overrides */
.spectrum-Steplist-item:first-child .spectrum-Steplist-markerContainer {
    left: 0;
  }
.spectrum-Steplist-item:first-child .spectrum-Steplist-label {
    left: 0;
  }
.spectrum-Steplist-item:first-child .spectrum-Steplist-segment {
    /* Not visible for first step */
    display: none;
  }
/* Last step overrides */
.spectrum-Steplist-item:last-child .spectrum-Steplist-label {
    left: auto;
    right: 0;

    transform: translateX(50%);
  }
.spectrum-Steplist-item:last-child .spectrum-Steplist-markerContainer {
    left: auto;
    right: 0;

    margin-left: 0;
    margin-right: -10px;
  }
.spectrum-Steplist-item:last-child .spectrum-Steplist-segment {
    right: 8px;
    left: auto;
  }
.spectrum-Steplist-item:first-child,
.spectrum-Steplist-item:last-child {
  width: 20px;
}
/* Single step */
.spectrum-Steplist-item:only-child .spectrum-Steplist-label {
    /* Be centered */
    left: 50%;

    /* Override last-child bits */
    transform: translate(-50%);
  }
.spectrum-Steplist-item:only-child .spectrum-Steplist-markerContainer {
    /* Be centered */
    left: 50%;

    /* Override last-child bits */
    margin-right: 0;
    margin-left: -10px;
  }
/* topdoc
{{ steplist/steplist-tooltip.yml }}
*/`;
    }
}