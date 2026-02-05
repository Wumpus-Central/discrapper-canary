"use strict";
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(985018),
    l = n(463006),
    u = n(93364);
function c(e) {
    let { className: t } = e;
    return (0, r.jsx)("img", { className: a()(t, l.Dp), src: u, alt: "" });
}
let d = [
    { icon: s._Jp, getText: () => o.intl.string(o.t.TZigSO) },
    { icon: c, getText: () => o.intl.string(o.t.hjQuV2) },
    { icon: s.iTF, getText: () => o.intl.string(o.t["2RUcaM"]) },
    { icon: s.C3E, getText: () => o.intl.string(o.t.bJoZKV) },
];
function _(e) {
    let { className: t } = e;
    return (0, r.jsxs)("div", {
        className: a()(l.iE, t),
        children: [
            (0, r.jsx)(s.Heading, {
                className: l.R_,
                variant: "heading-xxl/semibold",
                children: o.intl.string(o.t.IzKs3o),
            }),
            (0, r.jsx)("div", {
                className: l.kR,
                children: d.map((e, t) => {
                    let n = e.icon;
                    return (0, r.jsxs)(
                        "div",
                        {
                            className: l.Nr,
                            children: [
                                (0, r.jsx)(n, { className: l.Kk }),
                                (0, r.jsx)(s.Text, {
                                    className: l.h_,
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
