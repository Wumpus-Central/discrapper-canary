"use strict";
n.d(t, { E: () => f });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(322925),
    l = n.n(o),
    u = n(661531),
    c = n(124336),
    d = n(990089),
    _ = n(198964);
let h = Object.fromEntries(Object.keys(u.A.colors).map((e) => [l()(e), e])),
    f = r.forwardRef(function (e, t) {
        let n,
            {
                variant: r,
                tag: s = "div",
                selectable: o = !1,
                className: l,
                lineClamp: f,
                color: p,
                tabularNumbers: E = !1,
                scaleFontToUserSetting: m = !1,
                ...g
            } = e,
            A = "",
            I = {};
        if (
            (null != f && (1 === f ? (A = d.DN) : ((A = d.ED), (I = { lineClamp: f, WebkitLineClamp: f }))),
            void 0 !== p)
        )
            switch (p) {
                case "currentColor":
                    n = "currentColor";
                    break;
                case "none":
                    n = void 0;
                    break;
                case "always-white":
                    n = "white";
                    break;
                default:
                    n = u.A.colors[h[p]]?.css;
            }
        let T = { color: n, ...I, ...g.style },
            S = (0, c.p)(r, !1);
        return (0, i.jsx)(s, {
            ref: t,
            className: a()({ [d.fT]: void 0 === p, [d.rb]: o, [d.w9]: E, [_.fontScaling]: m }, A, _[S], l),
            ...g,
            style: Object.values(T).filter(Boolean).length > 0 ? T : void 0,
            "data-text-variant": r,
        });
    });
