var a = n(855986),
    i = n(696451),
    r = n(317525),
    l = n(71393),
    A = n(576705),
    u = n(372058),
    o = n(989683);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, u.E9)(e);
            return (0, a.yK)(
                [l.A, i.Ay, r.A, A.A],
                () =>
                    t
                        ? l.A.getGuildsArray()
                              .filter((e) => (0, o.Dr)(e, A.A, i.Ay, r.A))
                              .map((e) => e.id)
                              .sort()
                        : [],
                [t],
            );
        },
    },
);
