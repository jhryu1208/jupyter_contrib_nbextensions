define([
  "base/js/namespace",
  "jquery",
  "require",
  "./theme_controller"
], function(Jupyter, $, requirejs, ThemesController) {
  "use strict";

  var Themes = function() {};

  Themes.prototype.createThemeMenu = function() {
    var themeButton = $("[title='Custom themes']");
    var themediv = $("<div>", { style: "display:inline", class: "btn-group" });
    themeButton.parent().append(themediv);
    themediv.append(themeButton);

    themeButton
      .addClass("dropdown-toggle main-btn")
      .attr("data-toggle", "dropdown");
    themeButton.attr("id", "theme");

    var dropDownMenu = $("<ul/>").addClass("dropdown-menu dropdown-menu-style");
    dropDownMenu.attr("id", "theme_dropdown");

    var menuItem1 = $("<li/>", { class: "text-center switch" }).text(
      "{% trans %}OFF\xa0\xa0{% endtrans %}"
    );
    var theme1 = $("<div/>", { class: "text-center" }).text(
      "{% trans %}Dark Mode{% endtrans %}"
    );
    var switchToggle = $("<input/>")
      .attr("id", "darkToggle")
      .attr("type", "checkbox")
      .attr("data-toggle", "toggle")
      .attr("data-style", "ios")
      .attr("data-onstyle", "warning")
      .attr("data-width", "58")
      .attr("data-on", " ")
      .attr("data-off", " ");
    var offText = $("<p>", { style: "display:inline" }).text(
      "{% trans %}\xa0\xa0ON{% endtrans %}"
    );
    menuItem1.append(switchToggle);
    menuItem1.append(offText);
    dropDownMenu.append(theme1);

    dropDownMenu.append(menuItem1);

    var line_break = $("<br/>");
    dropDownMenu.append(line_break);

    var theme2 = $("<div/>", { class: "text-center" }).text(
      "{% trans %}High Contrast{% endtrans %}"
    );
    var menuItem2 = $("<li/>", { class: "text-center switch" }).text(
      "{% trans %}OFF\xa0\xa0{% endtrans %}"
    );
    var switchToggle2 = $("<input/>")
      .attr("id", "highToggle")
      .attr("type", "checkbox")
      .attr("data-toggle", "toggle")
      .attr("data-style", "ios")
      .attr("data-onstyle", "warning")
      .attr("data-width", "58")
      .attr("data-on", " ")
      .attr("data-off", " ");
    var offText2 = $("<p>", { style: "display:inline" }).text(
      "{% trans %}\xa0\xa0ON{% endtrans %}"
    );
    menuItem2.append(switchToggle2);
    menuItem2.append(offText2);
    dropDownMenu.append(theme2);
    dropDownMenu.append(menuItem2);

    themeButton.parent().append(dropDownMenu);

    $(document).on("click", "#theme", function(e) {
      e.stopPropagation();
    });
    $(document).on("click", "#theme_dropdown", function(e) {
      e.stopPropagation();
    });

    console.log("Themes Menu created");

    var themesController_object = new ThemesController();
    themesController_object.theme_change();
  };
  return Themes;
});
