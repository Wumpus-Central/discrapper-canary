"use strict";
n.d(t, { A: () => _, s: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(985018),
    l = n(895836),
    u = n(93364);
function c(e) {
    let { className: t } = e;
    return (0, r.jsx)("img", { className: s()(t, l.Dp), src: u, alt: "" });
}
let d = [
    { icon: a._Jp, getText: () => o.intl.string(o.t.TZigSO) },
    { icon: c, getText: () => o.intl.string(o.t.hjQuV2) },
    { icon: a.iTF, getText: () => o.intl.string(o.t["2RUcaM"]) },
    { icon: a.C3E, getText: () => o.intl.string(o.t.bJoZKV) },
];
function _(e) {
    let { className: t } = e;
    return (0, r.jsxs)("div", {
        className: s()(l.iE, t),
        children: [
            (0, r.jsx)(a.Heading, {
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
                                (0, r.jsx)(a.Text, {
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
