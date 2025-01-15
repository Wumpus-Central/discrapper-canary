n.d(e, {
    Z: function () {
        return u;
    }
});
var r = n(442837),
    i = n(314897),
    l = n(131951),
    a = n(979651);
function u(t) {
    return (0, r.cj)(
        [a.Z, l.Z, i.default],
        () =>
            (function (t) {
                var e;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Z,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Z,
                    u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.default,
                    o = null != t ? n.getVoiceState(t.getGuildId(), u.getId()) : null;
                return {
                    selfDeaf: r.isSelfDeaf(),
                    deaf: null !== (e = null == o ? void 0 : o.deaf) && void 0 !== e && e
                };
            })(t, a.Z, l.Z, i.default),
        [t]
    );
}
