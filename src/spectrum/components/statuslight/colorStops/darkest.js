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
.spectrum-StatusLight {
  color: rgb(180, 180, 180);
}
.spectrum-StatusLight[disabled],
  .spectrum-StatusLight.is-disabled {
    color: rgb(73, 73, 73);
  }
.spectrum-StatusLight[disabled]::before, .spectrum-StatusLight.is-disabled::before {
      background-color: rgb(60, 60, 60);
    }
.spectrum-StatusLight--negative::before {
  background-color: rgb(215, 55, 63);
}
.spectrum-StatusLight--notice::before {
  background-color: rgb(218, 123, 17);
}
.spectrum-StatusLight--positive::before {
  background-color: rgb(38, 142, 108);
}
.spectrum-StatusLight--info::before,
/** @depreacted */.spectrum-StatusLight--active::before {
  background-color: rgb(20, 115, 230);
}
.spectrum-StatusLight--neutral {
  color: rgb(135, 135, 135);
}
.spectrum-StatusLight--neutral::before {
    background-color: rgb(73, 73, 73);
  }
.spectrum-StatusLight--celery::before {
  background-color: rgb(61, 167, 78);
}
.spectrum-StatusLight--yellow::before {
  background-color: rgb(210, 178, 0);
}
.spectrum-StatusLight--fuchsia::before {
  background-color: rgb(177, 48, 189);
}
.spectrum-StatusLight--indigo::before {
  background-color: rgb(92, 92, 224);
}
.spectrum-StatusLight--seafoam::before {
  background-color: rgb(22, 135, 140);
}
.spectrum-StatusLight--chartreuse::before {
  background-color: rgb(124, 195, 63);
}
.spectrum-StatusLight--magenta::before {
  background-color: rgb(202, 41, 150);
}
.spectrum-StatusLight--purple::before {
  background-color: rgb(134, 76, 204);
}`;
    }
}