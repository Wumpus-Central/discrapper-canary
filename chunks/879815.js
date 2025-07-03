n.d(t, { Z: () => a });
var r = n(442837),
    i = n(314897),
    l = n(131951),
    o = n(979651);
function a(e) {
    return (0, r.cj)(
        [o.Z, l.Z, i.default],
        () =>
            (function (e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Z,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Z,
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.default,
                    s = null != e ? n.getVoiceState(e.getGuildId(), a.getId()) : null;
                return {
                    selfDeaf: r.isSelfDeaf(),
                    deaf: null != (t = null == s ? void 0 : s.deaf) && t
                };
            })(e, o.Z, l.Z, i.default),
        [e]
    );
}
