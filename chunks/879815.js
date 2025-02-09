n.d(t, { Z: () => o });
var i = n(442837),
    r = n(314897),
    a = n(131951),
    l = n(979651);
function o(e) {
    return (0, i.cj)(
        [l.Z, a.Z, r.default],
        () =>
            (function (e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Z,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.Z,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.default,
                    u = null != e ? n.getVoiceState(e.getGuildId(), o.getId()) : null;
                return {
                    selfDeaf: i.isSelfDeaf(),
                    deaf: null !== (t = null == u ? void 0 : u.deaf) && void 0 !== t && t
                };
            })(e, l.Z, a.Z, r.default),
        [e]
    );
}
