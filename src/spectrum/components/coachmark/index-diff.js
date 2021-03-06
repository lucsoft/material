export default { 
    css() {
        return `
.spectrum--large {
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
@keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    opacity: 0;
  }
  50% {
    -webkit-transform: scale(1.5);
    opacity: 0.6;
  }
  100% {
    -webkit-transform: scale(2);
    opacity: 0;
  }
}
@keyframes pulse--quiet {
  0% {
    -webkit-transform: scale(0.8);
    opacity: 0;
  }
  50% {
    -webkit-transform: scale(1.5);
    opacity: 0.6;
  }
  100% {
    -webkit-transform: scale(2);
    opacity: 0;
  }
}


}
.spectrum--large .spectrum-CoachMarkPopover {

  min-width: 340px;
  max-width: 500px;

  border-radius: 5px;
  border-width: 1px;

}
.spectrum--large .spectrum-CoachMarkPopover-image {
  border-radius: 5px 5px 0 0;
}
.spectrum--large .spectrum-CoachMarkPopover-header,
.spectrum--large .spectrum-CoachMarkPopover-content,
.spectrum--large .spectrum-CoachMarkPopover-footer {
  padding: 0 30px;
}
.spectrum--large .spectrum-CoachMarkPopover-header {
  padding-top: 30px;
}
.spectrum--large .spectrum-CoachMarkPopover-footer {
  padding-bottom: 30px;
}
.spectrum--large .spectrum-CoachMarkPopover-header {
  margin-bottom: 20px;
}
.spectrum--large .spectrum-CoachMarkPopover-title {
  font-size: 19px;
  font-weight: 700;
  line-height: 1.3;
}
.spectrum--large .spectrum-CoachMarkPopover-step {
  font-size: 17px;
  font-weight: 400;
  line-height: 1.5;
}
.spectrum--large .spectrum-CoachMarkPopover-content {
  margin-bottom: 20px;
}
.spectrum--large .spectrum-CoachMarkIndicator {

  margin: 8px;
}
.spectrum--large .spectrum-CoachMarkIndicator-ring {
  border-width: 2px;
}
.spectrum--large .spectrum-CoachMarkIndicator-ring:nth-child(2) {
    animation-delay: -1980ms;
  }
.spectrum--large .spectrum-CoachMarkIndicator-ring:nth-child(3) {
    animation-delay: -3000ms
  }
.spectrum--large .spectrum-CoachMarkIndicator {
  min-width: 60px;
  min-height: 60px;
}
.spectrum--large .spectrum-CoachMarkIndicator-ring {
  top: 15px;
  left: 15px;

  width: 20px;
  height: 20px;
  animation: pulse 3000ms linear infinite;
}
.spectrum--large .spectrum-CoachMarkIndicator-ring:nth-child(1) {
    animation-delay: -1500ms;
  }
.spectrum--large .spectrum-CoachMarkIndicator--quiet {
  min-width: 27.5px;
  min-height: 27.5px;
}
.spectrum--large .spectrum-CoachMarkIndicator--quiet .spectrum-CoachMarkIndicator-ring {
    top: 7.5px;
    left: 7.5px;

    width: 10px;
    height: 10px;
    animation: pulse--quiet 3000ms linear infinite;
  }
.spectrum--large .spectrum-CoachMarkIndicator--quiet .spectrum-CoachMarkIndicator-ring:nth-child(1) {
      animation-delay: -990ms;
    }`;
    }
}