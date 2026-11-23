var l = n(582128),
    i = n(855986),
    r = n(994500),
    u = n(287809),
    a = n(922590);
let o = [];
n.d(
    t,
    {},
    {
        q: function (e) {
            let { userId: t } = e,
                n = (0, i.bG)([r.A, u.default], () => r.A.isFriend(t) || u.default.getUser(t)?.isProvisional),
                s = (0, a.f1)(t);
            return l.useMemo(
                () =>
                    n
                        ? o
                        : s.map((e) => {
                              let { applicationId: t } = e;
                              return t;
                          }),
                [s, n],
            );
        },
    },
);
