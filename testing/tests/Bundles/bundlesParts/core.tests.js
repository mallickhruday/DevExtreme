var $ = require("jquery");

QUnit.test("core", function(assert) {

    $.each([
        "processHardwareBackButton",
        "hideTopOverlay",
        "EventsMixin",
        "devices",
        "registerComponent"
    ], function(_, namespace) {
        assert.ok(DevExpress[namespace], "DevExpress." + namespace + " present");
    });

});
