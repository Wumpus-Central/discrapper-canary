var i = n(855986),
    s = n(287809),
    l = n(166403),
    r = n(19191),
    a = n(682901);
n.d(
    t,
    {},
    {
        QQ: function () {
            let e = (0, i.bG)([l.A], () => l.A.getPremiumTypeSubscription());
            return !!e?.hasActiveTrial;
        },
        Us: function () {
            let e = (0, i.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
                t = (0, i.bG)([s.default], () => s.default.getCurrentUser());
            return e?.hasActiveTrial ? t?.premiumType : null;
        },
        qD: function () {
            return a.MB.map((e) => r.A.getUserTrialOffer(e))
                .filter((e) => null != e && !e.hasExpired)
                .shift();
        },
    },
);
