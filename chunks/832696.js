l.d(n, { A: () => A });
var t = l(627968),
    i = l(64700),
    r = l(597770),
    s = l(688810),
    a = l(233971),
    o = l(746174),
    d = l(993401),
    c = l(518477),
    u = l(652215),
    g = l(985018);
function A(e) {
    let { user: n, onClose: l } = e,
        { analyticsLocations: A } = (0, s.Ay)(),
        m = (0, o.j)("UserProfileGiftButton"),
        { openGiftModal: f } = (0, a.$)({
            giftRecipient: n,
            analyticsLocations: A,
            analyticsObject: {
                page: u.liQ.USER_PROFILE,
                section: u.JJy.USER_PROFILE,
                object: u.ZSU.BUTTON_ICON,
                objectType: u.AnalyticsObjectTypes.GIFT,
            },
            location: "user-profile-gift-button",
        }),
        p = i.useCallback(() => {
            f(), l?.();
        }, [f, l]);
    return m
        ? (0, t.jsx)(d.q3, { action: c.pt.GIFT, icon: r.o, tooltipText: g.intl.string(g.t.PEjaCx), onClick: p })
        : null;
}
