n.d(t, { Z: () => l });
var i = n(442837),
    a = n(314897),
    r = n(131951),
    o = n(979651);
function l(e) {
    return (0, i.cj)(
        [o.Z, r.Z, a.default],
        () =>
            (function (e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Z,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.Z,
                    l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.default,
                    c = null != e ? n.getVoiceState(e.getGuildId(), l.getId()) : null;
                return {
                    selfDeaf: i.isSelfDeaf(),
                    deaf: null !== (t = null == c ? void 0 : c.deaf) && void 0 !== t && t
                };
            })(e, o.Z, r.Z, a.default),
        [e]
    );
}
