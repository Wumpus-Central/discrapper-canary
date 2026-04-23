l.d(t, { A: () => g });
var i = l(627968),
    s = l(64700),
    a = l(20742),
    n = l(430993),
    r = l(696208),
    c = l(260598),
    d = l(691885),
    o = l(123292),
    u = l(181658),
    m = l(946116),
    x = l(985018),
    C = l(929453);
function g(e) {
    let {
            directoryChannelId: t,
            description: l,
            onDescriptionChange: g,
            categoryId: h,
            onCategoryIdChange: j,
            onSubmit: L,
            onBack: _,
        } = e,
        [p, f] = s.useState(!1),
        [A, v] = s.useState(null),
        S = async () => {
            f(!0);
            try {
                await L();
            } catch (e) {
                v(new u.A(e));
            }
            f(!1);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.rQ, { title: x.intl.string(x.t["5bQcoa"]), subtitle: x.intl.string(x.t.Ie60Wc) }),
            (0, i.jsx)(n.c, {
                children: (0, i.jsxs)("div", {
                    className: C.S,
                    children: [
                        (0, i.jsx)(c.f, {
                            label: x.intl.string(x.t.FFFAGt),
                            value: l,
                            maxLength: 200,
                            placeholder: x.intl.string(x.t.VzuITC),
                            onChange: g,
                            error: A?.getAnyErrorMessage(),
                        }),
                        (0, i.jsx)(d.l, {
                            selectionMode: "single",
                            label: x.intl.string(x.t.Olo8FB),
                            placeholder: x.intl.string(x.t.XqMe3N),
                            options: (0, m.g2)(t),
                            value: h,
                            onSelectionChange: j,
                            maxOptionsVisible: 4,
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(r.H, {
                leading: (0, i.jsx)(o.Q, {
                    size: "sm",
                    variant: "secondary",
                    text: x.intl.string(x.t["13/7kX"]),
                    onClick: _,
                }),
                actions: [
                    {
                        variant: "primary",
                        text: x.intl.string(x.t.H9jxS1),
                        onClick: S,
                        loading: p,
                        disabled: "" === l || h === m.mU.UNCATEGORIZED,
                    },
                ],
            }),
        ],
    });
}
