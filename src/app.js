let options = INSTALL_OPTIONS
let element

function updateElement () {
  if (!window.addEventListener) {
    return;
  }

  if (!INSTALL.matchPage(options.pages)) {
    return;
  }

  if (!options.gameUrl) {
    return;
  }

  element = INSTALL.createElement(options.location, element);

  element.innerHTML = `<iframe
    width="736px"
    height="414px"
    src="${ options.gameUrl }"
  ></iframe>`;
}

window.INSTALL_SCOPE = {
  setOptions: function setOptions(nextOptions) {
    options = nextOptions

    updateElement()
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateElement)
} else {
  updateElement()
}
