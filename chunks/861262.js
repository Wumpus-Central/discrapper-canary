(n.d(t, { g: () => o }), n(388685), n(442837));
var r = n(592125),
    i = n(430824),
    a = n(981631);
function o(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.Z, i.Z];
    if (null == e);
    else if (e === a.aib.DMS) return a.aib.DMS;
    else if (e === a.I_8) return a.aib.FAVORITES;
    else if (null != n.getGuild(e)) return a.aib.GUILD;
    else if (null != t.getChannel(e)) return a.aib.CHANNEL;
    return null;
}
