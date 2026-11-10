var n = l(582128),
    i = l(855986),
    a = l(994500),
    r = l(287809),
    s = l(922590);
let u = [];
l.d(
    t,
    {},
    {
        q: function (e) {
            let { userId: t } = e,
                l = (0, i.bG)([a.A, r.default], () => a.A.isFriend(t) || r.default.getUser(t)?.isProvisional),
                o = (0, s.f1)(t);
            return n.useMemo(
                () =>
                    l
                        ? u
                        : o.map((e) => {
                              let { applicationId: t } = e;
                              return t;
                          }),
                [o, l],
            );
        },
    },
);
