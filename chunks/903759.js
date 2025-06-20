r.d(t, { u: () => p }), r(388685);
var n = r(255367),
    a = r(73800),
    l = r(481060),
    s = r(327802),
    i = r(372129),
    o = r(598117),
    c = r(746622),
    u = r(388032),
    d = r(162337);
let p = (e) => {
        let { setUserImage: t } = e,
            [r, i] = a.useState(null);
        return (0, n.jsxs)('div', {
            className: d.emptyState,
            children: [
                (0, n.jsxs)('header', {
                    children: [
                        (0, n.jsx)(l.X6q, {
                            variant: 'heading-lg/medium',
                            color: 'header-primary',
                            className: d.header,
                            children: u.intl.string(u.t['r/XaTE'])
                        }),
                        (0, n.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-muted',
                            children: u.intl.string(u.t.MU9wRU)
                        })
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: d.dropZone,
                    children: [
                        (0, n.jsx)(l.FmF, {
                            size: 'lg',
                            color: l.TVs.colors.HEADER_MUTED,
                            className: d.imagePlusIcon
                        }),
                        (0, n.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            children: u.intl.format(u.t['Ks2/3d'], {
                                selectFileHook: (e) =>
                                    (0, n.jsx)(h, {
                                        translatedContent: e,
                                        setUserImage: t
                                    })
                            })
                        }),
                        null !== r && (0, n.jsx)(c.H, { error: o.ze.IMAGE_LOAD }),
                        (0, n.jsx)(s.X, {
                            onSuccess: t,
                            onError: i
                        })
                    ]
                })
            ]
        });
    },
    h = (e) => {
        let { setUserImage: t, translatedContent: r } = e;
        return (0, n.jsx)(l.P3F, {
            focusProps: { within: !0 },
            tag: 'a',
            children: (0, n.jsxs)('label', {
                children: [
                    r,
                    (0, n.jsx)(i.ZP, {
                        tabIndex: 0,
                        onChange: (e, r, n) => (
                            t({
                                data: e,
                                file: r,
                                image: n
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
