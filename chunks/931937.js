var a = n(582128),
    i = n(855986),
    r = n(696451),
    l = n(317525),
    A = n(71393),
    u = n(576705),
    o = n(372058),
    s = n(989683);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, o.E9)(e),
                n = (0, i.yK)(
                    [A.A, r.Ay, l.A, u.A],
                    () =>
                        t
                            ? A.A.getGuildsArray()
                                  .filter((e) => (0, s.Dr)(e, u.A, r.Ay, l.A))
                                  .map((e) => e.id)
                                  .sort()
                            : [],
                    [t],
                ),
                d = n.join(",");
            return a.useMemo(() => n, [d]);
        },
    },
);
