e.d(t, { default: () => o });
var i = e(477900),
    s = e(582128),
    r = e(732159),
    c = e(834730),
    l = e(150934),
    a = e(375708),
    d = e(551802);
function o(n) {
    let { title: t, body: e, onSubmit: o, ...u } = n,
        [h, p] = s.useState(!1);
    return (0, i.jsxs)(r.u, {
        title: t,
        confirmText: a.intl.string(a.t["26C4oi"]),
        cancelText: a.intl.string(a.t["ETE/oC"]),
        onConfirm: function () {
            o(null, h);
        },
        ...u,
        children: [
            (0, i.jsx)(c.E, { variant: "text-md/normal", children: e }),
            (0, i.jsx)("div", {
                className: d.k,
                children: (0, i.jsx)(l.S, {
                    checked: h,
                    onChange: function () {
                        return p((n) => !n);
                    },
                    label: a.intl.string(a.t.bq3JXs),
                    labelType: "secondary",
                }),
            }),
        ],
    });
}
