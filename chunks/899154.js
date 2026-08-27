n.d(t, { q: () => c });
var l = n(582128),
    a = n(598748),
    i = n(17928),
    r = n(294323),
    s = n(627363),
    o = n(207371),
    u = n(280450),
    d = n(675210);
function c(e) {
    let {
            applicationId: t,
            previewApplicationId: n,
            declaredActivity: c,
            installScope: m,
            ownerAuthorizationRevoked: h,
        } = e,
        [f, g] = l.useState(null),
        [p, x] = l.useState(t);
    p !== t && (x(t), g(null));
    let v = null != n && n === t ? n : null,
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
        { data: k } = (0, s.YY)(n ?? void 0),
        w = null != n && k?.bot?.id != null,
        { data: N, isLoading: C } = (0, s.YY)(t ?? void 0),
        S = c || (0, o.x)(N),
        I = null != t && C,
        E = (0, d.Xm)({ installScope: m, hasFrame: S, hasProfileWidget: A, hasBotDm: w, ownerAuthorizationRevoked: h });
    return {
        availability: E,
        isResolving: I,
        activeMode: I ? null : (0, d.Qs)(f, E),
        setMode: g,
        widgetApplicationId: v,
    };
}
