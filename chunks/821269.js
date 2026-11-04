var a = i(582128),
    s = i(855986),
    n = i(994500),
    t = i(287809),
    r = i(922590);
let d = [];
i.d(
    l,
    {},
    {
        q: function (e) {
            let { userId: l } = e,
                i = (0, s.bG)([n.A, t.default], () => n.A.isFriend(l) || t.default.getUser(l)?.isProvisional),
                u = (0, r.f1)(l);
            return a.useMemo(
                () =>
                    i
                        ? d
                        : u.map((e) => {
                              let { applicationId: l } = e;
                              return l;
                          }),
                [u, i],
            );
        },
    },
);
