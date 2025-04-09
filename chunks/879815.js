n.d(t, { Z: () => l });
var r = n(442837),
    i = n(314897),
    o = n(131951),
    a = n(979651);
function l(e) {
    return (0, r.cj)(
        [a.Z, o.Z, i.default],
        () =>
            (function (e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Z,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Z,
                    l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.default,
                    s = null != e ? n.getVoiceState(e.getGuildId(), l.getId()) : null;
                return {
                    selfDeaf: r.isSelfDeaf(),
                    deaf: null != (t = null == s ? void 0 : s.deaf) && t
                };
            })(e, a.Z, o.Z, i.default),
        [e]
    );
}
