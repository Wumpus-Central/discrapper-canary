n.d(e, {
    $s: () => m,
    CZ: () => I,
    E: () => v,
    GD: () => h,
    Ko: () => y,
    W_: () => P,
    mJ: () => g,
    sD: () => E,
    wm: () => N,
}),
    n(321073),
    n(896048),
    n(492834),
    n(938796);
var l,
    r = n(64700),
    i = n(311907),
    u = n(339048),
    o = n(71393),
    s = n(576705),
    a = n(97352),
    c = n(166403),
    d = n(67480),
    p = n(324050),
    f = n(143582),
    S = n(337095),
    A = n(607940),
    b = n(163437),
    O = n(652215),
    g =
        (((l = {})[(l.NOT_LOADED = 0)] = "NOT_LOADED"),
        (l[(l.LOADING = 1)] = "LOADING"),
        (l[(l.LOADED = 2)] = "LOADED"),
        (l[(l.ERROR = 3)] = "ERROR"),
        l);
let I = (t) => {
    let { guildId: e, canFetch: n = !0, forceRefetch: l = !1 } = t,
        u = (0, i.bG)([A.A], () => (null != e ? A.A.getEntitlementsForGuildFetchState(e) : null), [e]);
    return (
        r.useEffect(() => {
            if (null == e || e === O.ME) return;
            let t = A.A.getEntitlementsForGuildFetchState(e);
            n && (t === A.e.NOT_FETCHED || l) && (0, f.f5)(e);
        }, [e, n, l]),
        {
            entitlementsLoaded: u === A.e.FETCHED,
        }
    );
};

function m(t) {
    var e;
    let n = null != (e = null == t ? void 0 : t.id) ? e : O.dJq,
        { entitlementsLoaded: l } = I({
            guildId: n,
            canFetch: (0, i.bG)([s.A], () => s.A.can(O.xBc.ADMINISTRATOR, t)),
        }),
        u = (0, i.bG)([p.A], () => p.A.getLastGuildDismissedTime(n)),
        o = (0, i.yK)([A.A], () => {
            let t = A.A.getEntitlementsForGuild(n),
                e = A.A.getEntitlementsForGuild(n, !1),
                l = t.map((t) => t.applicationId);
            return e.filter((t) => !l.includes(t.applicationId));
        }),
        a = (0, i.cf)([d.A], () => d.A.getSKUs()),
        c = r.useMemo(
            () =>
                o.filter((t) => {
                    let e = a[t.skuId];
                    return null != e && e.available;
                }),
            [o, a],
        );
    return l
        ? c.filter((t) => null != t.endsAt && t.endsAt.getTime() > Math.max(null != u ? u : 0, Date.now() - 2592e6))
        : [];
}
let v = () => {
    let [t, e] = r.useState(0);
    return (
        r.useEffect(() => {
            e(1),
                Promise.all([
                    (0, u.qw)({
                        withSku: !0,
                        withApplication: !0,
                        entitlementType: O.zF_.APPLICATION_SUBSCRIPTION,
                    }),
                    (0, u.qw)({
                        withSku: !0,
                        withApplication: !0,
                        entitlementType: O.zF_.PURCHASE,
                    }),
                ])
                    .catch(() => {
                        e(3);
                    })
                    .then(() => {
                        e(2);
                    });
        }, []),
        {
            loadState: t,
        }
    );
};

function E(t, e) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [l, u] = r.useState([]),
        [s, a] = r.useState(!1);
    return (
        r.useLayoutEffect(() => {
            null != t &&
                n &&
                (a(!0),
                (0, S.L5)(t, e)
                    .then(u)
                    .finally(() => {
                        a(!1);
                    }));
        }, [t, e, n]),
        {
            guilds: (0, i.yK)([o.A], () => l.map((t) => o.A.getGuild(t)).filter((t) => null != t), [l]),
            isFetching: s,
        }
    );
}
let P = (t) => t.items;

function h(t, e) {
    return _(t, e, P);
}
let T = (t) => {
    var e, n;
    return null != (e = null == (n = t.renewalMutations) ? void 0 : n.items) ? e : [];
};

function y(t, e) {
    return _(t, e, T);
}

function _(t, e, n) {
    let [l, u] = (0, i.yK)(
        [c.A, a.A],
        () =>
            null == t
                ? []
                : N({
                      groupSku: t,
                      SubscriptionStore: c.A,
                      SubscriptionPlanStore: a.A,
                      mapSubscriptionItems: n,
                      guildId: e,
                  }),
        [t, n, e],
    );
    return r.useMemo(() => {
        if (null != l && null != u)
            return {
                subscription: l,
                subscriptionPlan: u,
            };
    }, [l, u]);
}

function N(t) {
    var e, n;
    let { groupSku: l, SubscriptionStore: r, SubscriptionPlanStore: i, mapSubscriptionItems: u, guildId: o } = t,
        { bundledSkuIds: s, flags: a } = l;
    for (let t of null != (e = r.getActiveApplicationSubscriptions()) ? e : []) {
        if (
            (0, b.PJ)(a) &&
            null != o &&
            (null == (n = t.metadata) ? void 0 : n.application_subscription_guild_id) !== o
        )
            continue;
        let e = u(t)
            .map((t) => i.get(t.planId))
            .find((t) => null != t && s.includes(t.skuId));
        if (null != e) return [t, e];
    }
    return [];
}
