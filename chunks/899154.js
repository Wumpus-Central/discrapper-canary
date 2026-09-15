l.d(t, { q: () => c });
var n = l(582128),
    a = l(598748),
    r = l(17928),
    i = l(294323),
    s = l(627363),
    o = l(207371),
    u = l(280450),
    d = l(675210);
function c(e) {
    let {
            applicationId: t,
            previewApplicationId: l,
            declaredActivity: c,
            installScope: m,
            ownerAuthorizationRevoked: f,
        } = e,
        [h, g] = n.useState(null),
        [x, p] = n.useState(t);
    x !== t && (p(t), g(null));
    let v = null != l && l === t ? l : null,
        b = (0, r.bG)([u.default], () => u.default.getId()),
        { applicationWidgetConfig: j } = (0, i.A)(b, v ?? void 0),
        y = j?.surfaces,
        k =
            null != v &&
            (0, d.yZ)({
                widgetTop: y?.[a.m.WIDGET_TOP] != null,
                widgetBottom: y?.[a.m.WIDGET_BOTTOM] != null,
                miniProfile: y?.[a.m.MINI_PROFILE] != null,
            }).hasAny,
        { data: w } = (0, s.YY)(l ?? void 0),
        N = null != l && w?.bot?.id != null,
        { data: A, isLoading: E } = (0, s.YY)(t ?? void 0),
        S = c || (0, o.x)(A),
        C = null != t && E,
        I = (0, d.Xm)({ installScope: m, hasFrame: S, hasProfileWidget: k, hasBotDm: N, ownerAuthorizationRevoked: f });
    return {
        availability: I,
        isResolving: C,
        activeMode: C ? null : (0, d.Qs)(h, I),
        setMode: g,
        widgetApplicationId: v,
    };
}
