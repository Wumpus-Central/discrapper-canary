n.d(t, { Z: () => _ });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(37234),
    a = n(100527),
    s = n(906732),
    l = n(703656),
    c = n(335131),
    u = n(981631),
    d = n(388032),
    f = n(279248);
let _ = (e) => {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, s.ZP)(),
        _ = () => {
            t(),
                (0, l.uL)(u.Z5c.COLLECTIBLES_SHOP),
                (0, c.mK)({
                    openInLayer: !1,
                    analyticsSource: a.Z.PREMIUM_PAYMENT_MODAL,
                    analyticsLocations: n
                }),
                (0, o.xf)();
        };
    return (0, r.jsxs)('div', {
        className: f.container,
        children: [
            (0, r.jsx)('div', {
                className: f.iconBackground,
                children: (0, r.jsx)(i.EOn, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: i.TVs.colors.WHITE
                })
            }),
            (0, r.jsx)(i.Text, {
                variant: 'text-sm/normal',
                color: 'header-primary',
                children: d.NW.format(d.t.twSHtb, {
                    checkItOut: (e) =>
                        (0, r.jsx)(i.P3F, {
                            className: f.link,
                            onClick: _,
                            children: e
                        })
                })
            })
        ]
    });
};
