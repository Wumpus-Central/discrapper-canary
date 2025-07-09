(n.d(t, { Z: () => g }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(793030),
    o = n(755721),
    c = n(481060),
    d = n(715495),
    u = n(538645),
    m = n(512072);
let p = (e) => {
        let { setTab: t } = e;
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(c.P3F, {
                    onClick: () => {
                        t(1);
                    },
                    children: (0, i.jsx)('div', {
                        className: a()(m.banner, m.pfxBanner),
                        children: (0, i.jsx)(l.xv, {
                            variant: 'text-md/bold',
                            color: 'always-white',
                            children: 'Profile Effects'
                        })
                    })
                }),
                (0, i.jsx)(c.P3F, {
                    onClick: () => {
                        t(2);
                    },
                    children: (0, i.jsx)('div', {
                        className: a()(m.banner, m.nameplateBanner),
                        children: (0, i.jsx)(l.xv, {
                            variant: 'text-md/bold',
                            color: 'always-white',
                            children: 'Nameplates'
                        })
                    })
                })
            ]
        });
    },
    g = () => {
        let [e, t] = r.useState(0);
        return (0, i.jsxs)('div', {
            className: m.wrapper,
            children: [
                (0, i.jsxs)('div', {
                    className: m.nav,
                    children: [
                        (0, i.jsx)(l.X6, {
                            variant: 'heading-xxl/medium',
                            children: 'ShopKeeper'
                        }),
                        0 !== e &&
                            (0, i.jsx)(o.zx, {
                                look: o.iL.OUTLINED,
                                onClick: () => t(0),
                                children: 'Back'
                            }),
                        ' '
                    ]
                }),
                (() => {
                    switch (e) {
                        case 1:
                            return (0, i.jsx)(u.Z, {});
                        case 2:
                            return (0, i.jsx)(d.Z, {});
                        default:
                            return (0, i.jsx)(p, { setTab: t });
                    }
                })()
            ]
        });
    };
