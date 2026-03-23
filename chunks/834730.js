"use strict";
n.d(t, { E: () => f });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(322925),
    l = n.n(o),
    u = n(827734),
    c = n(845188),
    d = n(60639);
let _ = Object.fromEntries(Object.keys(u.A.colors).map((e) => [l()(e), e])),
    f = i.forwardRef(function (e, t) {
        let n,
            {
                variant: i,
                tag: s = "div",
                selectable: o = !1,
                className: l,
                lineClamp: f,
                color: p,
                tabularNumbers: h = !1,
                scaleFontToUserSetting: m = !1,
                ...E
            } = e,
            g = s,
            A = "",
            I = {};
        if (
            (null != f && (1 === f ? (A = c.DN) : ((A = c.ED), (I = { lineClamp: f, WebkitLineClamp: f }))),
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
                    n = u.A.colors[_[p]]?.css;
            }
        let T = { color: n, ...I, ...E.style };
        return (0, r.jsx)(g, {
            ref: t,
            className: a()({ [c.fT]: void 0 === p, [c.rb]: o, [c.w9]: h, [d.fontScaling]: m }, A, d[i], l),
            ...E,
            style: Object.values(T).filter(Boolean).length > 0 ? T : void 0,
            "data-text-variant": i,
        });
    });
