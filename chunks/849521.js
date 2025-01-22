r.d(n, {
    y: function () {
        return u;
    }
});
var i = r(873546),
    a = r(944486),
    o = r(914010),
    s = r(626135),
    l = r(981631);
function u(e, n) {
    s.default.track(l.rMx.APP_DIRECTORY_PROFILE_EMBED_SENT, {
        application_id: e,
        device_platform: i.tq ? 'mobile_web' : 'desktop_web',
        guild_id: o.Z.getGuildId(),
        channel_id: a.Z.getChannelId(),
        section: n
    });
}
