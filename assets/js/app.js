"use strict";

var app = {
  loadPartials: function(partials) {
    partials.forEach(function(partial) {
      $(partial.id).load(partial.path, function() {
        if (partial.script) {
          $.getScript(partial.script);
        }
      });
    });
  },
  addScript: function(script) {
    $.getScript(script);
  },
  states: [],
  addStates: function(states) {
    this.states = this.states.concat(states);
  },
  loadState: function(name, params, pushHistory = true) {
    this.states.forEach(function(state) {
      if (state.name === name) {
        $("#states").load(state.path, function() {
          $.getScript(state.script);
        });
        if (pushHistory) {
          window.history.pushState(params, "", "#" + state.name);
        }
        if (state.name === "courses") {
          $("#footer").css("display", "none");
        } else {
          $("#footer").css("display", "block");
        }
        document.title = state.title;
        window.scrollTo(0, 0);
      }
    });
  },
  loadStateFromHash: function() {
    app.loadState(location.hash.substr(1), null);
  },
  getStateParams: function() {
    return history.state;
  }
};

window.onhashchange = function() {
  app.loadState(location.hash.substr(1), null, false);
};
