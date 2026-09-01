l.d(t, { q: () => c });
var n = l(582128),
    a = l(598748),
    i = l(17928),
    r = l(294323),
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
        j = (0, i.bG)([u.default], () => u.default.getId()),
        { applicationWidgetConfig: b } = (0, r.A)(j, v ?? void 0),
        y = b?.surfaces,
        A =
            null != v &&
            (0, d.yZ)({
                widgetTop: y?.[a.m.WIDGET_TOP] != null,
                widgetBottom: y?.[a.m.WIDGET_BOTTOM] != null,
                miniProfile: y?.[a.m.MINI_PROFILE] != null,
            }).hasAny,
        { data: k } = (0, s.YY)(l ?? void 0),
        N = null != l && k?.bot?.id != null,
        { data: w, isLoading: S } = (0, s.YY)(t ?? void 0),
        C = c || (0, o.x)(w),
        E = null != t && S,
        I = (0, d.Xm)({ installScope: m, hasFrame: C, hasProfileWidget: A, hasBotDm: N, ownerAuthorizationRevoked: f });
    return {
        availability: I,
        isResolving: E,
        activeMode: E ? null : (0, d.Qs)(h, I),
        setMode: g,
        widgetApplicationId: v,
    };
}
