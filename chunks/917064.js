i.d(t, { A: () => x, s: () => g });
var s = i(627968);
i(64700);
var l = i(503698),
    a = i.n(l),
    n = i(104510),
    r = i(179866),
    c = i(926268),
    o = i(534514),
    d = i(834730),
    u = i(985018),
    m = i(502997),
    T = i(93364);
let g = [
    { icon: n._, getText: () => u.intl.string(u.t.TZigSO) },
    {
        icon: function (e) {
            let { className: t } = e;
            return (0, s.jsx)("img", { className: a()(t, m.Dp), src: T, alt: "" });
        },
        getText: () => u.intl.string(u.t.hjQuV2),
    },
    { icon: r.i, getText: () => u.intl.string(u.t["2RUcaM"]) },
    { icon: c.C, getText: () => u.intl.string(u.t.bJoZKV) },
];
function x(e) {
    let { className: t } = e;
    return (0, s.jsxs)("div", {
        className: a()(m.iE, t),
        children: [
            (0, s.jsx)(o.D, { className: m.R_, variant: "heading-xxl/semibold", children: u.intl.string(u.t.IzKs3o) }),
            (0, s.jsx)("div", {
                className: m.kR,
                children: g.map((e, t) => {
                    let i = e.icon;
                    return (0, s.jsxs)(
                        "div",
                        {
                            className: m.Nr,
                            children: [
                                (0, s.jsx)(i, { className: m.Kk }),
                                (0, s.jsx)(d.E, {
                                    className: m.h_,
                                    color: "text-muted",
                                    variant: "text-md/medium",
                                    children: e.getText(),
                                }),
                            ],
                        },
                        t,
                    );
                }),
            }),
        ],
    });
}
