l.d(n, { A: () => j });
var t = l(477900),
    i = l(582128),
    a = l(503698),
    r = l.n(a),
    s = l(855986),
    u = l(688810),
    d = l(674658),
    o = l(872200),
    c = l(637193),
    g = l(536572),
    v = l(919395),
    f = l(84540),
    p = l(836602),
    h = l(930349),
    A = l(993408),
    b = l(841702),
    m = l(746002),
    I = l(515718),
    y = l(94039);
function k(e) {
    let n = (0, m.getCollectiblesItemAssetUrl)({ skuId: e.skuId, assetFormat: m.CollectiblesItemAssetFormat.STATIC });
    null != n && (0, I.NN)(n).catch(() => {});
}
var C = l(792996),
    P = l(352497),
    x = l(249360);
function N(e) {
    let {
            user: n,
            guildId: l,
            nameplatePreview: a,
            isEmpty: u,
            hasMainProfileFallback: d,
            isInteracting: c,
            disabled: g,
        } = e,
        v = (0, s.bG)([p.A], () => p.A.getPendingChanges(null).pendingGlobalName),
        f = (0, s.bG)([p.A], () => p.A.getPendingChanges(l ?? null).pendingNickname),
        h = (0, s.bG)([p.A], () => p.A.getPendingChanges(l ?? null).pendingDisplayNameStyles),
        m = (0, s.bG)([p.A], () => p.A.getPendingChanges(null).pendingPrimaryGuildId),
        I = (0, s.bG)([p.A], () => p.A.getPendingChanges(l ?? null).pendingAvatar),
        C = (function (e) {
            let { enabled: n, isInteracting: l } = e,
                { categories: t, purchases: a } = (0, b.Ay)({ stalePurchasesOK: !0, skipFetch: !n }),
                r = i.useMemo(() => (0, A.zd)(a, t), [a, t]),
                s = (0, y.A)({ enabled: n, isInteracting: l, items: r, preload: k });
            return null != s ? { skuId: s.skuId, asset: s.asset, label: s.label, palette: s.palette } : null;
        })({ enabled: u && !d && !g, isInteracting: c }),
        N = null != C,
        j = N ? void 0 : a?.label;
    return (0, t.jsx)("div", {
        className: r()(P.M, { [x.O]: N }),
        role: null != j ? "img" : void 0,
        "aria-label": j,
        children: (0, t.jsx)("div", {
            "aria-hidden": !0,
            children: (0, t.jsx)(o.A, {
                user: n,
                guildId: l ?? void 0,
                nameplate: N ? C : a,
                showPlaceholderUser: (u && !d) || !c,
                isHighlighted: c,
                pendingGlobalName: v,
                pendingNickname: f,
                pendingDisplayNameStyles: h,
                pendingPrimaryGuildId: m,
                pendingAvatar: I,
            }),
        }),
    });
}
function j(e) {
    let { user: n, guildId: l, disabled: a, errorMessageId: r } = e,
        s = i.useRef(null),
        { analyticsLocations: o } = (0, u.Ay)(),
        p = null != l,
        { guildNameplate: A, pendingNameplate: b } = (0, v.rv)(n, l ?? void 0),
        m = n.collectibles?.nameplate,
        I = p ? A : m,
        y = void 0 !== b,
        k = null === b || (!y && null == I),
        P = p && null != m,
        x = (0, v.lw)({ pendingValue: b, userValue: m, guildValue: A, guildId: l ?? void 0 }),
        { product: j } = (0, d.q)(x?.skuId),
        R = y ? null != b : null != I,
        w =
            null != x && R
                ? {
                      onClick: () => (0, f.p)({ guildId: l ?? void 0, nameplate: null }),
                      type: P ? "reset" : "remove",
                      accessibleLabel: C.intl.string(P ? C.t.neYqhR : C.t["9zwziY"]),
                  }
                : void 0,
        S = i.useCallback(() => {
            (0, c.p)({ analyticsLocations: o, guildId: l ?? void 0, stackingBehavior: "stack", returnRef: s });
        }, [o, l]);
    return (0, t.jsx)(h.A, {
        buttonRef: s,
        affordance: k && !P ? "add" : w,
        variant: "bar",
        onClick: S,
        fieldA11yLabel: C.intl.string(C.t.x5CoXR),
        editButtonA11yLabel: C.intl.string(C.t.BwdeM1),
        currentValueA11yLabel: (function (e) {
            let { nameplatePreview: n, productName: l, hasPendingSelection: t } = e;
            return null == n
                ? C.intl.string(C.t["3Xph0/"])
                : null != l && "" !== l
                  ? l
                  : C.intl.string(t ? C.t.mo1Huz : C.t.s9kNKK);
        })({ nameplatePreview: x, productName: (0, g.VG)(j), hasPendingSelection: null != b }),
        "aria-haspopup": "dialog",
        disabled: a,
        errorMessageId: r,
        renderPreview: (e) =>
            (0, t.jsx)(N, {
                user: n,
                guildId: l,
                nameplatePreview: x,
                isEmpty: k,
                hasMainProfileFallback: P,
                isInteracting: e,
                disabled: a,
            }),
    });
}
