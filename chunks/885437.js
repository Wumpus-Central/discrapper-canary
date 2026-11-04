var r = n(976860),
    i = n(734057),
    l = n(332456);
n.d(
    t,
    {},
    {
        p: function (e) {
            let t = (0, l.C)(i.A.getChannel(e), !0),
                n = t?.location ?? (0, r.PR)();
            return { ...(t ?? {}), ...(null != n ? { location: n } : {}) };
        },
    },
);
