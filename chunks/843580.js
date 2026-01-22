n.d(t, { A: () => u }), n(228524), n(896048);
var l = n(627968),
    i = n(64700),
    s = n(158954),
    a = n(397927),
    r = n(181658),
    c = n(946116),
    d = n(985018),
    o = n(577114);
function u(e) {
    let {
            directoryChannelId: t,
            description: n,
            onDescriptionChange: u,
            categoryId: x,
            onCategoryIdChange: m,
            onSubmit: g,
            onBack: C,
        } = e,
        [j, b] = i.useState(!1),
        [f, h] = i.useState(null),
        p = async () => {
            b(!0);
            try {
                await g();
            } catch (e) {
                h(new r.A(e));
            }
            b(!1);
        };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(s.rQ0, {
                title: d.intl.string(d.t["5bQcoa"]),
                subtitle: d.intl.string(d.t.Ie60Wc),
            }),
            (0, l.jsx)(s.cwr, {
                children: (0, l.jsxs)("div", {
                    className: o.S,
                    children: [
                        (0, l.jsx)(a.fs1, {
                            label: d.intl.string(d.t.FFFAGt),
                            value: n,
                            maxLength: 200,
                            placeholder: d.intl.string(d.t.VzuITC),
                            onChange: u,
                            error: null == f ? void 0 : f.getAnyErrorMessage(),
                        }),
                        (0, l.jsx)(a.l6P, {
                            selectionMode: "single",
                            label: d.intl.string(d.t.Olo8FB),
                            placeholder: d.intl.string(d.t.XqMe3N),
                            options: (0, c.g2)(t),
                            value: x,
                            onSelectionChange: m,
                            maxOptionsVisible: 4,
                        }),
                    ],
                }),
            }),
            (0, l.jsx)(s.H7u, {
                leading: (0, l.jsx)(a.QWc, {
                    size: "sm",
                    variant: "secondary",
                    text: d.intl.string(d.t["13/7kX"]),
                    onClick: C,
                }),
                actions: [
                    {
                        variant: "primary",
                        text: d.intl.string(d.t.H9jxS1),
                        onClick: p,
                        loading: j,
                        disabled: "" === n || x === c.mU.UNCATEGORIZED,
                    },
                ],
            }),
        ],
    });
}
