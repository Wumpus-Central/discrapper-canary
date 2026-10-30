(n.d(e, {
    $s: () => O,
    CZ: () => I,
    E: () => g,
    GD: () => b,
    Ko: () => L,
    W_: () => G,
    mJ: () => D,
    sD: () => T,
    wm: () => _,
}),
    n(321073),
    n(938796));
var i,
    l = n(582128),
    u = n(931093),
    r = n(17928),
    s = n(339048),
    a = n(71393),
    c = n(576705),
    o = n(97352),
    A = n(166403),
    d = n(67480),
    p = n(324050),
    f = n(143582),
    m = n(337095),
    E = n(607940),
    S = n(163437),
    h = n(652215),
    D =
        (((i = {})[(i.NOT_LOADED = 0)] = "NOT_LOADED"),
        (i[(i.LOADING = 1)] = "LOADING"),
        (i[(i.LOADED = 2)] = "LOADED"),
        (i[(i.ERROR = 3)] = "ERROR"),
        i);
function I(t) {
    let { guildId: e, canFetch: n = !0, forceRefetch: i = !1 } = t,
        u = (0, r.bG)([E.A], () => (null != e ? E.A.getEntitlementsForGuildFetchState(e) : null), [e]);
    return (
        l.useEffect(() => {
            if (null == e || e === h.ME) return;
            let t = E.A.getEntitlementsForGuildFetchState(e);
            n && (t === E.e.NOT_FETCHED || i) && (0, f.f5)(e);
        }, [e, n, i]),
        { entitlementsLoaded: u === E.e.FETCHED }
    );
}
function O(t) {
    let e = t?.id ?? h.dJq,
        { entitlementsLoaded: n } = I({
            guildId: e,
            canFetch: (0, r.bG)([c.A], () => c.A.can(h.xBc.ADMINISTRATOR, t)),
        }),
        i = (0, r.bG)([p.A], () => p.A.getLastGuildDismissedTime(e)),
        u = (0, r.yK)([E.A], () => {
            let t = E.A.getEntitlementsForGuild(e),
                n = E.A.getEntitlementsForGuild(e, !1),
                i = t.map((t) => t.applicationId);
            return n.filter((t) => !i.includes(t.applicationId));
        }),
        s = (0, r.cf)([d.A], () => d.A.getSKUs()),
        a = l.useMemo(
            () =>
                u.filter((t) => {
                    let e = s[t.skuId];
                    return null != e && e.available;
                }),
            [u, s],
        );
    return n ? a.filter((t) => null != t.endsAt && t.endsAt.getTime() > Math.max(i ?? 0, Date.now() - 2592e6)) : [];
}
let g = () => {
    let [t, e] = l.useState(0);
    return (
        l.useEffect(() => {
            (e(1),
                Promise.all([
                    (0, s.qw)({ withSku: !0, withApplication: !0, entitlementType: u.z.APPLICATION_SUBSCRIPTION }),
                    (0, s.qw)({ withSku: !0, withApplication: !0, entitlementType: u.z.PURCHASE }),
                ])
                    .catch(() => {
                        e(3);
                    })
                    .then(() => {
                        e(2);
                    }));
        }, []),
        { loadState: t }
    );
};
function T(t, e) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [i, u] = l.useState([]),
        [s, c] = l.useState(!1);
    return (
        l.useLayoutEffect(() => {
            null != t &&
                n &&
                (c(!0),
                (0, m.L5)(t, e)
                    .then(u)
                    .finally(() => {
                        c(!1);
                    }));
        }, [t, e, n]),
        { guilds: (0, r.yK)([a.A], () => i.map((t) => a.A.getGuild(t)).filter((t) => null != t), [i]), isFetching: s }
    );
}
function G(t) {
    return t.items;
}
function b(t, e) {
    return R(t, e, G);
}
function w(t) {
    return t.renewalMutations?.items ?? [];
}
function L(t, e) {
    return R(t, e, w);
}
function R(t, e, n) {
    let [i, u] = (0, r.yK)(
        [A.A, o.A],
        () =>
            null == t
                ? []
                : _({
                      groupSku: t,
                      SubscriptionStore: A.A,
                      SubscriptionPlanStore: o.A,
                      mapSubscriptionItems: n,
                      guildId: e,
                  }),
        [t, n, e],
    );
    return l.useMemo(() => {
        if (null != i && null != u) return { subscription: i, subscriptionPlan: u };
    }, [i, u]);
}
function _(t) {
    let { groupSku: e, SubscriptionStore: n, SubscriptionPlanStore: i, mapSubscriptionItems: l, guildId: u } = t,
        { bundledSkuIds: r, flags: s } = e;
    for (let t of n.getActiveApplicationSubscriptions() ?? []) {
        if ((0, S.PJ)(s) && null != u && t.metadata?.application_subscription_guild_id !== u) continue;
        let e = l(t)
            .map((t) => i.get(t.planId))
            .find((t) => null != t && r.includes(t.skuId));
        if (null != e) return [t, e];
    }
    return [];
}
