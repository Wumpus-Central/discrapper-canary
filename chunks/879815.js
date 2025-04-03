n.d(t, { Z: () => s });
var r = n(442837),
    i = n(314897),
    o = n(131951),
    l = n(979651);
function s(e) {
    return (0, r.cj)(
        [l.Z, o.Z, i.default],
        () =>
            (function (e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Z,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Z,
                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.default,
                    a = null != e ? n.getVoiceState(e.getGuildId(), s.getId()) : null;
                return {
                    selfDeaf: r.isSelfDeaf(),
                    deaf: null != (t = null == a ? void 0 : a.deaf) && t
                };
            })(e, l.Z, o.Z, i.default),
        [e]
    );
}
