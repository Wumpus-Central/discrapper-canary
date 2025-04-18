n.d(t, { Z: () => l });
var r = n(106351),
    i = n(314897),
    a = n(592125),
    o = n(944486),
    s = n(979651);
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Z,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Z,
        l = t.getChannel(e),
        c = n.getVoiceChannelId();
    return null != l && (l.type === r.d.GUILD_VOICE || (!!l.isPrivate() && (l.id === c || null != s.Z.getVoiceStatesForChannel(l.id)[i.default.getId()])));
}
