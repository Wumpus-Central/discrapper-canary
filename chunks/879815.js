n.d(t, { Z: () => o });
var r = n(442837),
    i = n(314897),
    l = n(131951),
    a = n(979651);
function o(e) {
    return (0, r.cj)(
        [a.Z, l.Z, i.default],
        () =>
            (function (e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Z,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Z,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.default,
                    u = null != e ? n.getVoiceState(e.getGuildId(), o.getId()) : null;
                return {
                    selfDeaf: r.isSelfDeaf(),
                    deaf: null !== (t = null == u ? void 0 : u.deaf) && void 0 !== t && t
                };
            })(e, a.Z, l.Z, i.default),
        [e]
    );
}
