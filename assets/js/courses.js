$(".course-menu-item").remove();

loadCourses();
loadSesson();
loadFooter();

function loadCourses() {
  $.getJSON("data/courses/courses.json", function (data) {
    var courses = [];

    data.forEach(function (course) {
      courses.push(
        "<h3 class='course-title'>" +
          course.title +
          "</h3><div id='" +
          course.id +
          "'></div>"
      );
    });

    $("#courses-menu").html(courses.join(""));

    data.forEach(function (course) {
      var lessons = [];

      course.lessons.forEach(function (lesson) {
        lessons.push(
          "<button onclick='onLessonClick(this)' class='lesson-title' data-course-id='" +
            course.id +
            "' data-lesson-id='" +
            lesson.id +
            "'>" +
            lesson.title +
            "</button>"
        );
      });

      $("#" + course.id).html(lessons.join(""));
    });
  });
}

function onLessonClick(button) {
  var lessonID = button.getAttribute("data-lesson-id");
  var courseID = button.getAttribute("data-course-id");
  var queryParams = "";
  var queryParamsObj = {
    lessonID: lessonID,
    courseID: courseID,
  };
  for (var prop in queryParamsObj) {
    queryParams += prop + "=" + queryParamsObj[prop];
    queryParams += "&";
  }
  document.location.search = queryParams;
}

function loadSesson() {
  const urlParams = new URLSearchParams(window.location.search);
  const courseID = urlParams.get("courseID");
  const lessonID = urlParams.get("lessonID");

  $.getJSON("data/courses/courses.json", function (data) {
    var courses = data;

    var coursesHomeList = [];

    if (!courseID || !lessonID) {
      data.forEach(function (course) {
        coursesHomeList.push(
          "<h3 class='text-center'>" +
            course.title +
            "</h3><div id='" +
            course.id +
            "'><p class='lead'>" +
            course.description +
            "</p></div>"
        );
      });

      $("#courses-home").html(coursesHomeList.join(""));
    }

    var currentCourse = courses.find((c) => c.id === courseID);
    var currentLesson = currentCourse.lessons.find((l) => l.id === lessonID);

    $.get(
      "data/courses/" +
        currentCourse.folder +
        "/" +
        currentLesson.file +
        ".html",
      function (data) {
        $("#course-text").html(data);
      }
    );
  });
}

function loadFooter() {
  app.loadPartials([
    {
      id: "#course-footer",
      path: consts.partialsPath + "footer.partial.html",
      script: consts.assetsPath + "js/footer.js",
    },
  ]);
}

$("#courses-menu-btn").click(function () {
  $("#courses-menu-wrapper").show();
});

$("#courses-menu-close-btn").click(function () {
  $("#courses-menu-wrapper").hide();
});
