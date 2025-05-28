n.d(t, { Z: () => s });
var r = n(846027),
    i = n(872810),
    a = n(314897),
    o = n(569545);
function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (null == e) return;
    let { streamType: n, guildId: s, channelId: l, ownerId: c } = e,
        u = (0, o.V9)({
            streamType: n,
            guildId: s,
            channelId: l,
            ownerId: c
        });
    c === a.default.getId() && r.Z.setGoLiveSource(null), i.g(u, t);
}
