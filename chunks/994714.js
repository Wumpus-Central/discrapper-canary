(n.d(t, { Z: () => g }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(793030),
    o = n(481060),
    c = n(715495),
    d = n(538645),
    u = n(512072);
let m = (e) => {
        let { setTab: t } = e;
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(o.P3F, {
                    onClick: () => {
                        t(1);
                    },
                    children: (0, i.jsx)('div', {
                        className: l()(u.banner, u.pfxBanner),
                        children: (0, i.jsx)(a.xv, {
                            variant: 'text-md/bold',
                            color: 'always-white',
                            children: 'Profile Effects'
                        })
                    })
                }),
                (0, i.jsx)(o.P3F, {
                    onClick: () => {
                        t(2);
                    },
                    children: (0, i.jsx)('div', {
                        className: l()(u.banner, u.nameplateBanner),
                        children: (0, i.jsx)(a.xv, {
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
            className: u.wrapper,
            children: [
                (0, i.jsxs)('div', {
                    className: u.nav,
                    children: [
                        (0, i.jsx)(a.X6, {
                            variant: 'heading-xxl/medium',
                            children: 'ShopKeeper'
                        }),
                        0 !== e &&
                            (0, i.jsx)(o.zxk, {
                                look: o.iLD.OUTLINED,
                                onClick: () => t(0),
                                children: 'Back'
                            }),
                        ' '
                    ]
                }),
                (() => {
                    switch (e) {
                        case 1:
                            return (0, i.jsx)(d.Z, {});
                        case 2:
                            return (0, i.jsx)(c.Z, {});
                        default:
                            return (0, i.jsx)(m, { setTab: t });
                    }
                })()
            ]
        });
    };
