"use strict";
var r = n(860511),
    o = n(257943),
    a = n(485155),
    i = n(693510),
    u = n(503628),
    s = r.RegExp,
    l = s.prototype;
o &&
    u(function () {
        var e = !0;
        try {
            s(".", "d");
        } catch (t) {
            e = !1;
        }
        var t = {},
            n = "",
            r = e ? "dgimsy" : "gimsy",
            o = function (e, r) {
                Object.defineProperty(t, e, {
                    get: function () {
                        return (n += r), !0;
                    },
                });
            },
            a = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
        for (var i in (e && (a.hasIndices = "d"), a)) o(i, a[i]);
        return Object.getOwnPropertyDescriptor(l, "flags").get.call(t) !== r || n !== r;
    }) &&
    a(l, "flags", { configurable: !0, get: i });
