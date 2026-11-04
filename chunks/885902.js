var t = l(855986),
    i = l(95701),
    a = l(734057),
    r = l(317525),
    u = l(71393),
    s = l(278296),
    d = l(677166),
    c = l(652215);
l.d(
    n,
    {},
    {
        F: function (e, n) {
            let l = (0, d.C)(e?.guild_id, n);
            return (0, t.bG)(
                [u.A, r.A, a.A],
                () => {
                    if (!l || null == e || e.type === c.rbe.PRIVATE_THREAD) return null;
                    let n = i.Le.has(e.type) ? a.A.getChannel(e.parent_id) : e;
                    return null != n && (0, s.pY)(u.A.getGuild(e.guild_id), n) ? n.id : null;
                },
                [l, e],
            );
        },
    },
);
