(n.d(t, {
    g: () => s,
    k: () => l
}),
    n(388685));
var r = n(442837),
    i = n(592125),
    a = n(430824),
    o = n(981631);
function s(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.Z, a.Z];
    if (null == e);
    else if (e === o.aib.DMS) return o.aib.DMS;
    else if (e === o.I_8) return o.aib.FAVORITES;
    else if (null != n.getGuild(e)) return o.aib.GUILD;
    else if (null != t.getChannel(e)) return o.aib.CHANNEL;
    return null;
}
function l(e) {
    return (0, r.e7)([i.Z, a.Z], () => s(e, [i.Z, a.Z]));
}
