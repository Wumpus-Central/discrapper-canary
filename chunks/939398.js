e.d(u, { h: () => b, p: () => v });
var t = e(582128),
    n = e(598748),
    a = e(991690),
    s = e(17928),
    d = e(294323),
    i = e(627363),
    o = e(457827),
    c = e(25451),
    r = e(280450),
    h = e(373677),
    m = e(238490),
    f = e(754027),
    p = e(165610);
function v(l) {
    let {
            applicationId: u,
            previewApplicationId: e,
            declaredActivity: a,
            previewSupportedSurfaces: v,
            installScope: g,
            ownerAuthorizationRevoked: M,
            mainCardOnly: P = !1,
            supportsOverlay: T = !1,
            previewAppChannels: _ = I,
        } = l,
        [w, y] = t.useState(null),
        [E, O] = t.useState(null),
        [R, k] = t.useState(null),
        [A, C] = t.useState(u);
    A !== u && (C(u), y(null), O(null), k(null));
    let S = null != e && e === u ? e : null,
        Y = (0, s.bG)([r.default], () => r.default.getId()),
        { applicationWidgetConfig: B } = (0, d.A)(Y, S ?? void 0),
        D = B?.surfaces,
        G = (0, m.yZ)({
            widgetTop: D?.[n.m.WIDGET_TOP] != null,
            widgetBottom: D?.[n.m.WIDGET_BOTTOM] != null,
            miniProfile: D?.[n.m.MINI_PROFILE] != null,
        }),
        L = null != S && (P ? G.hasMainCard : G.hasAny),
        { data: N } = (0, i.YY)(e ?? void 0),
        H = null != e && N?.bot?.id != null,
        { data: W, isLoading: X } = (0, i.YY)(u ?? void 0),
        j = a || (0, c.X)(W),
        x = null != u && X && null == W,
        F = (0, m.P5)(v, {
            legacy: { hasFrame: j, hasProfileWidget: L, hasBotDm: H },
            widgetResolvable: null != S,
            botDmResolvable: H,
        }),
        Q = (0, m.Xm)({ installScope: g, ...F, hasOverlay: T, ownerAuthorizationRevoked: M }),
        U = t.useMemo(() => (0, h.hR)(v), [v]),
        Z = (0, h.PH)(E, U),
        q = b(R, Z, _),
        z = t.useMemo(() => (null == q ? void 0 : { customId: q }), [q]);
    return (
        t.useEffect(() => {
            if (null != u)
                for (let l of (0, f.Mm)(u)) {
                    let u = l.surface.type !== (0, h.BR)(Z),
                        e = (((0, p.x1)(l) ? l.data.launch.customId : l.launch?.customId) ?? null) !== q;
                    (u || e) && (0, o.r)(l.id);
                }
        }, [u, Z, q]),
        {
            availability: Q,
            isResolving: x,
            activeMode: x ? null : (0, m.Qs)(w, Q),
            setMode: y,
            frameSurface: Z,
            frameSurfaceOptions: U,
            setFrameSurface: O,
            appChannel: q,
            setAppChannel: k,
            frameLaunchParams: z,
            widgetApplicationId: S,
        }
    );
}
let I = 221552 == e.j ? [] : null;
function b(l, u, e) {
    return u !== a.U.APP_CHANNEL || e.length < 2 ? null : null != l && e.includes(l) ? l : e[0];
}
