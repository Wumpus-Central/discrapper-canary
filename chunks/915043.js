n.d(t, {
    $s: () => y,
    CZ: () => b,
    E: () => O,
    GD: () => S,
    Ko: () => T,
    W_: () => v,
    mJ: () => E,
    sD: () => A,
    wm: () => N,
}),
    n(321073),
    n(896048),
    n(492834),
    n(938796);
var r = n(64700),
    i = n(311907),
    a = n(339048),
    s = n(71393),
    o = n(576705),
    l = n(97352),
    c = n(166403),
    u = n(67480),
    d = n(324050),
    f = n(143582),
    p = n(337095),
    _ = n(607940),
    h = n(163437),
    m = n(652215);
let g = 2592e6;
var E = (function (e) {
    return (
        (e[(e.NOT_LOADED = 0)] = "NOT_LOADED"),
        (e[(e.LOADING = 1)] = "LOADING"),
        (e[(e.LOADED = 2)] = "LOADED"),
        (e[(e.ERROR = 3)] = "ERROR"),
        e
    );
})({});
let b = (e) => {
    let { guildId: t, canFetch: n = !0, forceRefetch: a = !1 } = e,
        s = (0, i.bG)([_.A], () => (null != t ? _.A.getEntitlementsForGuildFetchState(t) : null), [t]);
    return (
        r.useEffect(() => {
            if (null == t || t === m.ME) return;
            let e = _.A.getEntitlementsForGuildFetchState(t);
            n && (e === _.e.NOT_FETCHED || a) && (0, f.f5)(t);
        }, [t, n, a]),
        {
            entitlementsLoaded: s === _.e.FETCHED,
        }
    );
};

function y(e) {
    var t;
    let n = null != (t = null == e ? void 0 : e.id) ? t : m.dJq,
        { entitlementsLoaded: a } = b({
            guildId: n,
            canFetch: (0, i.bG)([o.A], () => o.A.can(m.xBc.ADMINISTRATOR, e)),
        }),
        s = (0, i.bG)([d.A], () => d.A.getLastGuildDismissedTime(n)),
        l = (0, i.yK)([_.A], () => {
            let e = _.A.getEntitlementsForGuild(n),
                t = _.A.getEntitlementsForGuild(n, !1),
                r = e.map((e) => e.applicationId);
            return t.filter((e) => !r.includes(e.applicationId));
        }),
        c = (0, i.cf)([u.A], () => u.A.getSKUs()),
        f = r.useMemo(
            () =>
                l.filter((e) => {
                    let t = c[e.skuId];
                    return null != t && t.available;
                }),
            [l, c],
        );
    return a
        ? f.filter((e) => null != e.endsAt && e.endsAt.getTime() > Math.max(null != s ? s : 0, Date.now() - g))
        : [];
}
let O = () => {
    let [e, t] = r.useState(0);
    return (
        r.useEffect(() => {
            t(1),
                Promise.all([
                    (0, a.qw)({
                        withSku: !0,
                        withApplication: !0,
                        entitlementType: m.zF_.APPLICATION_SUBSCRIPTION,
                    }),
                    (0, a.qw)({
                        withSku: !0,
                        withApplication: !0,
                        entitlementType: m.zF_.PURCHASE,
                    }),
                ])
                    .catch(() => {
                        t(3);
                    })
                    .then(() => {
                        t(2);
                    });
        }, []),
        {
            loadState: e,
        }
    );
};

function A(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [a, o] = r.useState([]),
        [l, c] = r.useState(!1);
    return (
        r.useLayoutEffect(() => {
            null != e &&
                n &&
                (c(!0),
                (0, p.L5)(e, t)
                    .then(o)
                    .finally(() => {
                        c(!1);
                    }));
        }, [e, t, n]),
        {
            guilds: (0, i.yK)([s.A], () => a.map((e) => s.A.getGuild(e)).filter((e) => null != e), [a]),
            isFetching: l,
        }
    );
}
let v = (e) => e.items;

function S(e, t) {
    return C(e, t, v);
}
let I = (e) => {
    var t, n;
    return null != (t = null == (n = e.renewalMutations) ? void 0 : n.items) ? t : [];
};

function T(e, t) {
    return C(e, t, I);
}

function C(e, t, n) {
    let [a, s] = (0, i.yK)(
        [c.A, l.A],
        () =>
            null == e
                ? []
                : N({
                      groupSku: e,
                      SubscriptionStore: c.A,
                      SubscriptionPlanStore: l.A,
                      mapSubscriptionItems: n,
                      guildId: t,
                  }),
        [e, n, t],
    );
    return r.useMemo(() => {
        if (null != a && null != s)
            return {
                subscription: a,
                subscriptionPlan: s,
            };
    }, [a, s]);
}

function N(e) {
    var t, n;
    let { groupSku: r, SubscriptionStore: i, SubscriptionPlanStore: a, mapSubscriptionItems: s, guildId: o } = e,
        { bundledSkuIds: l, flags: c } = r;
    for (let e of null != (t = i.getActiveApplicationSubscriptions()) ? t : []) {
        if (
            (0, h.PJ)(c) &&
            null != o &&
            (null == (n = e.metadata) ? void 0 : n.application_subscription_guild_id) !== o
        )
            continue;
        let t = s(e)
            .map((e) => a.get(e.planId))
            .find((e) => null != e && l.includes(e.skuId));
        if (null != t) return [e, t];
    }
    return [];
}
