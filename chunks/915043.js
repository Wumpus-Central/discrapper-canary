i.d(e, {
    $s: () => C,
    CZ: () => E,
    E: () => f,
    GD: () => P,
    Ko: () => L,
    W_: () => N,
    mJ: () => h,
    sD: () => g,
    wm: () => O,
}),
    i(321073),
    i(938796);
var n,
    l = i(64700),
    s = i(311907),
    a = i(339048),
    r = i(71393),
    o = i(576705),
    u = i(97352),
    c = i(166403),
    d = i(67480),
    p = i(324050),
    S = i(143582),
    I = i(337095),
    A = i(607940),
    _ = i(163437),
    T = i(652215),
    h =
        (((n = {})[(n.NOT_LOADED = 0)] = "NOT_LOADED"),
        (n[(n.LOADING = 1)] = "LOADING"),
        (n[(n.LOADED = 2)] = "LOADED"),
        (n[(n.ERROR = 3)] = "ERROR"),
        n);
let E = (t) => {
    let { guildId: e, canFetch: i = !0, forceRefetch: n = !1 } = t,
        a = (0, s.bG)([A.A], () => (null != e ? A.A.getEntitlementsForGuildFetchState(e) : null), [e]);
    return (
        l.useEffect(() => {
            if (null == e || e === T.ME) return;
            let t = A.A.getEntitlementsForGuildFetchState(e);
            i && (t === A.e.NOT_FETCHED || n) && (0, S.f5)(e);
        }, [e, i, n]),
        { entitlementsLoaded: a === A.e.FETCHED }
    );
};
function C(t) {
    let e = t?.id ?? T.dJq,
        { entitlementsLoaded: i } = E({
            guildId: e,
            canFetch: (0, s.bG)([o.A], () => o.A.can(T.xBc.ADMINISTRATOR, t)),
        }),
        n = (0, s.bG)([p.A], () => p.A.getLastGuildDismissedTime(e)),
        a = (0, s.yK)([A.A], () => {
            let t = A.A.getEntitlementsForGuild(e),
                i = A.A.getEntitlementsForGuild(e, !1),
                n = t.map((t) => t.applicationId);
            return i.filter((t) => !n.includes(t.applicationId));
        }),
        r = (0, s.cf)([d.A], () => d.A.getSKUs()),
        u = l.useMemo(
            () =>
                a.filter((t) => {
                    let e = r[t.skuId];
                    return null != e && e.available;
                }),
            [a, r],
        );
    return i ? u.filter((t) => null != t.endsAt && t.endsAt.getTime() > Math.max(n ?? 0, Date.now() - 2592e6)) : [];
}
let f = () => {
    let [t, e] = l.useState(0);
    return (
        l.useEffect(() => {
            e(1),
                Promise.all([
                    (0, a.qw)({ withSku: !0, withApplication: !0, entitlementType: T.zF_.APPLICATION_SUBSCRIPTION }),
                    (0, a.qw)({ withSku: !0, withApplication: !0, entitlementType: T.zF_.PURCHASE }),
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
function g(t, e) {
    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [n, a] = l.useState([]),
        [o, u] = l.useState(!1);
    return (
        l.useLayoutEffect(() => {
            null != t &&
                i &&
                (u(!0),
                (0, I.L5)(t, e)
                    .then(a)
                    .finally(() => {
                        u(!1);
                    }));
        }, [t, e, i]),
        { guilds: (0, s.yK)([r.A], () => n.map((t) => r.A.getGuild(t)).filter((t) => null != t), [n]), isFetching: o }
    );
}
let N = (t) => t.items;
function P(t, e) {
    return v(t, e, N);
}
let m = (t) => t.renewalMutations?.items ?? [];
function L(t, e) {
    return v(t, e, m);
}
function v(t, e, i) {
    let [n, a] = (0, s.yK)(
        [c.A, u.A],
        () =>
            null == t
                ? []
                : O({
                      groupSku: t,
                      SubscriptionStore: c.A,
                      SubscriptionPlanStore: u.A,
                      mapSubscriptionItems: i,
                      guildId: e,
                  }),
        [t, i, e],
    );
    return l.useMemo(() => {
        if (null != n && null != a) return { subscription: n, subscriptionPlan: a };
    }, [n, a]);
}
function O(t) {
    let { groupSku: e, SubscriptionStore: i, SubscriptionPlanStore: n, mapSubscriptionItems: l, guildId: s } = t,
        { bundledSkuIds: a, flags: r } = e;
    for (let t of i.getActiveApplicationSubscriptions() ?? []) {
        if ((0, _.PJ)(r) && null != s && t.metadata?.application_subscription_guild_id !== s) continue;
        let e = l(t)
            .map((t) => n.get(t.planId))
            .find((t) => null != t && a.includes(t.skuId));
        if (null != e) return [t, e];
    }
    return [];
}
