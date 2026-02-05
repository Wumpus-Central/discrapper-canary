n.d(e, {
    $s: () => T,
    CZ: () => m,
    E: () => _,
    GD: () => L,
    Ko: () => C,
    W_: () => h,
    mJ: () => g,
    sD: () => N,
    wm: () => v,
}),
    n(321073),
    n(938796);
var i,
    l = n(64700),
    r = n(311907),
    s = n(339048),
    u = n(71393),
    a = n(576705),
    o = n(97352),
    c = n(166403),
    d = n(67480),
    A = n(324050),
    p = n(143582),
    S = n(337095),
    I = n(607940),
    f = n(163437),
    E = n(652215),
    g =
        (((i = {})[(i.NOT_LOADED = 0)] = "NOT_LOADED"),
        (i[(i.LOADING = 1)] = "LOADING"),
        (i[(i.LOADED = 2)] = "LOADED"),
        (i[(i.ERROR = 3)] = "ERROR"),
        i);
let m = (t) => {
    let { guildId: e, canFetch: n = !0, forceRefetch: i = !1 } = t,
        s = (0, r.bG)([I.A], () => (null != e ? I.A.getEntitlementsForGuildFetchState(e) : null), [e]);
    return (
        l.useEffect(() => {
            if (null == e || e === E.ME) return;
            let t = I.A.getEntitlementsForGuildFetchState(e);
            n && (t === I.e.NOT_FETCHED || i) && (0, p.f5)(e);
        }, [e, n, i]),
        { entitlementsLoaded: s === I.e.FETCHED }
    );
};
function T(t) {
    let e = t?.id ?? E.dJq,
        { entitlementsLoaded: n } = m({
            guildId: e,
            canFetch: (0, r.bG)([a.A], () => a.A.can(E.xBc.ADMINISTRATOR, t)),
        }),
        i = (0, r.bG)([A.A], () => A.A.getLastGuildDismissedTime(e)),
        s = (0, r.yK)([I.A], () => {
            let t = I.A.getEntitlementsForGuild(e),
                n = I.A.getEntitlementsForGuild(e, !1),
                i = t.map((t) => t.applicationId);
            return n.filter((t) => !i.includes(t.applicationId));
        }),
        u = (0, r.cf)([d.A], () => d.A.getSKUs()),
        o = l.useMemo(
            () =>
                s.filter((t) => {
                    let e = u[t.skuId];
                    return null != e && e.available;
                }),
            [s, u],
        );
    return n ? o.filter((t) => null != t.endsAt && t.endsAt.getTime() > Math.max(i ?? 0, Date.now() - 2592e6)) : [];
}
let _ = () => {
    let [t, e] = l.useState(0);
    return (
        l.useEffect(() => {
            e(1),
                Promise.all([
                    (0, s.qw)({ withSku: !0, withApplication: !0, entitlementType: E.zF_.APPLICATION_SUBSCRIPTION }),
                    (0, s.qw)({ withSku: !0, withApplication: !0, entitlementType: E.zF_.PURCHASE }),
                ])
                    .catch(() => {
                        e(3);
                    })
                    .then(() => {
                        e(2);
                    });
        }, []),
        { loadState: t }
    );
};
function N(t, e) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [i, s] = l.useState([]),
        [a, o] = l.useState(!1);
    return (
        l.useLayoutEffect(() => {
            null != t &&
                n &&
                (o(!0),
                (0, S.L5)(t, e)
                    .then(s)
                    .finally(() => {
                        o(!1);
                    }));
        }, [t, e, n]),
        { guilds: (0, r.yK)([u.A], () => i.map((t) => u.A.getGuild(t)).filter((t) => null != t), [i]), isFetching: a }
    );
}
let h = (t) => t.items;
function L(t, e) {
    return P(t, e, h);
}
let F = (t) => t.renewalMutations?.items ?? [];
function C(t, e) {
    return P(t, e, F);
}
function P(t, e, n) {
    let [i, s] = (0, r.yK)(
        [c.A, o.A],
        () =>
            null == t
                ? []
                : v({
                      groupSku: t,
                      SubscriptionStore: c.A,
                      SubscriptionPlanStore: o.A,
                      mapSubscriptionItems: n,
                      guildId: e,
                  }),
        [t, n, e],
    );
    return l.useMemo(() => {
        if (null != i && null != s) return { subscription: i, subscriptionPlan: s };
    }, [i, s]);
}
function v(t) {
    let { groupSku: e, SubscriptionStore: n, SubscriptionPlanStore: i, mapSubscriptionItems: l, guildId: r } = t,
        { bundledSkuIds: s, flags: u } = e;
    for (let t of n.getActiveApplicationSubscriptions() ?? []) {
        if ((0, f.PJ)(u) && null != r && t.metadata?.application_subscription_guild_id !== r) continue;
        let e = l(t)
            .map((t) => i.get(t.planId))
            .find((t) => null != t && s.includes(t.skuId));
        if (null != e) return [t, e];
    }
    return [];
}
