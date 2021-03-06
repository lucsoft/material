export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-SplitView-gripper {
  border-radius: 2px;
  left: -4px;
  width: 4px;
  height: 16px;
  border-width: 4px 3px;
}
/* generated from dna-version: 5.3.0 */
.spectrum--large .spectrum-SplitView-splitter {

  width: 2px;
}
.spectrum--large .spectrum-SplitView-splitter.is-collapsed-start .spectrum-SplitView-gripper:before, .spectrum--large .spectrum-SplitView-splitter.is-collapsed-end .spectrum-SplitView-gripper:before {
        left: calc(50% - 1px);
        width: 2px;
      }
.spectrum--large .spectrum-SplitView--vertical .spectrum-SplitView-pane {
    width: 100%;
  }
.spectrum--large .spectrum-SplitView--vertical .spectrum-SplitView-gripper {
    top: -4px;

    transform: translate(-50%, 0);
    left: 50%;
    width: 16px;
    height: 4px;
    border-width: 3px 4px;
  }
.spectrum--large .spectrum-SplitView--vertical .spectrum-SplitView-splitter {
    width: 100%;
    height: 2px;
  }
.spectrum--large .spectrum-SplitView--vertical .spectrum-SplitView-splitter.is-collapsed-start .spectrum-SplitView-gripper, .spectrum--large .spectrum-SplitView--vertical .spectrum-SplitView-splitter.is-collapsed-end .spectrum-SplitView-gripper {
        left: 50%;
      }
.spectrum--large .spectrum-SplitView--vertical .spectrum-SplitView-splitter.is-collapsed-start .spectrum-SplitView-gripper:before, .spectrum--large .spectrum-SplitView--vertical .spectrum-SplitView-splitter.is-collapsed-end .spectrum-SplitView-gripper:before {
          top: calc(50% - 1px);
          left: 0;
          width: 100%;
          height: 2px;
        }
.spectrum--large .spectrum-SplitView--vertical .spectrum-SplitView-splitter.is-collapsed-start .spectrum-SplitView-gripper {
        top: 0;
      }
.spectrum--large .spectrum-SplitView--vertical .spectrum-SplitView-splitter.is-collapsed-end .spectrum-SplitView-gripper {
        bottom: 0;
      }`;
    }
}