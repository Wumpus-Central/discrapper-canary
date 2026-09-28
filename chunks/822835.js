l.d(t, { q: () => c });
var n = l(582128),
    a = l(598748),
    r = l(17928),
    i = l(294323),
    s = l(627363),
    o = l(207371),
    u = l(280450),
    d = l(58551);
function c(e) {
    let {
            applicationId: t,
            previewApplicationId: l,
            declaredActivity: c,
            installScope: f,
            ownerAuthorizationRevoked: m,
            mainCardOnly: h = !1,
        } = e,
        [x, g] = n.useState(null),
        [p, v] = n.useState(t);
    p !== t && (v(t), g(null));
    let b = null != l && l === t ? l : null,
        j = (0, r.bG)([u.default], () => u.default.getId()),
        { applicationWidgetConfig: y } = (0, i.A)(j, b ?? void 0),
        k = y?.surfaces,
        N = (0, d.yZ)({
            widgetTop: k?.[a.m.WIDGET_TOP] != null,
            widgetBottom: k?.[a.m.WIDGET_BOTTOM] != null,
            miniProfile: k?.[a.m.MINI_PROFILE] != null,
        }),
        w = null != b && (h ? N.hasMainCard : N.hasAny),
        { data: A } = (0, s.YY)(l ?? void 0),
        S = null != l && A?.bot?.id != null,
        { data: E, isLoading: C } = (0, s.YY)(t ?? void 0),
        I = c || (0, o.x)(E),
        M = null != t && C && null == E,
        T = (0, d.Xm)({ installScope: f, hasFrame: I, hasProfileWidget: w, hasBotDm: S, ownerAuthorizationRevoked: m });
    return {
        availability: T,
        isResolving: M,
        activeMode: M ? null : (0, d.Qs)(x, T),
        setMode: g,
        widgetApplicationId: b,
    };
}
