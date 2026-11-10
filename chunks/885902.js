var l = t(855986),
    i = t(95701),
    a = t(734057),
    r = t(317525),
    s = t(71393),
    d = t(278296),
    u = t(677166),
    c = t(652215);
t.d(
    n,
    {},
    {
        F: function (e, n) {
            let t = (0, u.C)(e?.guild_id, n);
            return (0, l.bG)(
                [s.A, r.A, a.A],
                () => {
                    if (!t || null == e || e.type === c.rbe.PRIVATE_THREAD) return null;
                    let n = i.Le.has(e.type) ? a.A.getChannel(e.parent_id) : e;
                    return null != n && (0, d.pY)(s.A.getGuild(e.guild_id), n) ? n.id : null;
                },
                [t, e],
            );
        },
    },
);
