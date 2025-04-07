n.d(t, { Z: () => o });
var r = n(442837),
    a = n(314897),
    l = n(131951),
    i = n(979651);
function o(e) {
    return (0, r.cj)(
        [i.Z, l.Z, a.default],
        () =>
            (function (e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Z,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.default,
                    s = null != e ? n.getVoiceState(e.getGuildId(), o.getId()) : null;
                return {
                    selfDeaf: r.isSelfDeaf(),
                    deaf: null != (t = null == s ? void 0 : s.deaf) && t
                };
            })(e, i.Z, l.Z, a.default),
        [e]
    );
}
