n.d(t, { Z: () => s });
var r = n(846027),
    i = n(872810),
    o = n(314897),
    a = n(569545);
function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (null == e) return;
    let { streamType: n, guildId: s, channelId: l, ownerId: c } = e,
        u = (0, a.V9)({
            streamType: n,
            guildId: s,
            channelId: l,
            ownerId: c
        });
    c === o.default.getId() && r.Z.setGoLiveSource(null), i.g(u, t);
}
