var l = n(855986),
    r = n(696451),
    i = n(317525),
    o = n(71393),
    a = n(576705),
    s = n(372058),
    u = n(989683);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, s.E9)(e);
            return (0, l.yK)(
                [o.A, r.Ay, i.A, a.A],
                () =>
                    t
                        ? o.A.getGuildsArray()
                              .filter((e) => (0, u.Dr)(e, a.A, r.Ay, i.A))
                              .map((e) => e.id)
                              .sort()
                        : [],
                [t],
            );
        },
    },
);
