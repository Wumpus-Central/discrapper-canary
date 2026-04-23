"use strict";
n.d(t, { A: () => h, s: () => p });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(104510),
    o = n(179866),
    l = n(926268),
    u = n(534514),
    c = n(834730),
    d = n(985018),
    _ = n(502997),
    f = n(93364);
let p = [
    { icon: a._, getText: () => d.intl.string(d.t.TZigSO) },
    {
        icon: function (e) {
            let { className: t } = e;
            return (0, r.jsx)("img", { className: s()(t, _.Dp), src: f, alt: "" });
        },
        getText: () => d.intl.string(d.t.hjQuV2),
    },
    { icon: o.i, getText: () => d.intl.string(d.t["2RUcaM"]) },
    { icon: l.C, getText: () => d.intl.string(d.t.bJoZKV) },
];
function h(e) {
    let { className: t } = e;
    return (0, r.jsxs)("div", {
        className: s()(_.iE, t),
        children: [
            (0, r.jsx)(u.D, { className: _.R_, variant: "heading-xxl/semibold", children: d.intl.string(d.t.IzKs3o) }),
            (0, r.jsx)("div", {
                className: _.kR,
                children: p.map((e, t) => {
                    let n = e.icon;
                    return (0, r.jsxs)(
                        "div",
                        {
                            className: _.Nr,
                            children: [
                                (0, r.jsx)(n, { className: _.Kk }),
                                (0, r.jsx)(c.E, {
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
