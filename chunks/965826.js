n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(108531),
    a = n(421380),
    s = n(397927),
    o = n(263063),
    l = n(721923),
    c = n(652215),
    u = n(48913);
let d = function (e) {
    let { closeLayer: t, guild: n, isVisible: d } = e,
        f = (0, s.zhh)({
            transform: d ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!d,
            config: {
                tension: 120,
                friction: 12,
            },
        });
    return (0, r.jsx)(i.animated.div, {
        className: u.iE,
        style: f,
        children: (0, r.jsxs)("div", {
            className: u.iJ,
            children: [
                (0, r.jsxs)("div", {
                    className: u.OA,
                    children: [
                        (0, r.jsx)(o.A, {
                            className: u.$f,
                            guild: n,
                            size: o.A.Sizes.LARGER,
                        }),
                        (0, r.jsx)(s.Heading, {
                            className: u.J5,
                            variant: "text-lg/bold",
                            children: n.name,
                        }),
                    ],
                }),
                (0, r.jsx)(l.A, {
                    className: u.lI,
                    guild: n,
                    analyticsLocation: {
                        page: c.liQ.PREMIUM_GUILD_USER_MODAL,
                        section: c.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                        object: c.ZSU.BUTTON_CTA,
                        objectType: c.AnalyticsObjectTypes.BUY,
                    },
                    closeLayer: t,
                    pauseAnimation: !d,
                    size: a.$n.Sizes.LARGE,
                }),
            ],
        }),
    });
};
