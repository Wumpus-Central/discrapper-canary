n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(688810),
    o = n(287809),
    d = n(987144),
    c = n(652215),
    u = n(985018);
function m(e) {
    let { guild: t, closeLayer: n } = e,
        [m, _] = l.useState(!1),
        { analyticsLocations: h } = (0, s.Ay)(),
        p = (0, a.bG)([o.default], () => o.default.getCurrentUser()),
        g = p?.isPremiumGroupMember();
    async function A() {
        _(!0),
            await (0, d.g)({
                analyticsLocations: h,
                analyticsLocation: {
                    page: c.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: c.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: c.ZSU.BUTTON_CTA,
                    objectType: c.AnalyticsObjectTypes.BUY,
                },
                guild: t,
                closeLayer: n,
                onClose: () => {
                    _(!1);
                },
            });
    }
    return (0, i.jsx)(r.Button, {
        variant: "expressive",
        size: "md",
        icon: r._Jp,
        text: u.intl.string(u.t.gKmQ1G),
        onClick: A,
        loading: m,
        disabled: g,
    });
}
