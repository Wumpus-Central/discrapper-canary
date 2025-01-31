l.d(t, { default: () => c }), l(47120);
var n = l(200651),
    s = l(192379),
    a = l(481060),
    i = l(388032);
function c(e) {
    let {
            modalProps: t,
            settings: { onConfirm: l, ...c }
        } = e,
        [r, d] = s.useState({
            Account: {
                value: 'Account',
                label: i.intl.string(i.t['rfe/x8']),
                checked: !1
            },
            Analytics: {
                value: 'Analytics',
                label: i.intl.string(i.t['j+d6RE']),
                checked: !1
            },
            Activities: {
                value: 'Activities',
                label: i.intl.string(i.t.KO88BQ),
                checked: !1
            },
            Messages: {
                value: 'Messages',
                label: i.intl.string(i.t['0dO1t7']),
                checked: !1
            },
            Programs: {
                value: 'Programs',
                label: i.intl.string(i.t.M4ddeX),
                checked: !1
            },
            Servers: {
                value: 'Servers',
                label: i.intl.string(i.t.JN9c39),
                checked: !1
            }
        }),
        u = (e) => (t, l) => {
            d((t) => ({
                ...t,
                [e]: {
                    ...t[e],
                    checked: l
                }
            }));
        };
    return (0, n.jsxs)(a.ConfirmModal, {
        ...t,
        ...c,
        onConfirm: () => {
            let e = Object.keys(r)
                .filter((e) => r[e].checked)
                .map((e) => r[e].value);
            null == l || l(e);
        },
        children: [
            (0, n.jsx)(a.Text, {
                variant: 'text-md/normal',
                style: { marginBottom: '5px' },
                children: c.body
            }),
            Object.keys(r).map((e) => {
                let { label: t, checked: l } = r[e];
                return (0, n.jsx)(
                    a.XZJ,
                    {
                        type: a.XZJ.Types.INVERTED,
                        value: l,
                        style: { marginBottom: '2px' },
                        onChange: u(e),
                        children: (0, n.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            children: t
                        })
                    },
                    e
                );
            })
        ]
    });
}
