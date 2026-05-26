n.d(t, { A: () => x, s: () => g });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(104510),
    a = n(957485),
    o = n(926268),
    c = n(534514),
    d = n(834730),
    u = n(375708),
    m = n(502997),
    h = n(93364);
let g = [
    { icon: r._, getText: () => u.intl.string(u.t.TZigSO) },
    {
        icon: function (e) {
            let { className: t } = e;
            return (0, i.jsx)("img", { className: s()(t, m.Dp), src: h, alt: "" });
        },
        getText: () => u.intl.string(u.t.hjQuV2),
    },
    { icon: a.i, getText: () => u.intl.string(u.t["2RUcaM"]) },
    { icon: o.C, getText: () => u.intl.string(u.t.bJoZKV) },
];
function x(e) {
    let { className: t } = e;
    return (0, i.jsxs)("div", {
        className: s()(m.iE, t),
        children: [
            (0, i.jsx)(c.D, { className: m.R_, variant: "heading-xxl/semibold", children: u.intl.string(u.t.IzKs3o) }),
            (0, i.jsx)("div", {
                className: m.kR,
                children: g.map((e, t) => {
                    let n = e.icon;
                    return (0, i.jsxs)(
                        "div",
                        {
                            className: m.Nr,
                            children: [
                                (0, i.jsx)(n, { className: m.Kk }),
                                (0, i.jsx)(d.E, {
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
