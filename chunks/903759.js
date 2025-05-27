r.d(t, { u: () => d }), r(388685);
var n = r(255367),
    a = r(73800),
    s = r(481060),
    i = r(327802),
    l = r(372129),
    o = r(598117),
    c = r(746622),
    u = r(162337);
let d = (e) => {
        let { setUserImage: t } = e,
            [r, l] = a.useState(null);
        return (0, n.jsxs)('div', {
            className: u.emptyState,
            children: [
                (0, n.jsxs)('header', {
                    children: [
                        (0, n.jsx)(s.X6q, {
                            variant: 'heading-lg/medium',
                            color: 'header-primary',
                            children: 'Add Emoji'
                        }),
                        (0, n.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-muted',
                            children: "Select an image or GIF. You'll be able to edit & preview."
                        })
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: u.dropZone,
                    children: [
                        (0, n.jsx)(s.dZu, {
                            size: 'lg',
                            color: s.TVs.colors.HEADER_MUTED
                        }),
                        (0, n.jsxs)(s.Text, {
                            variant: 'text-md/medium',
                            children: ['Drag & drop or ', (0, n.jsx)(h, { setUserImage: t })]
                        }),
                        null !== r && (0, n.jsx)(c.H, { error: o.ze.IMAGE_LOAD }),
                        (0, n.jsx)(i.X, {
                            onSuccess: t,
                            onError: l
                        })
                    ]
                })
            ]
        });
    },
    h = (e) => {
        let { setUserImage: t } = e;
        return (0, n.jsxs)(s.P3F, {
            focusProps: { within: !0 },
            tag: 'a',
            children: [
                'Select an image',
                (0, n.jsx)(l.ZP, {
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
