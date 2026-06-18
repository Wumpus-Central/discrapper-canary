l.d(n, { A: () => V });
var t = l(627968),
    a = l(503698),
    r = l.n(a),
    i = l(17928),
    s = l(778712),
    o = l(97808),
    u = l(688810),
    d = l(601255),
    c = l(562819),
    g = l(674658),
    v = l(536572),
    h = l(919395),
    f = l(71393),
    p = l(19575),
    m = l(84540),
    b = l(854627),
    x = l(930349),
    I = l(64700),
    C = l(993408),
    A = l(841702),
    k = l(486020),
    y = l(515718),
    j = l(735438),
    N = l.n(j);
let E = (e) => null != e.asset && "" !== e.asset;
var w = l(375708),
    S = l(209150);
let R = s._3.SIZE_72,
    P = p.Ay.getEnableHardwareAcceleration() ? o.Js : o.eu;
function D(e) {
    let {
            user: n,
            guildId: l,
            isEmpty: a,
            isPreviewingMainProfileFallback: i,
            hasPendingChange: s,
            avatarDecorationPreview: o,
            isInteracting: u,
            disabled: d,
        } = e,
        g = (function (e) {
            let { size: n, enabled: l, isInteracting: t } = e,
                { categories: a, purchases: r } = (0, A.Ay)({ stalePurchasesOK: !0 }),
                i = (function (e) {
                    let { enabled: n, isInteracting: l, items: t, preload: a } = e,
                        [r, i] = I.useState(null),
                        s = I.useRef(null),
                        o = I.useRef(a);
                    return (
                        I.useEffect(() => {
                            o.current = a;
                        }, [a]),
                        I.useEffect(() => {
                            if (!n || 0 === t.length || null != s.current) return;
                            let e = (function (e) {
                                let { shuffle: n = N().shuffle, maxSize: l = 25 } =
                                        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    t = n(e).slice(0, l),
                                    a = 0;
                                return {
                                    current: () => (0 === t.length ? null : t[a % t.length]),
                                    advance: () => {
                                        0 !== t.length && (a = (a + 1) % t.length);
                                    },
                                    get size() {
                                        return t.length;
                                    },
                                };
                            })(t);
                            s.current = e;
                            let l = e.current();
                            null != l && o.current?.(l);
                        }, [n, t]),
                        I.useEffect(() => {
                            let e = s.current;
                            if (!n || !l || null == e) return void i(null);
                            i(e.current()), e.advance();
                            let t = e.current();
                            null != t && o.current?.(t);
                        }, [l]),
                        n && l ? r : null
                    );
                })({
                    enabled: l,
                    isInteracting: t,
                    items: I.useMemo(() => (0, C.ps)(r, a).filter(E), [r, a]),
                    preload: I.useCallback(
                        (e) => {
                            let l = (0, k.F_)({
                                avatarDecoration: { asset: e.asset, skuId: e.skuId },
                                canAnimate: !0,
                                size: (0, c.Te)(n),
                            });
                            null != l && (0, y.NN)(l).catch(() => {});
                        },
                        [n],
                    ),
                });
            return null != i ? { asset: i.asset, skuId: i.skuId } : null;
        })({ size: R, enabled: a && !i && !d, isInteracting: u }),
        v = null != g,
        h = v ? "placeholder" : i ? "fallback" : "default",
        {
            avatarDecorationSrc: f,
            avatarSrc: p,
            avatarPlaceholderSrc: m,
        } = (0, b.A)({
            userId: n.id,
            guildId: l,
            size: R,
            showPending: !0,
            avatarDecorationOverride: v ? g : s ? o : void 0,
            animateOnHover: !u,
        }),
        x = "default" === h && null != f && u;
    return (0, t.jsx)(P, {
        className: r()({ [S.yT]: null == f, [S.m_]: "placeholder" === h }),
        src: x ? p : m,
        imageClassName: x ? S.WG : void 0,
        avatarDecoration: f,
        size: R,
        "aria-hidden": !0,
    });
}
function V(e) {
    let { user: n, guildId: l, disabled: a, errorMessageId: r } = e,
        { analyticsLocations: s } = (0, u.Ay)(),
        o = (0, i.bG)([f.A], () => (null != l ? f.A.getGuild(l) : null)),
        p = null != l,
        b = (0, h.a4)({ user: n }),
        I = (0, h.a4)({ user: n, guildId: l ?? void 0 }),
        { pendingAvatarDecoration: C } = (0, h.CP)(l ?? void 0),
        A = void 0 !== C,
        k = null === C || (!A && null == I),
        y = p && null != b,
        j = k && y,
        N = (0, d.A)((0, h.lw)({ userValue: b, guildValue: I, pendingValue: C, guildId: l })),
        { product: E } = (0, g.q)(N?.skuId),
        S = A ? null != C : null != I,
        R =
            null != N && S
                ? {
                      onClick: () => (0, m.p)({ guildId: l ?? void 0, avatarDecoration: null }),
                      type: y ? "reset" : "remove",
                      accessibleLabel: w.intl.string(y ? w.t.pJsnPf : w.t["2U4Bga"]),
                  }
                : void 0;
    return (0, t.jsx)(x.V, {
        affordance: k && !y ? "add" : R,
        variant: "square",
        onClick: () => (0, c.L)({ analyticsLocations: s, guild: o ?? void 0, stackingBehavior: "stack" }),
        accessibleLabel: w.intl.string(w.t["7v0T9P"]),
        accessibleValue: (function (e) {
            let { avatarDecorationPreview: n, productName: l, hasPendingSelection: t } = e;
            return null == n
                ? w.intl.string(w.t["3Xph0/"])
                : null != l && "" !== l
                  ? l
                  : w.intl.string(t ? w.t.SZPJG4 : w.t.K77yQe);
        })({ avatarDecorationPreview: N, productName: (0, v.VG)(E), hasPendingSelection: null != C }),
        "aria-haspopup": "dialog",
        disabled: a,
        errorMessageId: r,
        renderPreview: (e) =>
            (0, t.jsx)(D, {
                user: n,
                guildId: l,
                isEmpty: k,
                isPreviewingMainProfileFallback: j,
                hasPendingChange: A,
                avatarDecorationPreview: N,
                isInteracting: e,
                disabled: a,
            }),
    });
}
