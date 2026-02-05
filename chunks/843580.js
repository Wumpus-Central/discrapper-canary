l.d(t, { A: () => u });
var i = l(627968),
    s = l(64700),
    a = l(158954),
    n = l(397927),
    r = l(181658),
    c = l(946116),
    d = l(985018),
    o = l(577114);
function u(e) {
    let {
            directoryChannelId: t,
            description: l,
            onDescriptionChange: u,
            categoryId: x,
            onCategoryIdChange: m,
            onSubmit: C,
            onBack: g,
        } = e,
        [h, j] = s.useState(!1),
        [L, _] = s.useState(null),
        f = async () => {
            j(!0);
            try {
                await C();
            } catch (e) {
                _(new r.A(e));
            }
            j(!1);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.rQ0, { title: d.intl.string(d.t["5bQcoa"]), subtitle: d.intl.string(d.t.Ie60Wc) }),
            (0, i.jsx)(a.cwr, {
                children: (0, i.jsxs)("div", {
                    className: o.S,
                    children: [
                        (0, i.jsx)(n.fs1, {
                            label: d.intl.string(d.t.FFFAGt),
                            value: l,
                            maxLength: 200,
                            placeholder: d.intl.string(d.t.VzuITC),
                            onChange: u,
                            error: L?.getAnyErrorMessage(),
                        }),
                        (0, i.jsx)(n.l6P, {
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
            (0, i.jsx)(a.H7u, {
                leading: (0, i.jsx)(n.QWc, {
                    size: "sm",
                    variant: "secondary",
                    text: d.intl.string(d.t["13/7kX"]),
                    onClick: g,
                }),
                actions: [
                    {
                        variant: "primary",
                        text: d.intl.string(d.t.H9jxS1),
                        onClick: f,
                        loading: h,
                        disabled: "" === l || x === c.mU.UNCATEGORIZED,
                    },
                ],
            }),
        ],
    });
}
