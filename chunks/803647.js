n.d(t, { Z: () => s });
var r = n(846027),
    i = n(872810),
    a = n(314897),
    o = n(569545);
function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    if (null == e) return;
    let { streamType: s, guildId: l, channelId: c, ownerId: u } = e,
        d = (0, o.V9)({
            streamType: s,
            guildId: l,
            channelId: c,
            ownerId: u
        });
    (u === a.default.getId() && r.Z.setGoLiveSource(null), i.g(d, t, n));
}
