n.d(t, { R: () => u }), n(388685);
var r = n(255367),
    a = n(73800),
    l = n(120356),
    s = n.n(l),
    i = n(481060),
    o = n(192360),
    c = n(954292);
let u = (e) => {
        let { onChange: t, value: n } = e,
            [l, u] = a.useState(!0);
        return (0, r.jsxs)('div', {
            className: o.nameInput,
            children: [
                (0, r.jsxs)('div', {
                    className: s()(o.wrapInput, { [o.blur]: l }),
                    children: [
                        (0, r.jsx)(d, {}),
                        (0, r.jsx)(p, {
                            value: n,
                            showPencilIcon: l
                        }),
                        (0, r.jsx)('input', {
                            value: n,
                            onChange: (e) => {
                                t(e.currentTarget.value);
                            },
                            onFocus: () => u(!1),
                            onBlur: () => u(!0),
                            placeholder: 'emoji_name',
                            className: c['text-md/semibold']
                        })
                    ]
                }),
                (0, r.jsx)(i.Text, {
                    variant: 'text-xs/normal',
                    color: 'header-muted',
                    children: 'Min. 2 characters (letters, numbers & underscores only).'
                })
            ]
        });
    },
    d = () =>
        (0, r.jsx)('span', {
            className: o.bookend,
            'aria-hidden': !0,
            children: ':'
        }),
    p = (e) => {
        let { value: t, showPencilIcon: n } = e;
        return (0, r.jsxs)(i.Text, {
            variant: 'text-md/semibold',
            color: 'header-muted',
            className: o.ghost,
            'aria-hidden': !0,
            children: [
                (0, r.jsx)(d, {}),
                (0, r.jsx)('span', {
                    className: o.spacer,
                    children: '' === t ? 'emoji_name' : t
                }),
                (0, r.jsx)(d, {}),
                n && (0, r.jsx)(i.vdY, { size: 'xs' })
            ]
        });
    };
