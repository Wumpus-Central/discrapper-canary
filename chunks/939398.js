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
    p = n(238490),
    h = n(754027),
    m = n(165610);
let _ = 221552 == n.j ? [] : null,
    v = 221552 == n.j ? [] : null,
    g = [i.U.APP_CHANNEL];
function k(e, l, n) {
    return l !== i.U.APP_CHANNEL || n.length < 2 ? null : null != e && n.includes(e) ? e : n[0];
}
n.d(
    l,
    {},
    {
        h: k,
        p: function (e) {
            let {
                    applicationId: l,
                    previewApplicationId: n,
                    declaredActivity: i,
                    previewSupportedSurfaces: w,
                    installScope: b,
                    ownerAuthorizationRevoked: y,
                    mainCardOnly: C = !1,
                    supportsOverlay: E = !1,
                    previewAppChannels: R = _,
                    previewViews: I = v,
                    initialSelection: P,
                    onSelectionChange: A,
                } = e,
                [S, M] = t.useState(P?.mode ?? null),
                [x, O] = t.useState(P?.frameSurface ?? null),
                [T, j] = t.useState(P?.appChannel ?? null),
                [G, B] = t.useState(P?.view ?? null),
                [N, L] = t.useState(l);
            N !== l && (L(l), null != N && (M(null), O(null), j(null), B(null)));
            let Y = t.useRef(A);
            (t.useLayoutEffect(() => {
                Y.current = A;
            }),
                t.useEffect(() => {
                    Y.current?.({ mode: S, frameSurface: x, appChannel: T, view: G });
                }, [S, x, T, G]));
            let D = null != n && n === l ? n : null,
                H = (0, a.bG)([s.default], () => s.default.getId()),
                { applicationWidgetConfig: U } = (0, r.A)(H, D ?? void 0),
                J = U?.surfaces,
                W = (0, p.yZ)({
                    widgetTop: J?.[u.m.WIDGET_TOP] != null,
                    widgetBottom: J?.[u.m.WIDGET_BOTTOM] != null,
                    miniProfile: J?.[u.m.MINI_PROFILE] != null,
                }),
                X = null != D && (C ? W.hasMainCard : W.hasAny),
                { data: F } = (0, d.YY)(n ?? void 0),
                Q = null != n && F?.bot?.id != null,
                { data: Z, isLoading: $ } = (0, d.YY)(l ?? void 0),
                q = i || (0, c.X)(Z),
                z = null != l && $ && null == Z,
                K = (0, p.P5)(w, {
                    legacy: { hasFrame: q, hasProfileWidget: X, hasBotDm: Q },
                    widgetResolvable: null != D,
                    botDmResolvable: Q,
                }),
                V = (0, p.Xm)({ installScope: b, ...K, hasOverlay: E, ownerAuthorizationRevoked: y }),
                ee = I.length > 0,
                el = t.useMemo(() => (ee ? g : (0, f.hR)(w)), [ee, w]),
                en = (0, f.PH)(x, el),
                et = ee
                    ? (I.find((e) => {
                          let { id: l } = e;
                          return l === G;
                      }) ?? I[0])
                    : null,
                eu = ee ? null : k(T, en, R),
                ei = et?.id ?? eu,
                ea = t.useMemo(() => (null == ei ? void 0 : { customId: ei }), [ei]);
            return (
                t.useEffect(() => {
                    if (null != l)
                        for (let e of (0, h.Mm)(l)) {
                            let l = e.surface.type !== (0, f.BR)(en),
                                n = (((0, m.x1)(e) ? e.data.launch.customId : e.launch?.customId) ?? null) !== ei;
                            (l || n) && (0, o.r)(e.id);
                        }
                }, [l, en, ei]),
                {
                    availability: V,
                    isResolving: z,
                    activeMode: z ? null : (0, p.Qs)(S, V),
                    setMode: M,
                    frameSurface: en,
                    frameSurfaceOptions: el,
                    setFrameSurface: O,
                    appChannel: eu,
                    setAppChannel: j,
                    view: et,
                    setView: B,
                    frameLaunchParams: ea,
                    widgetApplicationId: D,
                }
            );
        },
    },
);
