n.d(t, { Z: () => o });
var i = n(846027),
    r = n(872810),
    a = n(314897),
    s = n(569545);
function o(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (null == e) return;
    let { streamType: n, guildId: o, channelId: l, ownerId: u } = e,
        c = (0, s.V9)({
            streamType: n,
            guildId: o,
            channelId: l,
            ownerId: u
        });
    u === a.default.getId() && i.Z.setGoLiveSource(null), r.g(c, t);
}
