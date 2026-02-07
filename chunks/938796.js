var n = t(860511),
    o = t(257943),
    a = t(485155),
    i = t(693510),
    s = t(503628),
    u = n.RegExp,
    l = u.prototype;
o &&
    s(function () {
        var r = !0;
        try {
            u(".", "d");
        } catch (e) {
            r = !1;
        }
        var e = {},
            t = "",
            n = r ? "dgimsy" : "gimsy",
            o = function (r, n) {
                Object.defineProperty(e, r, {
                    get: function () {
                        return (t += n), !0;
                    },
                });
            },
            a = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
        for (var i in (r && (a.hasIndices = "d"), a)) o(i, a[i]);
        return Object.getOwnPropertyDescriptor(l, "flags").get.call(e) !== n || t !== n;
    }) &&
    a(l, "flags", { configurable: !0, get: i });
