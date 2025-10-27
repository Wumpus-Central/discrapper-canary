n.d(t, { Z: () => s });
var r = n(442837),
    i = n(314897),
    l = n(131951),
    a = n(979651);
function s(e) {
    return (0, r.cj)(
        [a.Z, l.Z, i.default],
        () =>
            (function (e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Z,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Z,
                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.default,
                    o = null != e ? n.getVoiceState(e.getGuildId(), s.getId()) : null;
                return {
                    selfDeaf: r.isSelfDeaf(),
                    deaf: null != (t = null == o ? void 0 : o.deaf) && t,
                };
            })(e, a.Z, l.Z, i.default),
        [e],
    );
}
