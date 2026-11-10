var l = n(855986),
    i = n(696451),
    r = n(317525),
    a = n(71393),
    o = n(576705),
    s = n(372058),
    u = n(989683);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, s.E9)(e);
            return (0, l.yK)(
                [a.A, i.Ay, r.A, o.A],
                () =>
                    t
                        ? a.A.getGuildsArray()
                              .filter((e) => (0, u.Dr)(e, o.A, i.Ay, r.A))
                              .map((e) => e.id)
                              .sort()
                        : [],
                [t],
            );
        },
    },
);
