n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(37234),
    s = n(100527),
    o = n(906732),
    l = n(703656),
    u = n(335131),
    c = n(981631),
    d = n(388032),
    f = n(47648);
let _ = (e) => {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, o.ZP)(),
        _ = () => {
            t(),
                (0, l.uL)(c.Z5c.COLLECTIBLES_SHOP),
                (0, u.mK)({
                    openInLayer: !1,
                    analyticsSource: s.Z.PREMIUM_PAYMENT_MODAL,
                    analyticsLocations: n
                }),
                (0, a.xf)();
        };
    return (0, i.jsxs)('div', {
        className: f.container,
        children: [
            (0, i.jsx)('div', {
                className: f.iconBackground,
                children: (0, i.jsx)(r.EOn, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: r.TVs.colors.WHITE
                })
            }),
            (0, i.jsx)(r.Text, {
                variant: 'text-sm/normal',
                color: 'header-primary',
                children: d.intl.format(d.t.twSHtb, {
                    checkItOut: (e) =>
                        (0, i.jsx)(r.P3F, {
                            className: f.link,
                            onClick: _,
                            children: e
                        })
                })
            })
        ]
    });
};
