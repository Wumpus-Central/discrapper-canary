"use strict";
var n,
    o = e(155084),
    s = e(51784),
    i = e(940580),
    u = e(760326),
    c = e(784932),
    a = e(273900),
    f = e(157494),
    p = "prototype",
    l = "script",
    v = f("IE_PROTO"),
    y = function () {},
    h = function (t) {
        return "<" + l + ">" + t + "</" + l + ">";
    },
    x = function (t) {
        t.write(h("")), t.close();
        var r = t.parentWindow.Object;
        return (t = null), r;
    },
    d = function () {
        var t,
            r = a("iframe");
        return (
            (r.style.display = "none"),
            c.appendChild(r),
            (r.src = String("java" + l + ":")),
            (t = r.contentWindow.document).open(),
            t.write(h("document.F=Object")),
            t.close(),
            t.F
        );
    },
    g = function () {
        try {
            n = new ActiveXObject("htmlfile");
        } catch (t) {}
        g = "u" > typeof document ? (document.domain && n ? x(n) : d()) : x(n);
        for (var t = i.length; t--; ) delete g[p][i[t]];
        return g();
    };
(u[v] = !0),
    (t.exports =
        Object.create ||
        function (t, r) {
            var e;
            return (
                null !== t ? ((y[p] = o(t)), (e = new y()), (y[p] = null), (e[v] = t)) : (e = g()),
                void 0 === r ? e : s.f(e, r)
            );
        });
