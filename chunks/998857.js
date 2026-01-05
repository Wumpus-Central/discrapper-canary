n.d(t, { Z: () => f }), n(953529);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(388032),
    l = n(978333),
    c = n(247844);
function u(e) {
    let { className: t } = e;
    return (0, r.jsx)("img", {
        className: a()(t, l.iconImage),
        src: c,
        alt: "",
    });
}
let d = [
    {
        icon: o.$zw,
        getText: () => s.intl.string(s.t.TZigSO),
    },
    {
        icon: u,
        getText: () => s.intl.string(s.t.hjQuV2),
    },
    {
        icon: o.lZ8,
        getText: () => s.intl.string(s.t["2RUcaM"]),
    },
    {
        icon: o.h_8,
        getText: () => s.intl.string(s.t.bJoZKV),
    },
];
function f(e) {
    let { className: t } = e;
    return (0, r.jsxs)("div", {
        className: a()(l.wrapper, t),
        children: [
            (0, r.jsx)(o.Heading, {
                className: l.heading,
                variant: "heading-xxl/semibold",
                children: s.intl.string(s.t.IzKs3o),
            }),
            (0, r.jsx)("div", {
                className: l.cards,
                children: d.map((e, t) => {
                    let n = e.icon;
                    return (0, r.jsxs)(
                        "div",
                        {
                            className: l.card,
                            children: [
                                (0, r.jsx)(n, { className: l.icon }),
                                (0, r.jsx)(o.Text, {
                                    className: l.description,
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
