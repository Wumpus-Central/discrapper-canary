t.d(l, { A: () => A });
var i = t(627968),
    n = t(64700),
    s = t(397927),
    a = t(688810),
    r = t(979474),
    o = t(746174),
    d = t(993401),
    c = t(518477),
    u = t(652215),
    m = t(985018);
function A(e) {
    let { user: l, onClose: t } = e,
        { analyticsLocations: A } = (0, a.Ay)(),
        p = (0, o.j)("UserProfileGiftButton"),
        { openGiftModal: x } = (0, r.$)({
            giftRecipient: l,
            analyticsLocations: A,
            analyticsObject: {
                page: u.liQ.USER_PROFILE,
                section: u.JJy.USER_PROFILE,
                object: u.ZSU.BUTTON_ICON,
                objectType: u.AnalyticsObjectTypes.GIFT,
            },
            location: "user-profile-gift-button",
        }),
        g = n.useCallback(() => {
            x(), t?.();
        }, [x, t]);
    return p
        ? (0, i.jsx)(d.q3, { action: c.pt.GIFT, icon: s.okO, tooltipText: m.intl.string(m.t.PEjaCx), onClick: g })
        : null;
}
