n.d(t, {
    v: () => o,
});
var r = n(311907),
    i = n(576705),
    a = n(140547),
    s = n(818348);

function o(e, t) {
    let { enableHangStatus: n } = (0, a.$j)({
            guildId: null == t ? void 0 : t.guild_id,
            location: e,
        }),
        o = (0, r.bG)([i.A], () => i.A.can(s.xB.CONNECT, t));
    return n && o;
}
