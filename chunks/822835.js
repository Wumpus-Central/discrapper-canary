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
            installScope: m,
            ownerAuthorizationRevoked: f,
            mainCardOnly: h = !1,
        } = e,
        [g, x] = n.useState(null),
        [p, v] = n.useState(t);
    p !== t && (v(t), x(null));
    let b = null != l && l === t ? l : null,
        j = (0, r.bG)([u.default], () => u.default.getId()),
        { applicationWidgetConfig: y } = (0, i.A)(j, b ?? void 0),
        k = y?.surfaces,
        w = (0, d.yZ)({
            widgetTop: k?.[a.m.WIDGET_TOP] != null,
            widgetBottom: k?.[a.m.WIDGET_BOTTOM] != null,
            miniProfile: k?.[a.m.MINI_PROFILE] != null,
        }),
        N = null != b && (h ? w.hasMainCard : w.hasAny),
        { data: A } = (0, s.YY)(l ?? void 0),
        E = null != l && A?.bot?.id != null,
        { data: S, isLoading: C } = (0, s.YY)(t ?? void 0),
        I = c || (0, o.x)(S),
        M = null != t && C,
        T = (0, d.Xm)({ installScope: m, hasFrame: I, hasProfileWidget: N, hasBotDm: E, ownerAuthorizationRevoked: f });
    return {
        availability: T,
        isResolving: M,
        activeMode: M ? null : (0, d.Qs)(g, T),
        setMode: x,
        widgetApplicationId: b,
    };
}
