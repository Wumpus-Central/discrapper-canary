n.d(t, { Z: () => l });
var r = n(442837),
    i = n(314897),
    a = n(131951),
    o = n(979651);
function l(e) {
    return (0, r.cj)(
        [o.Z, a.Z, i.default],
        () =>
            (function (e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Z,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.Z,
                    l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.default,
                    c = null != e ? n.getVoiceState(e.getGuildId(), l.getId()) : null;
                return {
                    selfDeaf: r.isSelfDeaf(),
                    deaf: null !== (t = null == c ? void 0 : c.deaf) && void 0 !== t && t
                };
            })(e, o.Z, a.Z, i.default),
        [e]
    );
}
