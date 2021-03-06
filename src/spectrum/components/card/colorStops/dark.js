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
.spectrum-Card {
  border-color: rgb(57, 57, 57);
  background-color: rgb(37, 37, 37);
}
.spectrum-Card:hover {
    border-color: rgb(77, 77, 77);
  }
.spectrum-Card.is-selected,
  .spectrum-Card:focus {
    border-color: rgb(38, 128, 235);
    box-shadow: 0 0 0 1px rgb(38, 128, 235);
  }
.spectrum-Card.is-drop-target {
    border-color: rgb(38, 128, 235);
    box-shadow: 0 0 0 1px rgb(38, 128, 235);
    background-color: rgba(55,142,240,0.1);
  }
.spectrum-Card-description {
  color: rgb(157, 157, 157);
}
.spectrum-Card-coverPhoto {
  background-color: rgb(57, 57, 57);
  border-bottom-color: rgb(57, 57, 57);
}
.spectrum-Card-footer {
  border-color: rgb(57, 57, 57);
}
.spectrum-Card--quiet,
.spectrum-Card--gallery {
  border-color: transparent;
  background-color: transparent;
}
.spectrum-Card--quiet .spectrum-Card-preview, .spectrum-Card--gallery .spectrum-Card-preview {
    background-color: rgb(57, 57, 57);
  }
.spectrum-Card--quiet:hover, .spectrum-Card--gallery:hover {
    border-color: transparent;
  }
.spectrum-Card--quiet:hover .spectrum-Card-preview, .spectrum-Card--gallery:hover .spectrum-Card-preview {
      background-color: rgb(62, 62, 62);
    }
.spectrum-Card--quiet.is-selected,
  .spectrum-Card--quiet:focus,
  .spectrum-Card--gallery.is-selected,
  .spectrum-Card--gallery:focus {
    border-color: transparent;
    box-shadow: none;
  }
.spectrum-Card--quiet.is-selected .spectrum-Card-preview, .spectrum-Card--quiet:focus .spectrum-Card-preview, .spectrum-Card--gallery.is-selected .spectrum-Card-preview, .spectrum-Card--gallery:focus .spectrum-Card-preview {
      background-color: rgb(57, 57, 57);
    }
.spectrum-Card--quiet.is-selected .spectrum-Card-preview:before, .spectrum-Card--quiet:focus .spectrum-Card-preview:before, .spectrum-Card--gallery.is-selected .spectrum-Card-preview:before, .spectrum-Card--gallery:focus .spectrum-Card-preview:before {
        border-color: rgb(55, 142, 240);
        box-shadow: 0 0 0 1px rgb(55, 142, 240);
      }
.spectrum-Card--quiet.is-drop-target, .spectrum-Card--gallery.is-drop-target {
    border-color: transparent;
    background-color: transparent;
    box-shadow: none;
  }
.spectrum-Card--quiet.is-drop-target .spectrum-Card-preview, .spectrum-Card--gallery.is-drop-target .spectrum-Card-preview {
      background-color: rgba(55,142,240,0.1);
    }
.spectrum-Card--quiet.is-drop-target .spectrum-Card-preview:before, .spectrum-Card--gallery.is-drop-target .spectrum-Card-preview:before {
        border-color: rgb(55, 142, 240);
        box-shadow: 0 0 0 1px rgb(55, 142, 240);
      }
.spectrum-Card--quiet.is-drop-target .spectrum-Asset-folderBackground,
    .spectrum-Card--quiet.is-drop-target .spectrum-Asset-fileBackground,
    .spectrum-Card--gallery.is-drop-target .spectrum-Asset-folderBackground,
    .spectrum-Card--gallery.is-drop-target .spectrum-Asset-fileBackground {
      fill: rgba(55,142,240,0.1);
    }
.spectrum-Card--quiet.is-drop-target .spectrum-Asset-folderOutline,
    .spectrum-Card--quiet.is-drop-target .spectrum-Asset-fileOutline,
    .spectrum-Card--gallery.is-drop-target .spectrum-Asset-folderOutline,
    .spectrum-Card--gallery.is-drop-target .spectrum-Asset-fileOutline {
      fill: rgb(55, 142, 240);
    }
.spectrum-Card--quiet .spectrum-Card-title, .spectrum-Card--gallery .spectrum-Card-title {
    color: rgb(205, 205, 205);
  }
.spectrum-Card--quiet .spectrum-Card-subtitle, .spectrum-Card--gallery .spectrum-Card-subtitle {
    color: rgb(157, 157, 157);
  }`;
    }
}