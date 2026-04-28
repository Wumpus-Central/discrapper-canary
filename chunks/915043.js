n.d(e, {
    $s: () => I,
    CZ: () => D,
    E: () => O,
    GD: () => G,
    Ko: () => b,
    W_: () => T,
    mJ: () => h,
    sD: () => g,
    wm: () => F,
}),
    n(321073),
    n(938796);
var i,
    l = n(64700),
    u = n(17928),
    r = n(339048),
    s = n(71393),
    a = n(576705),
    c = n(97352),
    o = n(166403),
    A = n(67480),
    d = n(324050),
    p = n(143582),
    f = n(337095),
    m = n(607940),
    E = n(163437),
    S = n(652215),
    h =
        (((i = {})[(i.NOT_LOADED = 0)] = "NOT_LOADED"),
        (i[(i.LOADING = 1)] = "LOADING"),
        (i[(i.LOADED = 2)] = "LOADED"),
        (i[(i.ERROR = 3)] = "ERROR"),
        i);
let D = (t) => {
    let { guildId: e, canFetch: n = !0, forceRefetch: i = !1 } = t,
        r = (0, u.bG)([m.A], () => (null != e ? m.A.getEntitlementsForGuildFetchState(e) : null), [e]);
    return (
        l.useEffect(() => {
            if (null == e || e === S.ME) return;
            let t = m.A.getEntitlementsForGuildFetchState(e);
            n && (t === m.e.NOT_FETCHED || i) && (0, p.f5)(e);
        }, [e, n, i]),
        { entitlementsLoaded: r === m.e.FETCHED }
    );
};
function I(t) {
    let e = t?.id ?? S.dJq,
        { entitlementsLoaded: n } = D({
            guildId: e,
            canFetch: (0, u.bG)([a.A], () => a.A.can(S.xBc.ADMINISTRATOR, t)),
        }),
        i = (0, u.bG)([d.A], () => d.A.getLastGuildDismissedTime(e)),
        r = (0, u.yK)([m.A], () => {
            let t = m.A.getEntitlementsForGuild(e),
                n = m.A.getEntitlementsForGuild(e, !1),
                i = t.map((t) => t.applicationId);
            return n.filter((t) => !i.includes(t.applicationId));
        }),
        s = (0, u.cf)([A.A], () => A.A.getSKUs()),
        c = l.useMemo(
            () =>
                r.filter((t) => {
                    let e = s[t.skuId];
                    return null != e && e.available;
                }),
            [r, s],
        );
    return n ? c.filter((t) => null != t.endsAt && t.endsAt.getTime() > Math.max(i ?? 0, Date.now() - 2592e6)) : [];
}
let O = () => {
    let [t, e] = l.useState(0);
    return (
        l.useEffect(() => {
            e(1),
                Promise.all([
                    (0, r.qw)({ withSku: !0, withApplication: !0, entitlementType: S.zF_.APPLICATION_SUBSCRIPTION }),
                    (0, r.qw)({ withSku: !0, withApplication: !0, entitlementType: S.zF_.PURCHASE }),
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
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [i, r] = l.useState([]),
        [a, c] = l.useState(!1);
    return (
        l.useLayoutEffect(() => {
            null != t &&
                n &&
                (c(!0),
                (0, f.L5)(t, e)
                    .then(r)
                    .finally(() => {
                        c(!1);
                    }));
        }, [t, e, n]),
        { guilds: (0, u.yK)([s.A], () => i.map((t) => s.A.getGuild(t)).filter((t) => null != t), [i]), isFetching: a }
    );
}
let T = (t) => t.items;
function G(t, e) {
    return w(t, e, T);
}
let _ = (t) => t.renewalMutations?.items ?? [];
function b(t, e) {
    return w(t, e, _);
}
function w(t, e, n) {
    let [i, r] = (0, u.yK)(
        [o.A, c.A],
        () =>
            null == t
                ? []
                : F({
                      groupSku: t,
                      SubscriptionStore: o.A,
                      SubscriptionPlanStore: c.A,
                      mapSubscriptionItems: n,
                      guildId: e,
                  }),
        [t, n, e],
    );
    return l.useMemo(() => {
        if (null != i && null != r) return { subscription: i, subscriptionPlan: r };
    }, [i, r]);
}
function F(t) {
    let { groupSku: e, SubscriptionStore: n, SubscriptionPlanStore: i, mapSubscriptionItems: l, guildId: u } = t,
        { bundledSkuIds: r, flags: s } = e;
    for (let t of n.getActiveApplicationSubscriptions() ?? []) {
        if ((0, E.PJ)(s) && null != u && t.metadata?.application_subscription_guild_id !== u) continue;
        let e = l(t)
            .map((t) => i.get(t.planId))
            .find((t) => null != t && r.includes(t.skuId));
        if (null != e) return [t, e];
    }
    return [];
}
