(n.d(t, { u: () => h }), n(388685));
var r = n(255367),
    l = n(73800),
    a = n(481060),
    i = n(327802),
    s = n(372129),
    o = n(598117),
    c = n(746622),
    u = n(388032),
    d = n(162337);
let h = (e) => {
        let { setImage: t } = e,
            [n, s] = l.useState(null);
        return (0, r.jsx)('div', {
            className: d.emptyState,
            children: (0, r.jsxs)('div', {
                className: d.dropZone,
                children: [
                    (0, r.jsx)(a.FmF, {
                        size: 'lg',
                        color: a.TVs.colors.HEADER_MUTED,
                        className: d.imagePlusIcon
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-md/medium',
                        children: u.intl.format(u.t['Ks2/3d'], {
                            selectFileHook: (e, n) =>
                                (0, r.jsx)(
                                    m,
                                    {
                                        translatedContent: e,
                                        setUserImage: t
                                    },
                                    n
                                )
                        })
                    }),
                    null !== n &&
                        (0, r.jsx)(c.H, {
                            error: o.ze.IMAGE_LOAD,
                            variant: 'text-sm/normal',
                            color: 'text-danger'
                        }),
                    (0, r.jsx)(i.X, {
                        onSuccess: t,
                        onError: s
                    })
                ]
            })
        });
    },
    m = (e) => {
        let { setUserImage: t, translatedContent: n } = e;
        return (0, r.jsx)(a.P3F, {
            focusProps: { within: !0 },
            tag: 'a',
            children: (0, r.jsxs)('label', {
                children: [
                    n,
                    (0, r.jsx)(s.ZP, {
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
