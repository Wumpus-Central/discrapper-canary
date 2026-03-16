"use strict";
n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(497766),
    s = n(421380),
    a = n(397927),
    o = n(263063),
    l = n(721923),
    u = n(652215),
    c = n(48913);
let d = function (e) {
    let { closeLayer: t, guild: n, isVisible: d } = e,
        _ = (0, a.zhh)({
            transform: d ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!d,
            config: { tension: 120, friction: 12 },
        });
    return (0, r.jsx)(i.animated.div, {
        className: c.iE,
        style: _,
        children: (0, r.jsxs)("div", {
            className: c.iJ,
            children: [
                (0, r.jsxs)("div", {
                    className: c.OA,
                    children: [
                        (0, r.jsx)(o.Ay, { className: c.$f, guild: n, size: o.Ay.Sizes.LARGER }),
                        (0, r.jsx)(a.Heading, { className: c.J5, variant: "text-lg/bold", children: n.name }),
                    ],
                }),
                (0, r.jsx)(l.A, {
                    className: c.lI,
                    guild: n,
                    analyticsLocation: {
                        page: u.liQ.PREMIUM_GUILD_USER_MODAL,
                        section: u.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                        object: u.ZSU.BUTTON_CTA,
                        objectType: u.AnalyticsObjectTypes.BUY,
                    },
                    closeLayer: t,
                    pauseAnimation: !d,
                    size: s.$n.Sizes.LARGE,
                }),
            ],
        }),
    });
};
