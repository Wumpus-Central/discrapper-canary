r.d(t, { u: () => d }), r(388685);
var n = r(255367),
    a = r(73800),
    i = r(481060),
    l = r(327802),
    s = r(372129),
    o = r(598117),
    c = r(746622),
    u = r(162337);
let d = (e) => {
        let { setUserImage: t } = e,
            [r, s] = a.useState(null);
        return (0, n.jsxs)('div', {
            className: u.emptyState,
            children: [
                (0, n.jsxs)('header', {
                    children: [
                        (0, n.jsx)(i.X6q, {
                            variant: 'heading-lg/medium',
                            color: 'header-primary',
                            children: 'Add Emoji'
                        }),
                        (0, n.jsx)(i.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-muted',
                            children: "Select an image or GIF. You'll be able to edit & preview."
                        })
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: u.dropZone,
                    children: [
                        (0, n.jsx)(i.dZu, {
                            size: 'lg',
                            color: i.TVs.colors.HEADER_MUTED
                        }),
                        (0, n.jsxs)(i.Text, {
                            variant: 'text-md/medium',
                            children: ['Drag & drop or ', (0, n.jsx)(p, { setUserImage: t })]
                        }),
                        null !== r && (0, n.jsx)(c.H, { error: o.ze.IMAGE_LOAD }),
                        (0, n.jsx)(l.X, {
                            onSuccess: t,
                            onError: s
                        })
                    ]
                })
            ]
        });
    },
    p = (e) => {
        let { setUserImage: t } = e;
        return (0, n.jsxs)(i.P3F, {
            focusProps: { within: !0 },
            tag: 'a',
            children: [
                'Select an image',
                (0, n.jsx)(s.ZP, {
                    tabIndex: 0,
                    onChange: (e, r, n) => (
                        t({
                            data: e,
                            file: r,
                            image: n
                        }),
                        Promise.resolve(void 0)
                    )
                })
            ]
        });
    };
