var i = t(200651);
t(192379);
var l = t(481060),
    r = t(37234),
    s = t(100527),
    a = t(906732),
    c = t(703656),
    o = t(335131),
    u = t(981631),
    d = t(388032),
    m = t(47648);
n.Z = (e) => {
    let { onClose: n } = e,
        { analyticsLocations: t } = (0, a.ZP)(),
        p = () => {
            n(),
                (0, c.uL)(u.Z5c.COLLECTIBLES_SHOP),
                (0, o.mK)({
                    openInLayer: !1,
                    analyticsSource: s.Z.PREMIUM_PAYMENT_MODAL,
                    analyticsLocations: t
                }),
                (0, r.xf)();
        };
    return (0, i.jsxs)('div', {
        className: m.container,
        children: [
            (0, i.jsx)('div', {
                className: m.iconBackground,
                children: (0, i.jsx)(l.ShopIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: l.tokens.colors.WHITE
                })
            }),
            (0, i.jsx)(l.Text, {
                variant: 'text-sm/normal',
                color: 'header-primary',
                children: d.intl.format(d.t.twSHtb, {
                    checkItOut: (e) =>
                        (0, i.jsx)(l.Clickable, {
                            className: m.link,
                            onClick: p,
                            children: e
                        })
                })
            })
        ]
    });
};
