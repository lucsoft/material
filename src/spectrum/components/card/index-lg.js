export default { 
    css() {
        return `
/* generated from dna-version: 5.3.0 */
/* generated from dna-version: 5.3.0 */
/* topdoc
{{ card/card.yml }}
*/
/*! topdoc
{{ card/card-asset.yml }}
*/
/*! topdoc
{{ card/card-small.yml }}
*/
.spectrum-Card {
  position: relative;

  display: -ms-inline-flexbox;

  display: inline-flex;
  -ms-flex-direction: column;
      flex-direction: column;

  box-sizing: border-box;
  min-width: 300px;

  border: 1px solid transparent;
  border-radius: 5px;
}
.spectrum-Card:focus {
    outline: none;
  }
.spectrum-Card.is-selected .spectrum-Card-quickActions,
    .spectrum-Card.is-selected .spectrum-Card-actions,
    .spectrum-Card:focus .spectrum-Card-quickActions,
    .spectrum-Card:focus .spectrum-Card-actions,
    .spectrum-Card:hover .spectrum-Card-quickActions,
    .spectrum-Card:hover .spectrum-Card-actions {
      /* Ideally, this would simply apply is-open to the QuickActions component */
      visibility: visible;
      opacity: 1;
      pointer-events: all;
    }
.spectrum-Card-actions {
  position: absolute;
  right: 13px;
  top: 13px;
  height: 50px;
  visibility: hidden;
}
.spectrum-Card-quickActions {
  position: absolute;
  left: 20px;
  top: 20px;

  width: 50px;
  height: 50px;

  visibility: hidden;
}
.spectrum-Card-quickActions .spectrum-Checkbox {
    margin: 0;
  }
.spectrum-Card-coverPhoto {
  height: 212px;
  box-sizing: border-box;

  display: -ms-flexbox;

  display: flex;
  -ms-flex-align: center;
      align-items: center;
  -ms-flex-pack: center;
      justify-content: center;

  border-bottom: 1px solid transparent;
  border-radius: 4px 4px 0 0;

  background-size: cover;
  background-position: center center;
}
.spectrum-Card-body {
  padding-top: 25px;
  padding-right: 30px;
  padding-bottom: 25px;
  padding-left: 30px;
}
.spectrum-Card-body:last-child {
    border-radius: 0 0 5px 5px;
  }
.spectrum-Card-preview {
  overflow: hidden;
  border-radius: 4px 4px 0 0;
}
.spectrum-Card-header {
  height: 22px;
}
.spectrum-Card-content {
  display: -ms-flexbox;
  display: flex;
  height: 18px;
  margin-top: 8px;
}
.spectrum-Card-title {
  font-size: 17px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 10px;
}
.spectrum-Card-subtitle {
  font-size: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding-right: 10px;
}
.spectrum-Card-description {
  font-size: 13px;
}
.spectrum-Card-subtitle + .spectrum-Card-description:before {
  content: "•";
  padding-right: 10px;
}
.spectrum-Card-footer {
  padding-top: 18px;
  margin-right: 30px;
  padding-bottom: 25px;
  margin-left: 30px;

  border-top: 1px solid;
}
.spectrum-Card-header {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: baseline;
      align-items: baseline;
}
.spectrum-Card-actionButton {
  -ms-flex: 1;
      flex: 1;
  -ms-flex-item-align: center;
      align-self: center;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: end;
      justify-content: flex-end;
}
/* topdoc
{{ card/card-quiet-large.yml }}
*/
/* topdoc
{{ card/card-quiet-small.yml }}
*/
/* topdoc
{{ card/card-quiet-folder.yml }}
*/
/* topdoc
{{ card/card-quiet-file.yml }}
*/
/* topdoc
{{ card/card-gallery.yml }}
*/
.spectrum-Card--quiet,
.spectrum-Card--gallery {
  width: 100%;
  height: 100%;
  min-width: 212px;
  border-width: 0;
  border-radius: 0;
  overflow: visible;
}
.spectrum-Card--quiet .spectrum-Card-preview, .spectrum-Card--gallery .spectrum-Card-preview {
    width: 100%;
    -ms-flex: 1;
        flex: 1;
    min-height: 212px;
    padding: 25px;
    margin: 0 auto;
    box-sizing: border-box;
    border-radius: 5px;
    position: relative;
    transition: background-color 130ms;
  }
/* Use a :before to show the selection outline so that the border doesn't
     * affect the layout of the content within the preview. */
.spectrum-Card--quiet .spectrum-Card-preview:before, .spectrum-Card--gallery .spectrum-Card-preview:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      border-radius: inherit;
      border: 1px solid transparent;
    }
.spectrum-Card--quiet.is-drop-target .spectrum-Card-preview, .spectrum-Card--gallery.is-drop-target .spectrum-Card-preview {
      transition: none;
    }
.spectrum-Card--quiet .spectrum-Card-header, .spectrum-Card--gallery .spectrum-Card-header {
    height: 22px;
    margin-top: 18px;
  }
.spectrum-Card--quiet .spectrum-Card-body, .spectrum-Card--gallery .spectrum-Card-body {
    padding: 0;
  }
.spectrum-Card--small {
  min-width: 112px;
}
.spectrum-Card--small .spectrum-Card-quickActions {
    left: 13px;
    top: 13px;
  }
.spectrum-Card--small .spectrum-Card-preview {
    padding: 15px;
    min-height: 112px;
  }
.spectrum-Card--small .spectrum-Card-header {
    margin-top: 10px;
    height: 15px;
  }
.spectrum-Card--small .spectrum-Card-title {
    font-size: 15px;
  }
.spectrum-Card--small .spectrum-Card-content,
  .spectrum-Card--small .spectrum-Card-subtitle,
  .spectrum-Card--small .spectrum-Card-description {
    display: none;
  }
.spectrum-Card--gallery {
  min-width: 0;
}
.spectrum-Card--gallery .spectrum-Card-preview {
    padding: 0;
    border-radius: 0;
  }`;
    }
}