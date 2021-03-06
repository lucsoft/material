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
.spectrum--dark .spectrum-Card {
  border-color: rgb(57, 57, 57);
  background-color: rgb(37, 37, 37);
}
.spectrum--dark .spectrum-Card:hover {
    border-color: rgb(77, 77, 77);
  }
.spectrum--dark .spectrum-Card.is-selected,
  .spectrum--dark .spectrum-Card:focus {
    border-color: rgb(38, 128, 235);
    box-shadow: 0 0 0 1px rgb(38, 128, 235);
  }
.spectrum--dark .spectrum-Card.is-drop-target {
    border-color: rgb(38, 128, 235);
    box-shadow: 0 0 0 1px rgb(38, 128, 235);
    background-color: rgba(55,142,240,0.1);
  }
.spectrum--dark .spectrum-Card-description {
  color: rgb(157, 157, 157);
}
.spectrum--dark .spectrum-Card-coverPhoto {
  background-color: rgb(57, 57, 57);
  border-bottom-color: rgb(57, 57, 57);
}
.spectrum--dark .spectrum-Card-footer {
  border-color: rgb(57, 57, 57);
}
.spectrum--dark .spectrum-Card--quiet,
.spectrum--dark .spectrum-Card--gallery {
  border-color: transparent;
  background-color: transparent;
}
.spectrum--dark .spectrum-Card--quiet .spectrum-Card-preview, .spectrum--dark .spectrum-Card--gallery .spectrum-Card-preview {
    background-color: rgb(57, 57, 57);
  }
.spectrum--dark .spectrum-Card--quiet:hover, .spectrum--dark .spectrum-Card--gallery:hover {
    border-color: transparent;
  }
.spectrum--dark .spectrum-Card--quiet:hover .spectrum-Card-preview, .spectrum--dark .spectrum-Card--gallery:hover .spectrum-Card-preview {
      background-color: rgb(62, 62, 62);
    }
.spectrum--dark .spectrum-Card--quiet.is-selected,
  .spectrum--dark .spectrum-Card--quiet:focus,
  .spectrum--dark .spectrum-Card--gallery.is-selected,
  .spectrum--dark .spectrum-Card--gallery:focus {
    border-color: transparent;
    box-shadow: none;
  }
.spectrum--dark .spectrum-Card--quiet.is-selected .spectrum-Card-preview, .spectrum--dark .spectrum-Card--quiet:focus .spectrum-Card-preview, .spectrum--dark .spectrum-Card--gallery.is-selected .spectrum-Card-preview, .spectrum--dark .spectrum-Card--gallery:focus .spectrum-Card-preview {
      background-color: rgb(57, 57, 57);
    }
.spectrum--dark .spectrum-Card--quiet.is-selected .spectrum-Card-preview:before, .spectrum--dark .spectrum-Card--quiet:focus .spectrum-Card-preview:before, .spectrum--dark .spectrum-Card--gallery.is-selected .spectrum-Card-preview:before, .spectrum--dark .spectrum-Card--gallery:focus .spectrum-Card-preview:before {
        border-color: rgb(55, 142, 240);
        box-shadow: 0 0 0 1px rgb(55, 142, 240);
      }
.spectrum--dark .spectrum-Card--quiet.is-drop-target, .spectrum--dark .spectrum-Card--gallery.is-drop-target {
    border-color: transparent;
    background-color: transparent;
    box-shadow: none;
  }
.spectrum--dark .spectrum-Card--quiet.is-drop-target .spectrum-Card-preview, .spectrum--dark .spectrum-Card--gallery.is-drop-target .spectrum-Card-preview {
      background-color: rgba(55,142,240,0.1);
    }
.spectrum--dark .spectrum-Card--quiet.is-drop-target .spectrum-Card-preview:before, .spectrum--dark .spectrum-Card--gallery.is-drop-target .spectrum-Card-preview:before {
        border-color: rgb(55, 142, 240);
        box-shadow: 0 0 0 1px rgb(55, 142, 240);
      }
.spectrum--dark .spectrum-Card--quiet.is-drop-target .spectrum-Asset-folderBackground,
    .spectrum--dark .spectrum-Card--quiet.is-drop-target .spectrum-Asset-fileBackground,
    .spectrum--dark .spectrum-Card--gallery.is-drop-target .spectrum-Asset-folderBackground,
    .spectrum--dark .spectrum-Card--gallery.is-drop-target .spectrum-Asset-fileBackground {
      fill: rgba(55,142,240,0.1);
    }
.spectrum--dark .spectrum-Card--quiet.is-drop-target .spectrum-Asset-folderOutline,
    .spectrum--dark .spectrum-Card--quiet.is-drop-target .spectrum-Asset-fileOutline,
    .spectrum--dark .spectrum-Card--gallery.is-drop-target .spectrum-Asset-folderOutline,
    .spectrum--dark .spectrum-Card--gallery.is-drop-target .spectrum-Asset-fileOutline {
      fill: rgb(55, 142, 240);
    }
.spectrum--dark .spectrum-Card--quiet .spectrum-Card-title, .spectrum--dark .spectrum-Card--gallery .spectrum-Card-title {
    color: rgb(205, 205, 205);
  }
.spectrum--dark .spectrum-Card--quiet .spectrum-Card-subtitle, .spectrum--dark .spectrum-Card--gallery .spectrum-Card-subtitle {
    color: rgb(157, 157, 157);
  }`;
    }
}