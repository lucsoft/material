export default { 
    css() {
        return `
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
/* topdoc
{{ coachmark/coachmark.yml }}
*/
.spectrum-CoachMarkPopover {
  position: relative;

  min-width: 340px;
  max-width: 500px;

  border-radius: 5px;
  border-width: 1px;
  border-style: solid;

}
.spectrum-CoachMarkPopover-image {
  border-radius: 5px 5px 0 0;

  width: 100%;
}
.spectrum-CoachMarkPopover-header,
.spectrum-CoachMarkPopover-content,
.spectrum-CoachMarkPopover-footer {
  padding: 0 30px;
}
.spectrum-CoachMarkPopover-header {
  padding-top: 30px;
}
.spectrum-CoachMarkPopover-footer {
  padding-bottom: 30px;
}
.spectrum-CoachMarkPopover-header {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
      justify-content: space-between;
  -ms-flex-align: end;
      align-items: flex-end;
  margin-bottom: 20px;
}
.spectrum-CoachMarkPopover-title {
  font-size: 19px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 0;
}
.spectrum-CoachMarkPopover-step {
  font-size: 17px;
  font-weight: 400;
  line-height: 1.5;
}
.spectrum-CoachMarkPopover-content {
  margin-bottom: 20px;
}
.spectrum-CoachMarkPopover-footer {
  margin-top: 0;
  text-align: right;
}
.spectrum-CoachMarkIndicator {
  position: relative;

  margin: 8px;
}
.spectrum-CoachMarkIndicator-ring {
  display: block;
  position: absolute;

  border-style: solid;
  border-width: 2px;
  border-radius: 50%;
}
.spectrum-CoachMarkIndicator-ring:nth-child(2) {
    animation-delay: -1980ms;
  }
.spectrum-CoachMarkIndicator-ring:nth-child(3) {
    animation-delay: -3000ms
  }
.spectrum-CoachMarkIndicator {
  min-width: 60px;
  min-height: 60px;
}
.spectrum-CoachMarkIndicator-ring {
  top: 15px;
  left: 15px;

  width: 20px;
  height: 20px;
  animation: pulse 3000ms linear infinite;
}
.spectrum-CoachMarkIndicator-ring:nth-child(1) {
    animation-delay: -1500ms;
  }
.spectrum-CoachMarkIndicator--quiet {
  min-width: 27.5px;
  min-height: 27.5px;
}
.spectrum-CoachMarkIndicator--quiet .spectrum-CoachMarkIndicator-ring {
    top: 7.5px;
    left: 7.5px;

    width: 10px;
    height: 10px;
    animation: pulse--quiet 3000ms linear infinite;
  }
.spectrum-CoachMarkIndicator--quiet .spectrum-CoachMarkIndicator-ring:nth-child(1) {
      animation-delay: -990ms;
    }`;
    }
}