n.d(t, { Z: () => l });
var i = n(106351),
    r = n(314897),
    a = n(592125),
    s = n(944486),
    o = n(979651);
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Z,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Z,
        l = t.getChannel(e),
        u = n.getVoiceChannelId();
    return null != l && (l.type === i.d.GUILD_VOICE || (!!l.isPrivate() && (l.id === u || null != o.Z.getVoiceStatesForChannel(l.id)[r.default.getId()])));
}
