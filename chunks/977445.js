var i = n(855986),
    r = n(10716),
    a = n(147964);
n.d(
    t,
    {},
    {
        Fs: function (e) {
            return a.A.inTestModeForApplication(e) || r.A.inDevModeForApplication(e);
        },
        pq: function () {
            return null != a.A.getTestModeApplicationId() || r.A.getIsEnabled();
        },
        uS: function (e) {
            return (0, i.bG)(
                [a.A, r.A],
                () => null != e && (a.A.inTestModeForApplication(e) || r.A.inDevModeForApplication(e)),
                [e],
            );
        },
    },
);
