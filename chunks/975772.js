n.d(t, { x: () => p });
var r = n(913527),
    i = n.n(r),
    a = n(442837),
    o = n(704215),
    s = n(266454),
    l = n(78839),
    c = n(670087),
    u = n(921944);
let d = 1209600000,
    f = i()("2025-11-10 10:00:00-08:00").toDate(),
    p = () => {
        let { enabled: e, forceNotice: t } = c.j.useExperiment({ location: "useShouldShowPriceDecreaseNotice" }),
            n = (0, a.e7)([l.Z], () => l.Z.getPremiumTypeSubscription());
        if (
            (0, s.Nj)(o.z.PREMIUM_SETTINGS_SUBSCRIPTION_INFO_NOTICE) ||
            (new Date() < f && !t) ||
            null == n ||
            (null != n.createdAt && n.createdAt > f && !t)
        )
            return !1;
        let r = n.currentPeriodStart,
            i = n.currentPeriodEnd,
            p = i <= new Date(Date.now() + d) && i > new Date();
        return r > f
            ? ((0, s.Q3)(o.z.PREMIUM_SETTINGS_SUBSCRIPTION_INFO_NOTICE, { dismissAction: u.L.AUTO_DISMISS }), !1)
            : !!p && e;
    };
