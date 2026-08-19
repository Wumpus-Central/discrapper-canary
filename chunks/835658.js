e.exports = function (e) {
    var t = !0,
        r = !0,
        n = !1;
    if ("function" == typeof e) {
        try {
            e.call("f", function (e, r, n) {
                "object" != typeof n && (t = !1);
            }),
                e.call(
                    [null],
                    function () {
                        "use strict";
                        r = "string" == typeof this;
                    },
                    "x",
                );
        } catch (e) {
            n = !0;
        }
        return !n && t && r;
    }
    return !1;
};
