t.d(n, { F: () => o });
var l = t(17928),
    i = t(95701),
    a = t(734057),
    r = t(317525),
    u = t(71393),
    s = t(278296),
    d = t(677166),
    c = t(652215);
function o(e, n) {
    let t = (0, d.C)(e?.guild_id, n);
    return (0, l.bG)(
        [u.A, r.A, a.A],
        () => {
            if (!t || null == e || e.type === c.rbe.PRIVATE_THREAD) return null;
            let n = i.Le.has(e.type) ? a.A.getChannel(e.parent_id) : e;
            return null != n && (0, s.pY)(u.A.getGuild(e.guild_id), n) ? n.id : null;
        },
        [t, e],
    );
}
