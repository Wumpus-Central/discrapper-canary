var i = r(200651);
r(192379);
var a = r(481060),
    o = r(37234),
    s = r(100527),
    l = r(906732),
    u = r(703656),
    c = r(335131),
    d = r(981631),
    f = r(388032),
    p = r(47648);
let h = (e) => {
    let { onClose: n } = e,
        { analyticsLocations: r } = (0, l.ZP)(),
        h = () => {
            n(),
                (0, u.uL)(d.Z5c.COLLECTIBLES_SHOP),
                (0, c.mK)({
                    openInLayer: !1,
                    analyticsSource: s.Z.PREMIUM_PAYMENT_MODAL,
                    analyticsLocations: r
                }),
                (0, o.xf)();
        };
    return (0, i.jsxs)('div', {
        className: p.container,
        children: [
            (0, i.jsx)('div', {
                className: p.iconBackground,
                children: (0, i.jsx)(a.ShopIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: a.tokens.colors.WHITE
                })
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-sm/normal',
                color: 'header-primary',
                children: f.intl.format(f.t.twSHtb, {
                    checkItOut: (e) =>
                        (0, i.jsx)(a.Clickable, {
                            className: p.link,
                            onClick: h,
                            children: e
                        })
                })
            })
        ]
    });
};
n.Z = h;
