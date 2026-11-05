var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(282802),
    l = n.n(s),
    o = n(646514),
    d = n(108306),
    c = n(736541);
let u = Object.fromEntries(Object.keys(o.A.colors).map((e) => [l()(e), e]));
n.d(
    t,
    {},
    {
        E: function (e) {
            let t,
                {
                    variant: n,
                    tag: r = "div",
                    selectable: s = !1,
                    className: l,
                    lineClamp: _,
                    color: E,
                    tabularNumbers: A = !1,
                    scaleFontToUserSetting: h = !1,
                    ref: f,
                    ...I
                } = e,
                p = "",
                m = {};
            if (
                (null != _ && (1 === _ ? (p = d.DN) : ((p = d.ED), (m = { lineClamp: _, WebkitLineClamp: _ }))),
                void 0 !== E)
            )
                switch (E) {
                    case "currentColor":
                        t = "currentColor";
                        break;
                    case "none":
                        t = void 0;
                        break;
                    default:
                        t = o.A.colors[u[E]]?.css;
                }
            let g = { color: t, ...m, ...I.style };
            return (0, i.jsx)(r, {
                ref: f,
                className: a()({ [d.fT]: void 0 === E, [d.rb]: s, [d.w9]: A, [c.fontScaling]: h }, p, c[n], l),
                ...I,
                style: Object.values(g).filter(Boolean).length > 0 ? g : void 0,
                "data-text-variant": n,
            });
        },
    },
);
