n.d(t, { A: () => a });
var i = n(761640),
    l = n(309010),
    s = n(746080);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Ay,
        a = e.guild_id;
    return t.getChannelId(a) === s.VV.GUILD_HOME && n.getCurrentSidebarChannelId(s.VV.GUILD_HOME) === e.id;
}
