r.d(t, { R: () => u }), r(388685);
var n = r(255367),
    a = r(73800),
    l = r(120356),
    s = r.n(l),
    i = r(481060),
    o = r(192360),
    c = r(954292);
let u = (e) => {
        let { onChange: t, value: r } = e,
            [l, u] = a.useState(!0);
        return (0, n.jsxs)('div', {
            className: o.nameInput,
            children: [
                (0, n.jsxs)('div', {
                    className: s()(o.wrapInput, { [o.blur]: l }),
                    children: [
                        (0, n.jsx)(d, {}),
                        (0, n.jsx)(p, {
                            value: r,
                            showPencilIcon: l
                        }),
                        (0, n.jsx)('input', {
                            value: r,
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
                (0, n.jsx)(i.Text, {
                    variant: 'text-xs/normal',
                    color: 'header-muted',
                    children: 'Min. 2 characters (letters, numbers & underscores only).'
                })
            ]
        });
    },
    d = () =>
        (0, n.jsx)('span', {
            className: o.bookend,
            'aria-hidden': !0,
            children: ':'
        }),
    p = (e) => {
        let { value: t, showPencilIcon: r } = e;
        return (0, n.jsxs)(i.Text, {
            variant: 'text-md/semibold',
            color: 'header-muted',
            className: o.ghost,
            'aria-hidden': !0,
            children: [
                (0, n.jsx)(d, {}),
                (0, n.jsx)('span', {
                    className: o.spacer,
                    children: '' === t ? 'emoji_name' : t
                }),
                (0, n.jsx)(d, {}),
                r && (0, n.jsx)(i.vdY, { size: 'xs' })
            ]
        });
    };
