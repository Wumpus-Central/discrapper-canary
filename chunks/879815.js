n.d(t, { Z: () => a });
var l = n(442837),
    i = n(314897),
    r = n(131951),
    u = n(979651);
function a(e) {
    return (0, l.cj)(
        [u.Z, r.Z, i.default],
        () =>
            (function (e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Z,
                    l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.Z,
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.default,
                    o = null != e ? n.getVoiceState(e.getGuildId(), a.getId()) : null;
                return {
                    selfDeaf: l.isSelfDeaf(),
                    deaf: null !== (t = null == o ? void 0 : o.deaf) && void 0 !== t && t
                };
            })(e, u.Z, r.Z, i.default),
        [e]
    );
}
