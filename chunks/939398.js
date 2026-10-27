u.d(e, { h: () => b, p: () => v });
var n = u(582128),
    t = u(598748),
    a = u(991690),
    s = u(17928),
    d = u(294323),
    o = u(627363),
    i = u(457827),
    c = u(25451),
    r = u(280450),
    f = u(373677),
    m = u(238490),
    h = u(754027),
    p = u(165610);
function v(l) {
    let {
            applicationId: e,
            previewApplicationId: u,
            declaredActivity: a,
            previewSupportedSurfaces: v,
            installScope: g,
            ownerAuthorizationRevoked: E,
            mainCardOnly: M = !1,
            supportsOverlay: P = !1,
            previewAppChannels: y = I,
            initialSelection: C,
            onSelectionChange: R,
        } = l,
        [S, T] = n.useState(C?.mode ?? null),
        [_, w] = n.useState(C?.frameSurface ?? null),
        [O, k] = n.useState(C?.appChannel ?? null),
        [A, L] = n.useState(e);
    A !== e && (L(e), null != A && (T(null), w(null), k(null)));
    let Y = n.useRef(R);
    (n.useLayoutEffect(() => {
        Y.current = R;
    }),
        n.useEffect(() => {
            Y.current?.({ mode: S, frameSurface: _, appChannel: O });
        }, [S, _, O]));
    let B = null != u && u === e ? u : null,
        D = (0, s.bG)([r.default], () => r.default.getId()),
        { applicationWidgetConfig: G } = (0, d.A)(D, B ?? void 0),
        N = G?.surfaces,
        H = (0, m.yZ)({
            widgetTop: N?.[t.m.WIDGET_TOP] != null,
            widgetBottom: N?.[t.m.WIDGET_BOTTOM] != null,
            miniProfile: N?.[t.m.MINI_PROFILE] != null,
        }),
        W = null != B && (M ? H.hasMainCard : H.hasAny),
        { data: X } = (0, o.YY)(u ?? void 0),
        j = null != u && X?.bot?.id != null,
        { data: x, isLoading: F } = (0, o.YY)(e ?? void 0),
        Q = a || (0, c.X)(x),
        U = null != e && F && null == x,
        Z = (0, m.P5)(v, {
            legacy: { hasFrame: Q, hasProfileWidget: W, hasBotDm: j },
            widgetResolvable: null != B,
            botDmResolvable: j,
        }),
        q = (0, m.Xm)({ installScope: g, ...Z, hasOverlay: P, ownerAuthorizationRevoked: E }),
        z = n.useMemo(() => (0, f.hR)(v), [v]),
        J = (0, f.PH)(_, z),
        K = b(O, J, y),
        V = n.useMemo(() => (null == K ? void 0 : { customId: K }), [K]);
    return (
        n.useEffect(() => {
            if (null != e)
                for (let l of (0, h.Mm)(e)) {
                    let e = l.surface.type !== (0, f.BR)(J),
                        u = (((0, p.x1)(l) ? l.data.launch.customId : l.launch?.customId) ?? null) !== K;
                    (e || u) && (0, i.r)(l.id);
                }
        }, [e, J, K]),
        {
            availability: q,
            isResolving: U,
            activeMode: U ? null : (0, m.Qs)(S, q),
            setMode: T,
            frameSurface: J,
            frameSurfaceOptions: z,
            setFrameSurface: w,
            appChannel: K,
            setAppChannel: k,
            frameLaunchParams: V,
            widgetApplicationId: B,
        }
    );
}
let I = 221552 == u.j ? [] : null;
function b(l, e, u) {
    return e !== a.U.APP_CHANNEL || u.length < 2 ? null : null != l && u.includes(l) ? l : u[0];
}
