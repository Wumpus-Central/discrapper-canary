t.d(n, { A: () => A });
var l = t(627968),
    i = t(64700),
    r = t(597770),
    a = t(688810),
    s = t(233971),
    o = t(746174),
    d = t(993401),
    u = t(518477),
    c = t(652215),
    g = t(985018);
function A(e) {
    let { user: n, onClose: t } = e,
        { analyticsLocations: A } = (0, a.Ay)(),
        m = (0, o.j)("UserProfileGiftButton"),
        { openGiftModal: f } = (0, s.$)({
            giftRecipient: n,
            analyticsLocations: A,
            analyticsObject: {
                page: c.liQ.USER_PROFILE,
                section: c.JJy.USER_PROFILE,
                object: c.ZSU.BUTTON_ICON,
                objectType: c.AnalyticsObjectTypes.GIFT,
            },
            location: "user-profile-gift-button",
        }),
        p = i.useCallback(() => {
            f(), t?.();
        }, [f, t]);
    return m
        ? (0, l.jsx)(d.q3, { action: u.pt.GIFT, icon: r.o, tooltipText: g.intl.string(g.t.PEjaCx), onClick: p })
        : null;
}
