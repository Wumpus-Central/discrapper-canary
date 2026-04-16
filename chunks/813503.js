n.d(t, { A: () => s });
var i = n(761640),
    l = n(309010),
    a = n(746080);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Ay,
        s = e.guild_id;
    return t.getChannelId(s) === a.VV.GUILD_HOME && n.getCurrentSidebarChannelId(a.VV.GUILD_HOME) === e.id;
}
