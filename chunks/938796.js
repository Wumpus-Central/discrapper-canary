"use strict";
var i = n(860511),
    r = n(257943),
    s = n(485155),
    a = n(693510),
    o = n(503628),
    l = i.RegExp,
    u = l.prototype;
r &&
    o(function () {
        var e = !0;
        try {
            l(".", "d");
        } catch (t) {
            e = !1;
        }
        var t = {},
            n = "",
            i = e ? "dgimsy" : "gimsy",
            r = function (e, i) {
                Object.defineProperty(t, e, {
                    get: function () {
                        return (n += i), !0;
                    },
                });
            },
            s = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
        for (var a in (e && (s.hasIndices = "d"), s)) r(a, s[a]);
        return Object.getOwnPropertyDescriptor(u, "flags").get.call(t) !== i || n !== i;
    }) &&
    s(u, "flags", { configurable: !0, get: a });
