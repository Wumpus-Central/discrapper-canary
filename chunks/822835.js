l.d(t, { q: () => c });
var n = l(582128),
    a = l(598748),
    i = l(17928),
    r = l(294323),
    s = l(627363),
    u = l(25451),
    o = l(280450),
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
        [g, x] = n.useState(null),
        [p, v] = n.useState(t);
    p !== t && (v(t), x(null));
    let b = null != l && l === t ? l : null,
        j = (0, i.bG)([o.default], () => o.default.getId()),
        { applicationWidgetConfig: y } = (0, r.A)(j, b ?? void 0),
        k = y?.surfaces,
        N = (0, d.yZ)({
            widgetTop: k?.[a.m.WIDGET_TOP] != null,
            widgetBottom: k?.[a.m.WIDGET_BOTTOM] != null,
            miniProfile: k?.[a.m.MINI_PROFILE] != null,
        }),
        w = null != b && (h ? N.hasMainCard : N.hasAny),
        { data: A } = (0, s.YY)(l ?? void 0),
        S = null != l && A?.bot?.id != null,
        { data: C, isLoading: E } = (0, s.YY)(t ?? void 0),
        I = c || (0, u.X)(C),
        T = null != t && E && null == C,
        M = (0, d.Xm)({ installScope: f, hasFrame: I, hasProfileWidget: w, hasBotDm: S, ownerAuthorizationRevoked: m });
    return {
        availability: M,
        isResolving: T,
        activeMode: T ? null : (0, d.Qs)(g, M),
        setMode: x,
        widgetApplicationId: b,
    };
}
