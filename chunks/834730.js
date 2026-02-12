"use strict";
n.d(t, { E: () => f });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
                tag: a = "div",
                selectable: o = !1,
                className: l,
                lineClamp: f,
                color: h,
                tabularNumbers: p = !1,
                scaleFontToUserSetting: g = !1,
                ...E
            } = e,
            A = a,
            I = "",
            T = {};
        if (
            (null != f && (1 === f ? (I = c.DN) : ((I = c.ED), (T = { lineClamp: f, WebkitLineClamp: f }))),
            void 0 !== h)
        )
            switch (h) {
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
                    n = u.A.colors[_[h]]?.css;
            }
        let y = { color: n, ...T, ...E.style };
        return (0, r.jsx)(A, {
            ref: t,
            className: s()({ [c.fT]: void 0 === h, [c.rb]: o, [c.w9]: p, [d.fontScaling]: g }, I, d[i], l),
            ...E,
            style: Object.values(y).filter(Boolean).length > 0 ? y : void 0,
            "data-text-variant": i,
        });
    });
