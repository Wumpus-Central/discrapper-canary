r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(592125),
    a = r(19780),
    o = r(797258),
    s = r(626135),
    l = r(981631);
function u(e, n, r) {
    var u, c;
    s.default.track(l.rMx.VOICE_CALL_TRANSFER, {
        source_platform: null != r ? (null === (u = o.Z.getSessionById(r)) || void 0 === u ? void 0 : u.clientInfo.os) : 'discord_client',
        guild_id: null === (c = i.Z.getChannel(e)) || void 0 === c ? void 0 : c.guild_id,
        channel_id: e,
        rtc_connection_id: a.Z.getRTCConnectionId(),
        target_platform: n
    });
}
