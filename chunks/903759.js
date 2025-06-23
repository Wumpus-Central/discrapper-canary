n.d(t, { u: () => p }), n(388685);
var r = n(255367),
    a = n(73800),
    l = n(481060),
    s = n(327802),
    i = n(372129),
    o = n(598117),
    c = n(746622),
    u = n(388032),
    d = n(162337);
let p = (e) => {
        let { setUserImage: t } = e,
            [n, i] = a.useState(null);
        return (0, r.jsxs)('div', {
            className: d.emptyState,
            children: [
                (0, r.jsxs)('header', {
                    children: [
                        (0, r.jsx)(l.X6q, {
                            variant: 'heading-lg/medium',
                            color: 'header-primary',
                            className: d.header,
                            children: u.intl.string(u.t['r/XaTE'])
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-muted',
                            children: u.intl.string(u.t.MU9wRU)
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: d.dropZone,
                    children: [
                        (0, r.jsx)(l.FmF, {
                            size: 'lg',
                            color: l.TVs.colors.HEADER_MUTED,
                            className: d.imagePlusIcon
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            children: u.intl.format(u.t['Ks2/3d'], {
                                selectFileHook: (e) =>
                                    (0, r.jsx)(h, {
                                        translatedContent: e,
                                        setUserImage: t
                                    })
                            })
                        }),
                        null !== n && (0, r.jsx)(c.H, { error: o.ze.IMAGE_LOAD }),
                        (0, r.jsx)(s.X, {
                            onSuccess: t,
                            onError: i
                        })
                    ]
                })
            ]
        });
    },
    h = (e) => {
        let { setUserImage: t, translatedContent: n } = e;
        return (0, r.jsx)(l.P3F, {
            focusProps: { within: !0 },
            tag: 'a',
            children: (0, r.jsxs)('label', {
                children: [
                    n,
                    (0, r.jsx)(i.ZP, {
                        tabIndex: 0,
                        onChange: (e, n, r) => (
                            t({
                                data: e,
                                file: n,
                                image: r
                            }),
                            Promise.resolve(void 0)
                        ),
                        multiple: !1,
                        title: ''
                    })
                ]
            })
        });
    };
