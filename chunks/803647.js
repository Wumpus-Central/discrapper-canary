r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(846027),
    a = r(872810),
    o = r(314897),
    s = r(569545);
function l(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (null == e) return;
    let { streamType: r, guildId: l, channelId: u, ownerId: c } = e,
        d = (0, s.V9)({
            streamType: r,
            guildId: l,
            channelId: u,
            ownerId: c
        });
    c === o.default.getId() && i.Z.setGoLiveSource(null), a.g(d, n);
}
