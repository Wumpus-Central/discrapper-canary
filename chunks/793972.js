r.d(t, { R: () => o });
var n = r(255367),
    a = r(692547),
    l = r(481060),
    s = r(192360),
    i = r(954292);
let o = (e) => {
        let { onChange: t, value: r } = e;
        return (0, n.jsxs)('div', {
            className: s.nameInput,
            children: [
                (0, n.jsxs)('div', {
                    className: s.wrapInput,
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
                (0, n.jsx)(l.Text, {
                    variant: 'text-xs/normal',
                    color: 'header-muted',
                    children: 'Min. 2 characters (letters, numbers & underscores only).'
                })
            ]
        });
    },
    c = () =>
        (0, n.jsx)('span', {
            className: s.bookend,
            'aria-hidden': !0,
            children: ':'
        }),
    u = (e) => {
        let { value: t } = e;
        return (0, n.jsxs)(l.Text, {
            variant: 'text-md/semibold',
            color: 'header-muted',
            className: s.ghost,
            'aria-hidden': !0,
            children: [
                (0, n.jsx)(c, {}),
                (0, n.jsx)('span', {
                    className: s.spacer,
                    children: '' === t ? 'emoji_name' : t
                }),
                (0, n.jsx)(c, {}),
                '' === t &&
                    (0, n.jsx)(l.vdY, {
                        color: a.Z.colors.INTERACTIVE_MUTED,
                        size: 'xs'
                    })
            ]
        });
    };
