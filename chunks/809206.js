"use strict";
var n = r(797686),
    i = /\.textClipping$/,
    o = { "text/plain": !0, "text/html": !0, "text/rtf": !0 };
t.exports = function (t, e) {
    var a = 0,
        s = [];
    t.forEach(function (u) {
        !(function (t, e) {
            if (!r.g.FileReader || (t.type && !(t.type in o))) return e("");
            if ("" === t.type) {
                var a = "";
                i.test(t.name) && (a = t.name.replace(i, "")), e(a);
                return;
            }
            var s = new FileReader();
            (s.onload = function () {
                var t = s.result;
                "string" != typeof t && n(!1), e(t);
            }),
                (s.onerror = function () {
                    e("");
                }),
                s.readAsText(t);
        })(u, function (r) {
            a++, r && s.push(r.slice(0, 5e3)), a == t.length && e(s.join("\r"));
        });
    });
};
