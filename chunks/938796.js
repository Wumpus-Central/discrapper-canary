"use strict";
var n = r(860511),
    a = r(257943),
    s = r(485155),
    i = r(693510),
    o = r(503628),
    l = n.RegExp,
    u = l.prototype;
a &&
    o(function () {
        var e = !0;
        try {
            l(".", "d");
        } catch (t) {
            e = !1;
        }
        var t = {},
            r = "",
            n = e ? "dgimsy" : "gimsy",
            a = function (e, n) {
                Object.defineProperty(t, e, {
                    get: function () {
                        return (r += n), !0;
                    },
                });
            },
            s = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
        for (var i in (e && (s.hasIndices = "d"), s)) a(i, s[i]);
        return Object.getOwnPropertyDescriptor(u, "flags").get.call(t) !== n || r !== n;
    }) &&
    s(u, "flags", { configurable: !0, get: i });
