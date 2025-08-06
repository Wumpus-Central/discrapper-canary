n.d(t, { g: () => a }), n(388685), n(442837);
var r = n(592125),
    i = n(430824),
    o = n(981631);
function a(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.Z, i.Z];
    if (null == e);
    else if (e === o.aib.DMS) return o.aib.DMS;
    else if (e === o.I_8) return o.aib.FAVORITES;
    else if (null != n.getGuild(e)) return o.aib.GUILD;
    else if (null != t.getChannel(e)) return o.aib.CHANNEL;
    return null;
}
