r.d(t, { R: () => o });
var n = r(255367),
    a = r(692547),
    s = r(481060),
    l = r(192360),
    i = r(954292);
let o = (e) => {
        let { onChange: t, value: r } = e;
        return (0, n.jsxs)('div', {
            className: l.nameInput,
            children: [
                (0, n.jsxs)('div', {
                    className: l.wrapInput,
                    children: [
                        (0, n.jsx)(c, {}),
                        (0, n.jsx)('input', {
                            value: r,
                            onChange: (e) => {
                                t(e.currentTarget.value);
                            },
                            placeholder: 'emoji_name',
                            className: i['text-md/semibold']
                        }),
                        (0, n.jsx)(u, { value: r })
                    ]
                }),
                (0, n.jsx)(s.Text, {
                    variant: 'text-xs/normal',
                    color: 'header-muted',
                    className: l.inputNote,
                    children: 'Min. 2 characters (letters, numbers & underscores only).'
                })
            ]
        });
    },
    c = () =>
        (0, n.jsx)('span', {
            className: l.bookend,
            'arria-hidden': !0,
            children: ':'
        }),
    u = (e) => {
        let { value: t } = e;
        return (0, n.jsxs)(s.Text, {
            variant: 'text-md/semibold',
            color: 'header-muted',
            className: l.ghost,
            'aria-hidden': !0,
            children: [
                (0, n.jsx)(c, {}),
                (0, n.jsx)('span', {
                    className: l.spacer,
                    children: '' === t ? 'emoji_name' : t
                }),
                (0, n.jsx)(c, {}),
                '' === t &&
                    (0, n.jsx)(s.vdY, {
                        color: a.Z.colors.INTERACTIVE_MUTED,
                        size: 'xs'
                    })
            ]
        });
    };
