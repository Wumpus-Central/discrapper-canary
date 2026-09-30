l.d(e, { A: () => a });
var t = l(5180),
    r = l(734057),
    i = l(808728),
    u = l(652215);
function a(n, e) {
    if (null == n || null == e) return null;
    if (!(0, t.ai)(n)) return r.A.getChannel(e);
    let l = i.Ay.getChannels(n),
        a =
            l[i.I6].find((n) => n.channel.id === e) ??
            l[i.vM].find((n) => n.channel.id === e) ??
            l[u.rbe.GUILD_CATEGORY].find((n) => n.channel.id === e);
    return a?.channel;
}
