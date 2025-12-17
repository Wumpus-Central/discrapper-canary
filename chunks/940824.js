n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(37234),
    o = n(100527),
    s = n(906732),
    l = n(703656),
    c = n(335131),
    u = n(981631),
    d = n(388032),
    f = n(876441);
let p = (e) => {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, s.ZP)(),
        p = () => {
            t(),
                (0, l.uL)(u.Z5c.COLLECTIBLES_SHOP),
                (0, c.mK)({
                    analyticsSource: o.Z.PREMIUM_PAYMENT_MODAL,
                    analyticsLocations: n,
                }),
                (0, a.xf)();
        };
    return (0, r.jsxs)("div", {
        className: f.container,
        children: [
            (0, r.jsx)("div", {
                className: f.iconBackground,
                children: (0, r.jsx)(i.EOn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: i.TVs.colors.WHITE,
                }),
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-sm/normal",
                children: d.intl.format(d.t.twSHte, {
                    checkItOut: (e) =>
                        (0, r.jsx)(i.P3F, {
                            className: f.link,
                            onClick: p,
                            children: e,
                        }),
                }),
            }),
        ],
    });
};
