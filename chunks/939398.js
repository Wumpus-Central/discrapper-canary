var t = n(582128),
    u = n(598748),
    i = n(991690),
    a = n(855986),
    r = n(294323),
    d = n(627363),
    o = n(457827),
    c = n(25451),
    s = n(46653),
    f = n(373677),
    m = n(238490),
    p = n(754027),
    h = n(165610);
let _ = 221552 == n.j ? [] : null;
function v(e, l, n) {
    return l !== i.U.APP_CHANNEL || n.length < 2 ? null : null != e && n.includes(e) ? e : n[0];
}
n.d(
    l,
    {},
    {
        h: v,
        p: function (e) {
            let {
                    applicationId: l,
                    previewApplicationId: n,
                    declaredActivity: i,
                    previewSupportedSurfaces: g,
                    installScope: k,
                    ownerAuthorizationRevoked: b,
                    mainCardOnly: w = !1,
                    supportsOverlay: y = !1,
                    previewAppChannels: I = _,
                    initialSelection: R,
                    onSelectionChange: C,
                } = e,
                [E, M] = t.useState(R?.mode ?? null),
                [P, S] = t.useState(R?.frameSurface ?? null),
                [x, A] = t.useState(R?.appChannel ?? null),
                [O, T] = t.useState(l);
            O !== l && (T(l), null != O && (M(null), S(null), A(null)));
            let G = t.useRef(C);
            (t.useLayoutEffect(() => {
                G.current = C;
            }),
                t.useEffect(() => {
                    G.current?.({ mode: E, frameSurface: P, appChannel: x });
                }, [E, P, x]));
            let j = null != n && n === l ? n : null,
                B = (0, a.bG)([s.default], () => s.default.getId()),
                { applicationWidgetConfig: Y } = (0, r.A)(B, j ?? void 0),
                D = Y?.surfaces,
                L = (0, m.yZ)({
                    widgetTop: D?.[u.m.WIDGET_TOP] != null,
                    widgetBottom: D?.[u.m.WIDGET_BOTTOM] != null,
                    miniProfile: D?.[u.m.MINI_PROFILE] != null,
                }),
                N = null != j && (w ? L.hasMainCard : L.hasAny),
                { data: H } = (0, d.YY)(n ?? void 0),
                J = null != n && H?.bot?.id != null,
                { data: U, isLoading: W } = (0, d.YY)(l ?? void 0),
                X = i || (0, c.X)(U),
                F = null != l && W && null == U,
                Q = (0, m.P5)(g, {
                    legacy: { hasFrame: X, hasProfileWidget: N, hasBotDm: J },
                    widgetResolvable: null != j,
                    botDmResolvable: J,
                }),
                Z = (0, m.Xm)({ installScope: k, ...Q, hasOverlay: y, ownerAuthorizationRevoked: b }),
                $ = t.useMemo(() => (0, f.hR)(g), [g]),
                q = (0, f.PH)(P, $),
                z = v(x, q, I),
                K = t.useMemo(() => (null == z ? void 0 : { customId: z }), [z]);
            return (
                t.useEffect(() => {
                    if (null != l)
                        for (let e of (0, p.Mm)(l)) {
                            let l = e.surface.type !== (0, f.BR)(q),
                                n = (((0, h.x1)(e) ? e.data.launch.customId : e.launch?.customId) ?? null) !== z;
                            (l || n) && (0, o.r)(e.id);
                        }
                }, [l, q, z]),
                {
                    availability: Z,
                    isResolving: F,
                    activeMode: F ? null : (0, m.Qs)(E, Z),
                    setMode: M,
                    frameSurface: q,
                    frameSurfaceOptions: $,
                    setFrameSurface: S,
                    appChannel: z,
                    setAppChannel: A,
                    frameLaunchParams: K,
                    widgetApplicationId: j,
                }
            );
        },
    },
);
