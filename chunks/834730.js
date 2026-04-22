"use strict";
n.d(t, { E: () => f });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(322925),
    l = n.n(o),
    u = n(827734),
    d = n(990089),
    c = n(198964);
let _ = Object.fromEntries(Object.keys(u.A.colors).map((e) => [l()(e), e])),
    f = i.forwardRef(function (e, t) {
        let n,
            {
                variant: i,
                tag: s = "div",
                selectable: o = !1,
                className: l,
                lineClamp: f,
                color: E,
                tabularNumbers: h = !1,
                scaleFontToUserSetting: p = !1,
                ...m
            } = e,
            g = "",
            A = {};
        if (
            (null != f && (1 === f ? (g = d.DN) : ((g = d.ED), (A = { lineClamp: f, WebkitLineClamp: f }))),
            void 0 !== E)
        )
            switch (E) {
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
                    n = u.A.colors[_[E]]?.css;
            }
        let I = { color: n, ...A, ...m.style };
        return (0, r.jsx)(s, {
            ref: t,
            className: a()({ [d.fT]: void 0 === E, [d.rb]: o, [d.w9]: h, [c.fontScaling]: p }, g, c[i], l),
            ...m,
            style: Object.values(I).filter(Boolean).length > 0 ? I : void 0,
            "data-text-variant": i,
        });
    });
