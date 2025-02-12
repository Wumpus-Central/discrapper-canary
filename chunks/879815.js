t.d(n, { Z: () => o });
var i = t(442837),
    r = t(314897),
    a = t(131951),
    l = t(979651);
function o(e) {
    return (0, i.cj)(
        [l.Z, a.Z, r.default],
        () =>
            (function (e) {
                var n;
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Z,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.Z,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.default,
                    u = null != e ? t.getVoiceState(e.getGuildId(), o.getId()) : null;
                return {
                    selfDeaf: i.isSelfDeaf(),
                    deaf: null !== (n = null == u ? void 0 : u.deaf) && void 0 !== n && n
                };
            })(e, l.Z, a.Z, r.default),
        [e]
    );
}
