n.d(t, { Z: () => l });
var r = n(592125),
    i = n(19780),
    o = n(797258),
    a = n(626135),
    s = n(981631);
function l(e, t, n) {
    var l, c;
    a.default.track(s.rMx.VOICE_CALL_TRANSFER, {
        source_platform: null != n ? (null == (l = o.Z.getSessionById(n)) ? void 0 : l.clientInfo.os) : 'discord_client',
        guild_id: null == (c = r.Z.getChannel(e)) ? void 0 : c.guild_id,
        channel_id: e,
        rtc_connection_id: i.Z.getRTCConnectionId(),
        target_platform: t
    });
}
