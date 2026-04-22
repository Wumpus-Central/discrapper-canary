n.d(t, { H: () => p, default: () => m });
var i = n(627968);
n(64700);
var r = n(65412),
    a = n(554146),
    l = n(287683),
    s = n(366010),
    o = n(212245),
    d = n(736653),
    u = n(793574),
    c = n(688810),
    A = n(826673),
    h = n(728458),
    _ = n(716600),
    E = n(848295);
function p(e) {
    let { promotionId: t, content: n, isPreview: i } = e,
        s = l.m.fromBinary((0, r.A)(n));
    if ("announcementModalVariant1" !== s.properties.oneofKind) return null;
    {
        let { isDismissed: e } = (0, A.u$)(a.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, t);
        return !i && e ? null : (i && (s.properties.announcementModalVariant1.dismissKey = ""), s);
    }
}
function m(e) {
    let { componentId: t, promotionId: n, renderModalProps: r, properties: a } = e,
        { location: l } = (0, o.p)(),
        { analyticsLocations: A } = (0, c.Ay)(u.A.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL),
        p = (0, d.Ay)(),
        m = (0, s.q)(p);
    if ("announcementModalVariant1" === a.properties.oneofKind) {
        let e = (0, _.t)({
            componentId: t,
            promotionId: n,
            content: a.properties.announcementModalVariant1,
            renderModalProps: r,
            analyticsLocations: A,
            analyticsLocation: l,
            isLightTheme: m,
        });
        return (0, i.jsx)(E.A, { ...e });
    }
    return (
        h.A.captureMessage(
            `Property type ${a.properties.oneofKind} is not supported to render ServerDriveAnnouncementModal`,
        ),
        null
    );
}
