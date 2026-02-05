e.d(s, { default: () => u });
var a = e(627968);
e(64700);
var i = e(735438),
    l = e.n(i),
    r = e(330140),
    n = e(582754),
    d = e(397927),
    o = e(736653),
    c = e(915089),
    g = e(985018),
    p = e(883456),
    x = e(581446),
    m = e(913221),
    v = e(415972);
let _ = [e(239686), e(87813), e(590564)],
    b = [x, m, v],
    h = [
        () => g.intl.string(g.t["w2o/60"]),
        () => g.intl.string(g.t.FiAvKg),
        () => g.intl.string(g.t.vKUFek),
        () => g.intl.string(g.t.veQl5T),
        () => g.intl.string(g.t.Pxb7BR),
        () => g.intl.string(g.t["W03w++"]),
        () => g.intl.string(g.t["95HTb5"]),
        () => g.intl.string(g.t["+XFelz"]),
        () => g.intl.string(g.t.hedHel),
        () => g.intl.string(g.t.jgC65t),
    ],
    u = (t) => {
        let { transitionState: s, onClose: e } = t,
            i = (0, o.Ay)(),
            x = (0, c.GV)(),
            m = (0, n.Mw)(i) ? b : _,
            v = (0, r.A)(() => l().sample(m), [m]),
            u = (0, r.A)(() => l().sample(h), []);
        return (0, a.jsxs)(d.EOs, {
            transitionState: s,
            className: p.zr,
            "aria-labelledby": x,
            parentComponent: "FollowSuccessModal",
            children: [
                (0, a.jsx)("img", { alt: "", src: v, className: p.Sl }),
                (0, a.jsxs)(d.$mQ, {
                    className: p.yl,
                    children: [
                        (0, a.jsx)(d.Heading, {
                            variant: "heading-xl/semibold",
                            className: p._J,
                            id: x,
                            children: u(),
                        }),
                        (0, a.jsx)(d.Text, {
                            color: "text-muted",
                            variant: "text-md/medium",
                            className: p.rf,
                            children: g.intl.string(g.t["2QbSea"]),
                        }),
                        (0, a.jsx)(d.Button, { variant: "primary", text: g.intl.string(g.t["+IrDzN"]), onClick: e }),
                    ],
                }),
            ],
        });
    };
