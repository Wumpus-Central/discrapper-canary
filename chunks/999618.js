l.d(n, { A: () => V });
var t = l(477900),
    i = l(582128),
    a = l(503698),
    r = l.n(a),
    s = l(855986),
    u = l(778712),
    d = l(97808),
    o = l(688810),
    c = l(601255),
    g = l(562819),
    v = l(674658),
    f = l(898461),
    p = l(536572),
    h = l(919395),
    A = l(71393),
    b = l(253400),
    m = l(84540),
    I = l(854627),
    y = l(930349),
    k = l(993408),
    C = l(841702),
    P = l(486020),
    x = l(515718),
    N = l(94039);
function j(e) {
    return null != e.asset && "" !== e.asset;
}
var R = l(792996),
    w = l(214097),
    S = l(249360);
let L = u._3.SIZE_72,
    z = b.Ay.getEnableHardwareAcceleration() ? d.Js : d.eu;
function G(e) {
    let {
            user: n,
            guildId: l,
            isEmpty: a,
            isPreviewingMainProfileFallback: s,
            hasPendingChange: u,
            avatarDecorationPreview: d,
            isInteracting: o,
            disabled: c,
            imageDescription: v,
        } = e,
        f = (function (e) {
            let { size: n, enabled: l, isInteracting: t } = e,
                { categories: a, purchases: r } = (0, C.Ay)({ stalePurchasesOK: !0, skipFetch: !l }),
                s = i.useMemo(() => (0, k.ps)(r, a).filter(j), [r, a]),
                u = i.useCallback(
                    (e) => {
                        let l = (0, P.F_)({
                            avatarDecoration: { asset: e.asset, skuId: e.skuId },
                            canAnimate: !0,
                            size: (0, g.Te)(n),
                        });
                        null != l && (0, x.NN)(l).catch(() => {});
                    },
                    [n],
                ),
                d = (0, N.A)({ enabled: l, isInteracting: t, items: s, preload: u });
            return null != d ? { asset: d.asset, skuId: d.skuId } : null;
        })({ size: L, enabled: a && !s && !c, isInteracting: o }),
        p = null != f,
        h = p ? "placeholder" : s ? "fallback" : "default",
        {
            avatarDecorationSrc: A,
            avatarSrc: b,
            avatarPlaceholderSrc: m,
        } = (0, I.A)({
            userId: n.id,
            guildId: l,
            size: L,
            showPending: !0,
            avatarDecorationOverride: p ? f : u ? d : void 0,
            animateOnHover: !o,
        }),
        y = "default" === h && null != A && o;
    return (0, t.jsx)(z, {
        className: r()({ [w.yT]: null == A, [S.O]: "placeholder" === h }),
        src: y ? b : m,
        imageClassName: y ? w.WG : void 0,
        avatarDecoration: A,
        size: L,
        "aria-label": v ?? void 0,
        "aria-hidden": null == v,
    });
}
function V(e) {
    let { user: n, guildId: l, disabled: a, errorMessageId: r } = e,
        u = (0, i.useRef)(null),
        { analyticsLocations: d } = (0, o.Ay)(),
        b = (0, s.bG)([A.A], () => (null != l ? A.A.getGuild(l) : null)),
        I = null != l,
        k = (0, h.a4)({ user: n }),
        C = (0, h.a4)({ user: n, guildId: l ?? void 0 }),
        { pendingAvatarDecoration: P } = (0, h.CP)(l ?? void 0),
        x = void 0 !== P,
        N = null === P || (!x && null == C),
        j = I && null != k,
        w = N && j,
        S = (0, c.A)((0, h.lw)({ userValue: k, guildValue: C, pendingValue: P, guildId: l })),
        { product: L } = (0, v.q)(S?.skuId),
        z = N ? null : L?.items.find(f.T)?.label,
        V = x ? null != P : null != C,
        B =
            null != S && V
                ? {
                      onClick: () => (0, m.p)({ guildId: l ?? void 0, avatarDecoration: null }),
                      type: j ? "reset" : "remove",
                      accessibleLabel: R.intl.string(j ? R.t.pJsnPf : R.t["2U4Bga"]),
                  }
                : void 0;
    return (0, t.jsx)(y.A, {
        buttonRef: u,
        affordance: N && !j ? "add" : B,
        variant: "square",
        onClick: function () {
            return (0, g.L)({ analyticsLocations: d, guild: b ?? void 0, stackingBehavior: "stack", returnRef: u });
        },
        fieldA11yLabel: R.intl.string(R.t["7v0T9P"]),
        editButtonA11yLabel: R.intl.string(R.t.HykynS),
        currentValueA11yLabel: (function (e) {
            let { avatarDecorationPreview: n, productName: l, hasPendingSelection: t } = e;
            return null == n
                ? R.intl.string(R.t["3Xph0/"])
                : null != l && "" !== l
                  ? l
                  : R.intl.string(t ? R.t.SZPJG4 : R.t.K77yQe);
        })({ avatarDecorationPreview: S, productName: (0, p.VG)(L), hasPendingSelection: null != P }),
        "aria-haspopup": "dialog",
        disabled: a,
        errorMessageId: r,
        renderPreview: (e) =>
            (0, t.jsx)(G, {
                user: n,
                guildId: l,
                isEmpty: N,
                isPreviewingMainProfileFallback: w,
                hasPendingChange: x,
                avatarDecorationPreview: S,
                isInteracting: e,
                disabled: a,
                imageDescription: z,
            }),
    });
}
