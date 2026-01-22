e.d(s, {
    default: () => u,
});
var a = e(627968);
e(64700);
var i = e(735438),
    r = e.n(i),
    l = e(330140),
    n = e(582754),
    d = e(397927),
    c = e(736653),
    g = e(915089),
    o = e(985018),
    b = e(883456),
    p = e(581446),
    x = e(913221),
    m = e(415972);
let v = [e(239686), e(87813), e(590564)],
    f = [p, x, m],
    h = [
        () => o.intl.string(o.t["w2o/60"]),
        () => o.intl.string(o.t.FiAvKg),
        () => o.intl.string(o.t.vKUFek),
        () => o.intl.string(o.t.veQl5T),
        () => o.intl.string(o.t.Pxb7BR),
        () => o.intl.string(o.t["W03w++"]),
        () => o.intl.string(o.t["95HTb5"]),
        () => o.intl.string(o.t["+XFelz"]),
        () => o.intl.string(o.t.hedHel),
        () => o.intl.string(o.t.jgC65t),
    ],
    u = (t) => {
        let { transitionState: s, onClose: e } = t,
            i = (0, c.Ay)(),
            p = (0, g.GV)(),
            x = (0, n.Mw)(i) ? f : v,
            m = (0, l.A)(() => r().sample(x), [x]),
            u = (0, l.A)(() => r().sample(h), []);
        return (0, a.jsxs)(d.EOs, {
            transitionState: s,
            className: b.zr,
            "aria-labelledby": p,
            parentComponent: "FollowSuccessModal",
            children: [
                (0, a.jsx)("img", {
                    alt: "",
                    src: m,
                    className: b.Sl,
                }),
                (0, a.jsxs)(d.$mQ, {
                    className: b.yl,
                    children: [
                        (0, a.jsx)(d.Heading, {
                            variant: "heading-xl/semibold",
                            className: b._J,
                            id: p,
                            children: u(),
                        }),
                        (0, a.jsx)(d.Text, {
                            color: "text-muted",
                            variant: "text-md/medium",
                            className: b.rf,
                            children: o.intl.string(o.t["2QbSea"]),
                        }),
                        (0, a.jsx)(d.Button, {
                            variant: "primary",
                            text: o.intl.string(o.t["+IrDzN"]),
                            onClick: e,
                        }),
                    ],
                }),
            ],
        });
    };
