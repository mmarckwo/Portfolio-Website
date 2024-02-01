function init() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  // empty anchor leads to home page, else check for valid page.
  if (pageID == "") {
    changePage(pageID);
  } else if (
    pageID == "projects" ||
    pageID == "contact" ||
    pageID == "ae" ||
    pageID == "gds" ||
    pageID == "EventManagerApp" ||
    pageID == "MixOfAges" ||
    pageID == "Breakout" ||
    pageID == "MultiplayerGroupProject" ||
    pageID == "Spellgrounds" ||
    pageID == "GrimPickings" ||
    pageID == "IMCU"
  ) {
    changePage(pageID);
  } else {
    // invalid page redirects to home instead.
    window.location.hash = "";
    changePage("");
  }
}

function changePage(pageID, callback) {
  // valid page sets user's view to appropriate page.
  if (pageID == "") {
    $.get(`pages/main.html`, function (data) {
      $("#content").html(data);
      if (callback) {
        callback();
      }
    });
  } else if (pageID == "projects") {
    $.get(`pages/projects.html`, function (data) {
      $("#content").html(data);
      if (callback) {
        callback();
      }
    });
  } else if (pageID == "contact") {
    $.get(`pages/contact.html`, function (data) {
      $("#content").html(data);
      if (callback) {
        callback();
      }
    });
  } else if (pageID == "ae") {
    $.get(`pages/projects/alienescape.html`, function (data) {
      $("#content").html(data);
      if (callback) {
        callback();
      }
    });
  } else if (pageID == "gds") {
    $.get(`pages/projects/globaldigitalservices.html`, function (data) {
      $("#content").html(data);
      if (callback) {
        callback();
      }
    });
  } else if (pageID == "EventManagerApp") {
    $.get(`pages/projects/eventmanager.html`, function (data) {
      $("#content").html(data);
      if (callback) {
        callback();
      }
    });
  } else if (pageID == "MixOfAges") {
    $.get(`pages/projects/MoA.html`, function (data) {
      $("#content").html(data);
      if (callback) {
        callback();
      }
    });
  } else if (pageID == "Breakout") {
    $.get(`pages/projects/breakoutIntro.html`, function (data) {
      $("#content").html(data);
      if (callback) {
        callback();
      }
    });
  } else if (pageID == "MultiplayerGroupProject") {
    $.get(`pages/projects/multiplayerUnity.html`, function (data) {
      $("#content").html(data);
      if (callback) {
        callback();
      }
    });
  } else if (pageID == "Spellgrounds") {
    $.get(`pages/projects/spellgrounds.html`, function (data) {
      $("#content").html(data);
      if (callback) {
        callback();
      }
    });
  } else if (pageID == "GrimPickings") {
    $.get(`pages/projects/grimpickings.html`, function (data) {
      $("#content").html(data);
      if (callback) {
        callback();
      }
    });
  } else if (pageID == "IMCU") {
    $.get(`pages/projects/imcu.html`, function (data) {
      $("#content").html(data);
      if (callback) {
        callback();
      }
    });
  }

  // after changing the page, set the scrollbar to the top of it.
  window.scrollTo(0, 0);
}

// checks for all the elements to be read by the browser.
$(document).ready(function () {
  init();
});
