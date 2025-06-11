r.d(t, { R: () => c });
var n = r(255367),
    a = r(120356),
    l = r.n(a),
    s = r(481060),
    i = r(192360),
    o = r(954292);
let c = (e) => {
        let { onChange: t, value: r } = e;
        return (0, n.jsxs)('div', {
            className: i.nameInput,
            children: [
                (0, n.jsxs)('div', {
                    className: l()(i.wrapInput, { [i.empty]: '' === r }),
                    children: [
                        (0, n.jsx)(u, {}),
                        (0, n.jsx)(d, { value: r }),
                        (0, n.jsx)('input', {
                            value: r,
                            onChange: (e) => {
                                t(e.currentTarget.value);
                            },
                            placeholder: 'emoji_name',
                            className: o['text-md/semibold']
                        })
                    ]
                }),
                (0, n.jsx)(s.Text, {
                    variant: 'text-xs/normal',
                    color: 'header-muted',
                    children: 'Min. 2 characters (letters, numbers & underscores only).'
                })
            ]
        });
    },
    u = () =>
        (0, n.jsx)('span', {
            className: i.bookend,
            'aria-hidden': !0,
            children: ':'
        }),
    d = (e) => {
        let { value: t } = e;
        return (0, n.jsxs)(s.Text, {
            variant: 'text-md/semibold',
            color: 'header-muted',
            className: i.ghost,
            'aria-hidden': !0,
            children: [
                (0, n.jsx)(u, {}),
                (0, n.jsx)('span', {
                    className: i.spacer,
                    children: '' === t ? 'emoji_name' : t
                }),
                (0, n.jsx)(u, {}),
                '' === t && (0, n.jsx)(s.vdY, { size: 'xs' })
            ]
        });
    };
