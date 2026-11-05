var i = l(582128),
    a = l(855986),
    s = l(994500),
    n = l(287809),
    r = l(922590);
let d = [];
l.d(
    t,
    {},
    {
        q: function (e) {
            let { userId: t } = e,
                l = (0, a.bG)([s.A, n.default], () => s.A.isFriend(t) || n.default.getUser(t)?.isProvisional),
                u = (0, r.f1)(t);
            return i.useMemo(
                () =>
                    l
                        ? d
                        : u.map((e) => {
                              let { applicationId: t } = e;
                              return t;
                          }),
                [u, l],
            );
        },
    },
);
