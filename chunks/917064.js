n.d(t, { A: () => h, s: () => C });
var r = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    o = n(104510),
    l = n(179866),
    s = n(926268),
    d = n(534514),
    u = n(834730),
    c = n(985018),
    _ = n(502997),
    p = n(93364);
let C = [
    { icon: o._, getText: () => c.intl.string(c.t.TZigSO) },
    {
        icon: function (e) {
            let { className: t } = e;
            return (0, r.jsx)("img", { className: i()(t, _.Dp), src: p, alt: "" });
        },
        getText: () => c.intl.string(c.t.hjQuV2),
    },
    { icon: l.i, getText: () => c.intl.string(c.t["2RUcaM"]) },
    { icon: s.C, getText: () => c.intl.string(c.t.bJoZKV) },
];
function h(e) {
    let { className: t } = e;
    return (0, r.jsxs)("div", {
        className: i()(_.iE, t),
        children: [
            (0, r.jsx)(d.D, { className: _.R_, variant: "heading-xxl/semibold", children: c.intl.string(c.t.IzKs3o) }),
            (0, r.jsx)("div", {
                className: _.kR,
                children: C.map((e, t) => {
                    let n = e.icon;
                    return (0, r.jsxs)(
                        "div",
                        {
                            className: _.Nr,
                            children: [
                                (0, r.jsx)(n, { className: _.Kk }),
                                (0, r.jsx)(u.E, {
                                    className: _.h_,
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
