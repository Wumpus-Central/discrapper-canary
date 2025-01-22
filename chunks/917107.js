r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(106351),
    a = r(314897),
    o = r(592125),
    s = r(944486),
    l = r(979651);
function u(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Z,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Z,
        u = n.getChannel(e),
        c = r.getVoiceChannelId();
    if (null == u) return !1;
    if (u.type === i.d.GUILD_VOICE) return !0;
    if (u.isPrivate()) return u.id === c || null != l.Z.getVoiceStatesForChannel(u.id)[a.default.getId()];
    return !1;
}
