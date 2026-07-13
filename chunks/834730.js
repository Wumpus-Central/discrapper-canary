"use strict";
n.d(t, { E: () => E });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(322925),
    o = n.n(l),
    d = n(661531),
    c = n(990089),
    u = n(198964);
let _ = Object.fromEntries(Object.keys(d.A.colors).map((e) => [o()(e), e])),
    E = r.forwardRef(function (e, t) {
        let n,
            {
                variant: r,
                tag: a = "div",
                selectable: l = !1,
                className: o,
                lineClamp: E,
                color: A,
                tabularNumbers: h = !1,
                scaleFontToUserSetting: I = !1,
                ...f
            } = e,
            p = "",
            T = {};
        if (
            (null != E && (1 === E ? (p = c.DN) : ((p = c.ED), (T = { lineClamp: E, WebkitLineClamp: E }))),
            void 0 !== A)
        )
            switch (A) {
                case "currentColor":
                    n = "currentColor";
                    break;
                case "none":
                    n = void 0;
                    break;
                default:
                    n = d.A.colors[_[A]]?.css;
            }
        let m = { color: n, ...T, ...f.style };
        return (0, i.jsx)(a, {
            ref: t,
            className: s()({ [c.fT]: void 0 === A, [c.rb]: l, [c.w9]: h, [u.fontScaling]: I }, p, u[r], o),
            ...f,
            style: Object.values(m).filter(Boolean).length > 0 ? m : void 0,
            "data-text-variant": r,
        });
    });
