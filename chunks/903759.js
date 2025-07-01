(n.d(t, { u: () => h }), n(388685));
var r = n(255367),
    l = n(73800),
    a = n(481060),
    s = n(327802),
    i = n(372129),
    o = n(598117),
    c = n(746622),
    u = n(388032),
    d = n(162337);
let h = (e) => {
        let { setImage: t } = e,
            [n, i] = l.useState(null);
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
                            selectFileHook: (e) =>
                                (0, r.jsx)(p, {
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
        });
    },
    p = (e) => {
        let { setUserImage: t, translatedContent: n } = e;
        return (0, r.jsx)(a.P3F, {
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
