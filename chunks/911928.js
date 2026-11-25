var s = u(477900),
    c = u(582128),
    r = u(855986),
    a = u(747653),
    d = u(165363),
    n = u(918723);
u.d(
    t,
    {},
    {
        default: function (e) {
            let { launchId: t, ...u } = e,
                p = (0, r.bG)([a.A], () => a.A.getRecord(t), [t]),
                i = c.useMemo(() => (null == p ? null : (0, d.x)(p)), [p]);
            return (0, s.jsx)(n.P, { ...u, trace: i });
        },
    },
);
