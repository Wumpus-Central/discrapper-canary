"use strict";
n.d(t, { A: () => h, s: () => A });
var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(104510),
    l = n(957485),
    o = n(926268),
    d = n(297264),
    c = n(834730),
    u = n(375708),
    _ = n(179869),
    E = n(93364);
let A = [
    { icon: s._, getText: () => u.intl.string(u.t.TZigSO) },
    {
        icon: function (e) {
            let { className: t } = e;
            return (0, i.jsx)("img", { className: a()(t, _.Dp), src: E, alt: "" });
        },
        getText: () => u.intl.string(u.t.hjQuV2),
    },
    { icon: l.i, getText: () => u.intl.string(u.t["2RUcaM"]) },
    { icon: o.C, getText: () => u.intl.string(u.t.bJoZKV) },
];
function h(e) {
    let { className: t } = e;
    return (0, i.jsxs)("div", {
        className: a()(_.iE, t),
        children: [
            (0, i.jsx)(d.D, { className: _.R_, variant: "heading-xxl/semibold", children: u.intl.string(u.t.IzKs3o) }),
            (0, i.jsx)("div", {
                className: _.kR,
                children: A.map((e, t) => {
                    let n = e.icon;
                    return (0, i.jsxs)(
                        "div",
                        {
                            className: _.Nr,
                            children: [
                                (0, i.jsx)(n, { className: _.Kk }),
                                (0, i.jsx)(c.E, {
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
