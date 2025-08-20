n.d(t, { Z: () => l });
var r = n(442837),
    i = n(314897),
    a = n(131951),
    o = n(979651);
function s(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Z,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.Z,
        s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.default,
        l = null != e ? n.getVoiceState(e.getGuildId(), s.getId()) : null;
    return {
        selfDeaf: r.isSelfDeaf(),
        deaf: null != (t = null == l ? void 0 : l.deaf) && t,
    };
}
function l(e) {
    return (0, r.cj)([o.Z, a.Z, i.default], () => s(e, o.Z, a.Z, i.default), [e]);
}
