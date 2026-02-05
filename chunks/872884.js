l.d(n, { w: () => g });
var t = l(734057),
    i = l(808728),
    a = l(71393),
    r = l(576705),
    d = l(383501),
    s = l(309010),
    u = l(977997),
    o = l(652215);
function c(e, n) {
    return null != e && !!e.isGuildVocal() && (null == n || e.id !== n) && !!r.A.can(o.xBc.CONNECT, e);
}
let A = [t.A, i.Ay, a.A, d.A, s.A, u.A];
function g(e, n) {
    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : A,
        [t, a, r, d, s, u] = l,
        o = r.getGuild(e),
        g = o?.afkChannelId ?? null;
    if (n?.getGuildId() === e && c(n, g)) return n;
    let h = u.getCurrentClientVoiceChannelId(e),
        E = null != h ? t.getChannel(h) : null;
    if (c(E, g)) return E;
    let I = d.getChannelId() ?? d.getLastSessionVoiceChannelId(),
        b = null != I ? t.getChannel(I) : null;
    if (c(b, g)) return b;
    let f = s.getVoiceChannelId(),
        C = null != f ? t.getChannel(f) : null;
    if (C?.getGuildId() === e && c(C, g)) return C;
    for (let { channel: n } of a.getChannels(e)[i.vM]) if (c(n, g)) return n;
    return null;
}
