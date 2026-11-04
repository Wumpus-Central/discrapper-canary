l.d(t, { mf: () => N, bv: () => y });
var n = l(477900),
    a = l(582128),
    s = l(855986),
    u = l(688810),
    i = l(987144),
    d = l(533993),
    o = l(864310),
    r = l(410212),
    c = l(71393),
    m = l(786300),
    p = l(403362),
    b = l(940456),
    f = l(907878),
    g = l(475669),
    v = l(192308);
function k(e, t, a) {
    (0, v.mM)(async () => {
        let { default: s } = await Promise.all([l.e(720969), l.e(413634)]).then(l.bind(l, 483225));
        return (l) => (0, n.jsx)(s, { gameServerGame: t, guildId: e, status: a, ...l });
    });
}
var S = l(628049),
    I = l(568065),
    h = l(105518),
    C = l(792996);
let [A, y] = (0, m.A)();
function j(e) {
    return e?.plans[Math.ceil((e?.plans.length - 1) / 2)]?.id;
}
function N(e) {
    let t,
        l,
        {
            guildId: m,
            initialGameServerInstance: v,
            initialGameServerGame: y,
            stepConfig: N = S.ZN,
            children: G,
            onClose: M,
            analyticsLocation: P,
        } = e;
    a.useEffect(() => {
        ((0, b.z9)(m), (0, d.Xd)(m, !0), null == v && (0, b.cq)(m));
    }, [m, v]);
    let w = (0, s.bG)([g.A], () => g.A.getStateForGuild(m)),
        x = (0, s.bG)([c.A], () => c.A.getGuild(m)),
        { analyticsLocations: O } = (0, u.Ay)(P),
        [E, q] = a.useState(N.initialStep ?? Object.keys(N.steps)[0]),
        { available: J } = (0, o.A)(m),
        R = N.steps[E],
        [T, _] = a.useState(y?.id);
    a.useEffect(() => {
        if (null != T || v?.entitlementId == null) return;
        let e = w?.entitlements?.[v.entitlementId]?.sku?.product_id;
        null != e && _(e);
    }, [w?.entitlements, v?.entitlementId, T]);
    let [B, L] = a.useState(void 0),
        X = a.useMemo(() => {
            if (null != T) return Object.values(w?.catalog ?? {}).find((e) => e.id === T);
        }, [w?.catalog, T]),
        [z, F] = a.useState(v),
        [H, K] = a.useState(j(y) ?? v?.planId),
        W =
            ((t = (0, s.bG)([g.A], () => g.A.getStateForGuild(m)?.entitlements)),
            (l = X?.plans.find((e) => e.id === H)?.cost ?? 0),
            null == z ? l : l - ((0, r.A)(t?.[z.entitlementId]) ?? 0)),
        Y = a.useCallback(
            (e) => {
                F(e);
                let t = w?.entitlements?.[e?.entitlementId ?? ""]?.sku?.product_id;
                (null != t && _(t), K(e?.planId), U(e?.name ?? ""), ee(e?.regionId ?? ""));
            },
            [w?.entitlements],
        ),
        Q = a.useCallback(
            (e, t) => {
                (Y(void 0), _(e?.id), K(t ?? j(e)));
            },
            [Y],
        ),
        [V, Z] = a.useState(),
        [D, U] = a.useState(v?.name ?? ""),
        [$, ee] = a.useState(v?.regionId ?? ""),
        [et, el] = a.useState(!1),
        en = a.useRef(!1),
        ea = a.useCallback(
            (e) => {
                let { doRequest: t, onSuccess: l } = e;
                function n() {
                    if (en.current) return;
                    ((en.current = !0), el(!0));
                    let e = new Promise((e) => {
                        setTimeout(() => e(void 0), 1e3);
                    });
                    Promise.all([t(), e])
                        .then(() => {
                            (M(), l());
                        })
                        .catch((e) => {
                            (L(e.body?.message ?? C.intl.string(h.default.gvNWWr)), (en.current = !1));
                        })
                        .finally(() => {
                            el(!1);
                        });
                }
                null != x &&
                    (J < W
                        ? (0, i.g)({
                              analyticsLocation: P,
                              numberOfBoostsToAdd: W - J,
                              analyticsLocations: O,
                              guild: x,
                              intent: I.Pn.PERK,
                              onLoading: (e) => {
                                  el(e);
                              },
                              onSubscribeComplete: () => {
                                  n();
                              },
                              handleSubscribeModalClose: (e) => {
                                  e && n();
                              },
                          })
                        : n());
            },
            [P, O, J, x, M, W],
        ),
        es = a.useCallback(() => {
            if ((L(void 0), null == x || null == X || "" === D || null == H || "" === $)) return;
            let e = X.plans.find((e) => e.id === H);
            ((0, f.Jh)({
                guildId: x.id,
                productId: X.id,
                productName: X.name,
                skuId: H,
                planName: e?.name ?? "",
                planCost: e?.cost ?? 0,
                previousPlanCost: 0,
                region: $,
                type: "create",
            }),
                ea({ doRequest: () => (0, b.jL)(x.id, H, D, $), onSuccess: () => k(x.id, X, "created") }));
        }, [x, X, D, $, H, ea]),
        eu = a.useCallback(
            (e) => {
                if ((L(void 0), null == x || null == X || "" === D || null == H)) return;
                let t = X.plans.find((e) => e.id === H);
                ((0, f.Jh)({
                    guildId: x.id,
                    productId: X.id,
                    productName: X.name,
                    skuId: H,
                    planName: t?.name ?? "",
                    planCost: t?.cost ?? 0,
                    previousPlanCost: (t?.cost ?? 0) + W,
                    region: e.regionId,
                    type: "edit",
                }),
                    ea({
                        doRequest: () => (0, b.pj)(x.id, e.entitlementId, H, D),
                        onSuccess: () => {
                            e.planId !== H && k(x.id, X, "updated");
                        },
                    }));
            },
            [x, X, D, H, W, ea],
        ),
        ei = a.useCallback(
            (e) => {
                switch (e.type) {
                    case "close":
                        M();
                        break;
                    case "go-to-step":
                        q(e.step);
                        break;
                    case "save":
                        null != z ? eu(z) : es();
                }
            },
            [M, z, es, eu],
        ),
        ed = a.useCallback(() => {
            null != R && ei(R.onBack);
        }, [R, ei]),
        eo = a.useCallback(() => {
            null != R && ei(R.onNext);
        }, [R, ei]),
        er = a.useMemo(
            () =>
                new Set(
                    Object.values(w?.catalog ?? {})
                        .map((e) => e.provider)
                        .filter(p.Vq),
                ),
            [w?.catalog],
        ),
        ec = w?.catalog,
        em = a.useMemo(() => ec ?? {}, [ec]),
        ep = a.useMemo(() => Object.values(w?.instances ?? {}), [w]),
        eb = er.size > 0 ? Array.from(er)[0] : null,
        ef = a.useMemo(
            () => ({
                guildId: m,
                step: E,
                stepAction: R,
                stepLoading: et,
                onBack: ed,
                onNext: eo,
                gameServerGames: em,
                instances: ep,
                currentGame: X,
                setCurrentGame: Q,
                gameServerInstance: z,
                setGameServerInstance: Y,
                name: D,
                setName: U,
                regionId: $,
                setRegionId: ee,
                planCost: W,
                planId: H,
                setPlanId: K,
                footerNode: V,
                setFooterNode: Z,
                availableBoostCount: J,
                error: B,
                gameProvider: eb,
            }),
            [m, E, R, et, ed, eo, em, ep, X, Q, z, Y, D, $, W, H, V, J, B, eb],
        );
    return (0, n.jsx)(A.Provider, { value: ef, children: G });
}
